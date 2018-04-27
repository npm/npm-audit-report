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
    if (total === 0) {
      log(`# ${Utils.color('[+]', 'green', config.withColor)} no known vulnerabilities found`)
      log(`#     Packages audited: ${data.metadata.totalDependencies} (${data.metadata.devDependencies} dev, ${data.metadata.optionalDependencies} optional)`)
    } else {
      log(`\n# ${Utils.color('[!]', 'red', config.withColor)} ${total} ${total === 1 ? 'vulnerability' : 'vulnerabilities'} found - Packages audited: ${data.metadata.totalDependencies} (${data.metadata.devDependencies} dev, ${data.metadata.optionalDependencies} optional)`)
      log(`#     Severity: ${severities}`)
    }
  }

  const reportTitle = function () {
    const tableOptions = {
      colWidths: [78]
    }
    tableOptions.chars = blankChars
    const table = new Table(tableOptions)
    table.push([{
      content: '### npm audit security report ###',
      vAlign: 'center',
      hAlign: 'center'
    }])
    log(table.toString())
  }

  const actions = function (data, config) {
    reportTitle()


    if (Object.keys(data.advisories).length > 0) {
      // vulns found display a report.

      let reviewFlag = false
      let reviewCount = 0
      data.actions.forEach((action) => {
        if (action.action === 'update' || action.action === 'install') {
          const recommendation = getRecommendation(action, config)
          const label = action.resolves.length === 1 ? 'vulnerability' : 'vulnerabilities'
          log(`${recommendation.cmd} # Resolves ${action.resolves.length} ${label} ${recommendation.isBreaking ? '[MAJOR]' : ''}`) 

        }
        if (action.action === 'review') {
          reviewCount = reviewCount + action.resolves.length
        }
      })
      const reviewLabel = reviewCount === 1 ? 'vulnerability' : 'vulnerabilities'
      log(`# in addition ${reviewCount} ${reviewLabel} require manual review.`)
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
  if (action.action === 'install') {
    const isDev = action.resolves[0].dev

    return {
      cmd: `npm install ${isDev ? '--dev ': ''}${action.module}@${action.target}`,
      isBreaking: action.isMajor
    }
  } else {
    return {
      cmd: `npm update ${action.module} --depth ${action.depth}`,
      isBreaking: false
    }
  }
}

module.exports = report
