'use strict'

const colors = require('ansicolors')
const Table = require('cli-table2')

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

  const header = function () {
    const date = new Date()
    logger.log(`# npm audit security report - ${date}`)
  }

  const footer = function (metadata) {
    let total = 0

    const severities = Object.entries(metadata.vulnerabilities).filter((value) => {
      total = total + value[1]
      if (value[1] > 0) {
        return true
      }
    }).map((value) => {
      return `${value[1]} ${severityLabel(value[0], false)}`
    }).join(' | ')

    logger.log(`\n${colors.red('[!]')} ${total} ${total === 1 ? 'vulnerability' : 'vulnerabilities'} found [${data.metadata.totalDependencies} packages audited]`)
    logger.log(`    ${severities}`)
  }

  const actions = function (data, config) {
    if (Object.keys(data.advisories).length === 0) {
      logger.log(`${colors.green('[+]')} no known vulnerabilities found [${data.metadata.totalDependencies} packages audited]`)
    } else {
      // vulns found display a report.

      let reviewFlag = false

      data.actions.forEach((action) => {
        if (action.action === 'update' || action.action === 'install') {
          const recommendation = getRecommendation(action, config)
          const label = action.resolves.length === 1 ? 'vulnerability' : 'vulnerabilities'
          logger.log(`\n\nRun \`${recommendation.cmd}\` to resolve ${action.resolves.length} ${label}`)

          action.resolves.forEach((resolution) => {
            const advisory = data.advisories[resolution.id]
            const table = new Table({
              colWidths: [15, 62],
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

            return logger.log(table.toString())
          })
        }
        if (action.action === 'review') {
          if (!reviewFlag) {
            const table = new Table({
              colWidths: [78]
            })
            table.push([{
              content: 'Manual Review\nSome vulnerabilities require your attention to resolve',
              vAlign: 'center',
              hAlign: 'center'
            }])
            logger.log('\n\n')
            logger.log(table.toString())
          }
          reviewFlag = true

          action.resolves.forEach((resolution) => {
            const advisory = data.advisories[resolution.id]
            const table = new Table({
              colWidths: [15, 62],
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

            return logger.log(table.toString())
          })
        }
      })
    }
  }

  return new Promise((resolve, reject) => {
    header()
    actions(data, config)
    footer(data.metadata)

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
