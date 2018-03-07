'use strict'

const colors = require('ansicolors')
const styles = require('ansistyles')
const Table = require('cli-table2')

const blankChars = {
  'top': ' ',
  'top-mid': ' ',
  'top-left': ' ',
  'top-right': ' ',
  'bottom': ' ',
  'bottom-mid': ' ',
  'bottom-left': ' ',
  'bottom-right': ' ',
  'left': ' ',
  'left-mid': ' ',
  'mid': ' ',
  'mid-mid': ' ',
  'right': ' ',
  'right-mid': ' ',
  'middle': ' '
}

const severity = {
  critical: {
    stars: '****',
    color: colors.magenta
  },
  high: {
    stars: '***',
    color: colors.red
  },
  moderate: {
    stars: '**',
    color: colors.yellow
  },
  low: {
    stars: '*',
    color: function (str) { return str }
  }
}

const severityLabel = function (sev, star = false) {
  if (star) {
    return severity[sev].color(severity[sev].stars)
  }
  return severity[sev].color(sev)
}

const report = function (data, options, logger = console) {
  const defaults = {
    severityThreshold: ''
  }

  const config = Object.assign({}, defaults, options)

  const header = function () {
    const date = new Date()
    logger.log(`# npm audit security report - ${date}`)
  }

  const actions = function (data, config) {
    if (Object.keys(data.advisories).length === 0) {
      logger.log(`${colors.green('[+]')} no known vulnerabilities found [${data.metadata.totalDependencies} packages audited]`)
    } else {
      // vulns found display a report.

      data.actions.forEach((action) => {
        if (action.action === 'update' || action.action === 'install') {
          const recommendation = getRecommendation(action, config)
          const label = action.resolves.length === 1 ? 'vulnerability' : 'vulnerabilities'
          logger.log(`\n\nRun \`${recommendation.cmd}\` to resolve ${action.resolves.length} ${label}`)

          action.resolves.forEach((resolution) => {
            const advisory = data.advisories[resolution.id]
            const table = new Table({
              colWidths: [15, 65],
              wordWrap: true
            })

            const header = {}
            header[severityLabel(advisory.severity)] = advisory.title
            table.push(
              header,
              {'Package': advisory.module_name},
              {'Dependency of': resolution.path.split('>')[0]},
              {'More info': `https://nodesecurity.io/advisories/${advisory.id}`}
            )

            logger.log(table.toString())
          })
        }
      })
      return report.table
    }
  }

  return new Promise((resolve, reject) => {
    header()
    const report = actions(data, config)
    //footer(data, vulnData, config)

    return resolve()
  })
}

const getRecommendation = function (action, config) {
  if (action.action === 'update') {
    return {
      cmd: `npm update ${action.module} --depth ${action.depth}`,
      isBreaking: false
    }
  }
}

module.exports = report
