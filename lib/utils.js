'use strict'

const ccs = require('console-control-strings')

const severityColors = {
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

const color = exports.color = function (value, colorName, withColor) {
  return (colorName && withColor) ? ccs.color(colorName) + value + ccs.color('reset') : value
}

const severityLabel = exports.severityLabel = function (sev, withColor, bold) {
  if (!(sev in severityColors)) return sev.charAt(0).toUpperCase() + sev.substr(1).toLowerCase()
  let colorName = severityColors[sev].color
  if (bold) colorName = [colorName, 'bold']
  return color(severityColors[sev].label, colorName, withColor)
}

exports.vulnTotal = function (vulns) {
  return Object.keys(vulns).reduce((accumulator, severity) => {
    const vulnCount = vulns[severity]
    accumulator += vulnCount

    return accumulator
  }, 0)
}

exports.vulnSummary = function (vulns, config) {
  config = Object.assign({}, config)
  const summary = {
    total: 0
  }

  const sev = Object.keys(vulns).reduce((accumulator, severity) => {
    const vulnCount = vulns[severity]
    if (vulnCount > 0) {
      summary.total += vulnCount
      accumulator.push(`${vulnCount} ${severityLabel(severity, config.withColor).toLowerCase()}`)
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
    excludeProd: false
  }, config)
  data.actions.forEach((action) => {
    action.resolves = action.resolves.filter(({id, dev}) => {
      const exclude = config[dev ? 'excludeDev' : 'excludeProd']
      if (exclude) {
        const severity = data.advisories[id].severity
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
