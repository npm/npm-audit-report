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

  let exit = 0

  const actions = function (data, config) {
    const tableOptions = {
      colWidths: [78]
    }
    tableOptions.chars = blankChars
    const table = new Table(tableOptions)
    table.push([{
      content: '=== npm audit security report (list) ===',
      vAlign: 'center',
      hAlign: 'center'
    }])

    let output = table.toString()
    let installUpdateOutput = ''
    let reviewOutput = ''

    if (Object.keys(data.advisories).length !== 0) {
      // Create accumulating table for install/update recommendations
      const installUpdateTableOptions = {
        head: ['Level', 'Severity', 'Package', 'Recommendation', 'More info', 'Notes'],
        wordWrap: true,
        style: {
          head: ['green']
        }
      }

      installUpdateTableOptions.chars = config.withUnicode ? {
        'mid': '',
        'left-mid': '',
        'mid-mid': '',
        'right-mid': ''
      } : blankChars
      let installUpdateTable = new Table(installUpdateTableOptions)

      // Create accumulating table for review recommendations
      const reviewTableOptions = {
        head: ['Level', 'Severity', 'Package', 'Patched in', 'More info'],
        wordWrap: true,
        style: {
          head: ['green']
        }
      }
      reviewTableOptions.chars = config.withUnicode ? {
        'mid': '',
        'left-mid': '',
        'mid-mid': '',
        'right-mid': ''
      } : blankChars

      const reviewTable = new Table(reviewTableOptions)

      let installUpdateHeader = false
      let reviewFlag = false
      let isBreaking = false

      data.actions.forEach((action) => {
        let l = {}
        // Start with install/update actions
        if (action.action === 'update' || action.action === 'install') {
          // Shows title once
          if (!installUpdateHeader) {
            const tableOptions = {
              colWidths: [78]
            }
            tableOptions.chars = blankChars
            const tableTitle = new Table(tableOptions)
            tableTitle.push([{
              content: 'Automatic fixes\nThe following vulnerabilities can be automatically fixed',
              vAlign: 'center',
              hAlign: 'center'
            }])

            installUpdateOutput = tableTitle.toString() + '\n'
            installUpdateHeader = true
          }

          const recommendation = getRecommendation(action, config)

          l.recommendation = Utils.color(' ' + recommendation.cmd + ' ', 'bold', config.withColor)
          if (recommendation.isBreaking) {
            isBreaking = true
          }
          l.notes = recommendation.isBreaking ? '*' : ''

          // TODO: Verify: The advisory seems to repeat and be the same for all the 'resolves'. Is it true?
          const advisory = data.advisories[action.resolves[0].id]
          l.sevLevel = Utils.severityLabel(advisory.severity, config.withColor)
          l.severity = Utils.color(advisory.title, 'bold', config.withColor)
          l.package = advisory.module_name
          l.moreInfo = `https://nodesecurity.io/advisories/${advisory.id}`

          installUpdateTable.push([l.sevLevel, l.severity, l.package, l.recommendation, l.moreInfo, l.notes])
        }

        if (action.action === 'review') {
          if (!reviewFlag) {
            const tableOptions = {
              colWidths: [78]
            }
            tableOptions.chars = blankChars
            const table = new Table(tableOptions)
            table.push([{
              content: 'Manual Review\nSome vulnerabilities require your attention to resolve\nVisit https://go.npm.me/audit-guide for additional guidance',
              vAlign: 'center',
              hAlign: 'center'
            }])

            reviewOutput = table.toString() + '\n'
            reviewFlag = true
          }

          action.resolves.forEach((resolution) => {
            const advisory = data.advisories[resolution.id]

            l.sevLevel = Utils.severityLabel(advisory.severity, config.withColor)
            l.severity = Utils.color(advisory.title, 'bold', config.withColor)
            l.package = advisory.module_name
            l.moreInfo = `https://nodesecurity.io/advisories/${advisory.id}`
            l.patchedIn = advisory.patched_versions.replace(' ', '') === '<0.0.0' ? 'No patch available' : advisory.patched_versions

            reviewTable.push([l.sevLevel, l.severity, l.package, l.patchedIn, l.moreInfo])
          }) // forEach resolves
        } // is review
      }) // forEach actions

      const breakingWarning = isBreaking ? ` (*) SEMVER WARNING: Recommended action is a potentially breaking change` : ''

      installUpdateOutput += installUpdateTable.toString() + `\n${breakingWarning}`
      reviewOutput += reviewTable.toString() + '\n'
    }

    return output + installUpdateOutput + reviewOutput
  }

  const footer = function (metadata) {
    let result = ''

    let total = 0
    const sev = []

    const keys = Object.keys(metadata.vulnerabilities)
    for (let key of keys) {
      const value = metadata.vulnerabilities[key]
      total = total + value
      if (value > 0) {
        sev.push([key, value])
      }
    }
    const severities = sev.map((value) => {
      return `${value[1]} ${Utils.severityLabel(value[0], false)}`
    }).join(' | ')

    if (total > 0) {
      exit = 1
    }
    if (total === 0) {
      result += `${Utils.color('[+]', 'brightGreen', config.withColor)} no known vulnerabilities found\n`
      result += `    Packages audited: ${data.metadata.totalDependencies} (${data.metadata.devDependencies} dev, ${data.metadata.optionalDependencies} optional)\n`
    } else {
      result += `\n${Utils.color('[!]', 'brightRed', config.withColor)} ${total} ${total === 1 ? 'vulnerability' : 'vulnerabilities'} found - Packages audited: ${data.metadata.totalDependencies} (${data.metadata.devDependencies} dev, ${data.metadata.optionalDependencies} optional)\n`
      result += `    Severity: ${severities}\n`
    }
    return result
  }

  let finalOutput = actions(data, config)
  finalOutput += footer(data.metadata)

  return {
    report: finalOutput,
    exitCode: exit
  }
}

const getRecommendation = function (action, config) {
  if (action.action === 'install') {
    const isDev = action.resolves[0].dev

    return {
      cmd: `npm install ${isDev ? '--dev ' : ''}${action.module}@${action.target}`,
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
