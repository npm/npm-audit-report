'use strict'

const ccs = require('console-control-strings')

const severityMetadata = {
  critical: {
    color: 'brightMagenta',
    label: 'Critical'
  },
  high: {
    color: 'brightRed',
    label: 'High'
  },
  moderate: {
    color: 'brightYellow',
    label: 'Moderate'
  },
  low: {
    color: 'bold',
    label: 'Low'
  },
  info: {
    color: '',
    label: 'Info'
  }
}
const severityOrder = ['critical', 'high', 'moderate', 'low', 'info']
severityOrder.forEach((severity, order) => {
  severityMetadata[severity].order = order
})

const color = exports.color = function (value, colorName, withColor) {
  return (colorName && withColor) ? ccs.color(colorName) + value + ccs.color('reset') : value
}

const severityLabel = exports.severityLabel = function (sev, withColor, bold) {
  if (!(sev in severityMetadata)) return sev.charAt(0).toUpperCase() + sev.substr(1).toLowerCase()
  let colorName = severityMetadata[sev].color
  if (bold) colorName = [colorName, 'bold']
  return color(severityMetadata[sev].label, colorName, withColor)
}

const severityCompare = exports.severityCompare = function (a, b) {
  a = a.severity || a
  b = b.severity || b
  const oA = a in severityMetadata ? severityMetadata[a].order : -1
  const oB = b in severityMetadata ? severityMetadata[b].order : -1
  return oA - oB
}

exports.vulnTotal = function (vulns) {
  return Object.keys(vulns).reduce((accumulator, severity) => {
    const vulnCount = vulns[severity]
    accumulator += vulnCount

    return accumulator
  }, 0)
}

exports.vulnSummary = function (vulns, config) {
  config = Object.assign({
    excludeDev: false,
    excludeProd: false,
    severityThreshold: 'info'
  }, config)
  const summary = {
    total: 0
  }

  const sev = Object.keys(vulns).reduce((accumulator, severity) => {
    const excludeSeverity = severityCompare(config.severityThreshold, severity) < 0

    if (!excludeSeverity) {
      const vulnCount = vulns[severity]
      if (vulnCount > 0) {
        summary.total += vulnCount
        accumulator.push(`${vulnCount} ${severityLabel(severity, config.withColor).toLowerCase()}`)
      }
    }

    return accumulator
  }, [])

  if (summary.total === 0) {
    summary.msg = `found ${color('0', 'brightGreen', config.withColor)} vulnerabilities`
  } else if (sev.length === 1) {
    summary.msg = `found ${sev[0]} severity vulnerabilit${summary.total === 1 ? 'y' : 'ies'}`
  } else {
    summary.msg = `found ${color(summary.total, 'brightRed', config.withColor)} vulnerabilities (${sev.join(', ')})`
  }

  return summary
}

exports.vulnFilter = function (data, config) {
  config = Object.assign({
    excludeDev: false,
    excludeProd: false,
    severityThreshold: 'info'
  }, config)
  data.actions.forEach((action) => {
    action.resolves = action.resolves.filter(({id, dev}) => {
      const severity = data.advisories[id].severity
      const excludeSeverity = severityCompare(config.severityThreshold, severity) < 0
      const exclude = config[dev ? 'excludeDev' : 'excludeProd'] || excludeSeverity
      if (exclude) {
        data.metadata.vulnerabilities[severity]--
        data.metadata.excluded = data.metadata.excluded || {}
        data.metadata.excluded[severity] = (data.metadata.excluded[severity] || 0) + 1
      }
      return !exclude
    })
  })
}

exports.severities = function (vulns) {
  return Object.keys(vulns).reduce((accumulator, severity) => {
    const vulnCount = vulns[severity]
    if (vulnCount > 0) accumulator.push([severity, vulnCount])

    return accumulator
  }, [])
}

exports.getRecommendation = function (action, config) {
  if (action.action === 'install') {
    const isDev = action.resolves[0].dev

    return {
      cmd: `npm install ${isDev ? '--save-dev ' : ''}${action.module}@${action.target}`,
      isBreaking: action.isMajor
    }
  } else {
    return {
      cmd: `npm update ${action.module} --depth ${action.depth}`,
      isBreaking: false
    }
  }
}
