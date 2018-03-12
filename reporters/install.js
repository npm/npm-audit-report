'use strict'

const colors = require('ansicolors')

const severityColors = {
  critical: colors.magenta,
  high: colors.red,
  moderate: colors.yellow,
  low: function (str) { return str }
}

const severityLabel = function (sev, star = false) {
  return severityColors[sev](sev)
}

const report = function (data, options, logger = console) {
  const defaults = {
    severityThreshold: ''
  }

  const config = Object.assign({}, defaults, options)

  return new Promise((resolve, reject) => {
    if (Object.keys(data.advisories).length === 0) {
      logger.log(`${colors.green('[+]')} no known vulnerabilities found [${data.metadata.totalDependencies} packages audited]`)
    } else {
      // vulns found, summarize
      let total = 0
      let severityCounts = {
        critical: 0,
        high: 0,
        moderate: 0,
        low: 0
      }

      data.actions.forEach((action) => {
        total = total + action.resolves.length

        action.resolves.forEach((resolution) => {
          const advisory = data.advisories[resolution.id]
          severityCounts[advisory.severity]++
        })
      })
      const severities = Object.entries(severityCounts).filter((value) => {
        if (value[1] > 0) {
          return true
        }
      }).map((value) => {
        return `${value[1]} ${severityLabel(value[0], false)}`
      }).join(' | ')

      logger.log(`${colors.red('[!]')} ${total} ${total === 1 ? 'vulnerability' : 'vulnerabilities'} found [${data.metadata.totalDependencies} packages audited]`)
      logger.log(`    ${severities}`)
      logger.log(`    Run \`npm audit\` for more detail`)
    }
    return resolve()
  })
}

module.exports = report
