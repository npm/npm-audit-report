'use strict'

const Table = require('cli-table2')
const Utils = require('../lib/utils')

const report = function (data, options) {
  const defaults = {
    severityThreshold: 'info'
  }

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

  const config = Object.assign({}, defaults, options)

  let output = ''
  let exit = 0

  const log = function (value) {
    output = output + value + '\n'
  }

  const footer = function (metadata) {
    let total = 0

    const severities = Object.entries(metadata.vulnerabilities).filter((value) => {
      total = total + value[1]
      if (value[1] > 0) {
        return true
      }
    }).map((value) => {
      return `${value[1]} ${Utils.severityLabel(value[0], false)}`
    }).join(' | ')

    if (total > 0) {
      exit = 1
    }
    log(`\n${Utils.color('[!]', 'red', config.withColor)} ${total} ${total === 1 ? 'vulnerability' : 'vulnerabilities'} found [${data.metadata.totalDependencies} packages audited]`)
    log(`    ${severities}`)
  }

  const actions = function (data, config) {
    const date = new Date()
    log(`# npm audit security report - ${date}`)

    if (Object.keys(data.advisories).length === 0) {
      log(`${Utils.color('[+]', 'green', config.withColor)} no known vulnerabilities found [${data.metadata.totalDependencies} packages audited]`)
    } else {
      // vulns found display a report.

      let reviewFlag = false

      data.actions.forEach((action) => {
        if (action.action === 'update' || action.action === 'install') {
          const recommendation = getRecommendation(action, config)
          const label = action.resolves.length === 1 ? 'vulnerability' : 'vulnerabilities'
          log(`\n\nRun \`${recommendation.cmd}\` to resolve ${action.resolves.length} ${label}`)

          action.resolves.forEach((resolution) => {
            const advisory = data.advisories[resolution.id]
            const tableOptions = {
              colWidths: [15, 62],
              wordWrap: true
            }
            if (!config.withUnicode) {
              tableOptions.chars = blankChars
            }
            const table = new Table(tableOptions)

            const header = {}
            header[Utils.severityLabel(advisory.severity)] = advisory.title
            table.push(
              header,
              {'Package': advisory.module_name},
              {'Dependency of': resolution.path.split('>')[0]},
              {'More info': `https://nodesecurity.io/advisories/${advisory.id}`}
            )

            log(table.toString())
          })
        }
        if (action.action === 'review') {
          if (!reviewFlag) {
            const tableOptions = {
              colWidths: [78]
            }
            if (!config.withUnicode) {
              tableOptions.chars = blankChars
            }
            const table = new Table(tableOptions)
            table.push([{
              content: 'Manual Review\nSome vulnerabilities require your attention to resolve',
              vAlign: 'center',
              hAlign: 'center'
            }])
            log('\n\n')
            log(table.toString())
          }
          reviewFlag = true

          action.resolves.forEach((resolution) => {
            const advisory = data.advisories[resolution.id]
            const tableOptions = {
              colWidths: [15, 62],
              wordWrap: true
            }
            if (!config.withUnicode) {
              tableOptions.chars = blankChars
            }
            const table = new Table(tableOptions)

            const header = {}
            header[Utils.severityLabel(advisory.severity, config.withColor)] = advisory.title
            table.push(
              header,
              {'Package': advisory.module_name},
              {'Dependency of': resolution.path.split('>')[0]},
              {'More info': `https://nodesecurity.io/advisories/${advisory.id}`}
            )

            log(table.toString())
          })
        }
      })
    }
  }

  actions(data, config)
  footer(data.metadata)

  return {
    report: output,
    exitCode: exit
  }
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
