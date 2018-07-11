'use strict'

const Table = require('cli-table3')
const Utils = require('../lib/utils')

const report = function (data, options) {
  const defaults = {}

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

  let output = []

  const log = function (value) {
    output.push(value)
  }

  Utils.vulnFilter(data, config)
  const summary = Utils.vulnSummary(data.metadata.vulnerabilities, config)

  const header = function () {
    const tableOptions = {
      colWidths: [78]
    }
    tableOptions.chars = blankChars
    const table = new Table(tableOptions)
    table.push([{
      content: '=== npm audit security report ===',
      vAlign: 'center',
      hAlign: 'center'
    }])
    log(table.toString())
  }

  const actions = function (data, config) {
    let reviewFlag = false

    data.actions.forEach((action) => {
      if (action.action === 'update' || action.action === 'install') {
        const recommendation = Utils.getRecommendation(action, config)
        const label = action.resolves.length === 1 ? 'vulnerability' : 'vulnerabilities'
        log(`# Run ${Utils.color(' ' + recommendation.cmd + ' ', 'inverse', config.withColor)} to resolve ${action.resolves.length} ${label}`)
        if (recommendation.isBreaking) {
          log(`SEMVER WARNING: Recommended action is a potentially breaking change`)
        }
      }
      if (action.action === 'review' && !reviewFlag) {
        const tableOptions = {
          colWidths: [78]
        }
        if (!config.withUnicode) {
          tableOptions.chars = blankChars
        }
        const table = new Table(tableOptions)
        table.push([{
          content: 'Manual Review\nSome vulnerabilities require your attention to resolve\n\nVisit https://go.npm.me/audit-guide for additional guidance',
          vAlign: 'center',
          hAlign: 'center'
        }])

        log(table.toString())
        reviewFlag = true
      }

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

        table.push(
          {[Utils.severityLabel(advisory.severity, config.withColor, true)]: Utils.color(advisory.title, 'bold', config.withColor)},
          {'Package': advisory.module_name},
          {'Dependency of': `${resolution.path.split('>')[0]} ${resolution.dev ? '[dev]' : ''}`},
          {'Path': `${resolution.path.split('>').join(Utils.color(' > ', 'grey', config.withColor))}`},
          {'More info': 'https://nodesecurity.io/advisories/' + advisory.id}
        )

        if (action.action === 'review') {
          const patchedIn = advisory.patched_versions.replace(' ', '') === '<0.0.0' ? 'No patch available' : advisory.patched_versions
          table.splice(2, 0, {'Patched in': patchedIn})
        }

        log(table.toString() + '\n\n')
      })
    })
  }

  const footer = function (data) {
    log(`${summary.msg} in ${data.metadata.totalDependencies} scanned package${data.metadata.totalDependencies === 1 ? '' : 's'}`)
    if (summary.total) {
      const counts = data.actions.reduce((acc, {action, isMajor, resolves}) => {
        if (action === 'update' || (action === 'install' && !isMajor)) {
          resolves.forEach(({id, path}) => acc.advisories.add(`${id}::${path}`))
        }
        if (isMajor) {
          resolves.forEach(({id, path}) => acc.major.add(`${id}::${path}`))
        }
        if (action === 'review') {
          resolves.forEach(({id, path}) => acc.review.add(`${id}::${path}`))
        }
        return acc
      }, {advisories: new Set(), major: new Set(), review: new Set()})
      if (counts.advisories.size) {
        log(`  run \`npm audit fix\` to fix ${counts.advisories.size} of them.`)
      }
      if (counts.major.size) {
        const maj = counts.major.size
        log(`  ${maj} vulnerabilit${maj === 1 ? 'y' : 'ies'} require${maj === 1 ? 's' : ''} semver-major dependency updates.`)
      }
      if (counts.review.size) {
        const rev = counts.review.size
        log(`  ${rev} vulnerabilit${rev === 1 ? 'y' : 'ies'} require${rev === 1 ? 's' : ''} manual review. See the full report for details.`)
      }
    }
  }

  header()
  if (summary.total) { // vulns found display a report.
    actions(data, config)
  }
  footer(data)

  return {
    report: output.join('\n').trim(),
    exitCode: summary.total ? 1 : 0
  }
}

module.exports = report
