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

    let accumulator = {
      high:'',
      moderate: '',
      low: ''
    }

    if (Object.keys(data.advisories).length !== 0) {

      data.actions.forEach((action) => {
        let l = {}
        // Start with install/update actions
        if (action.action === 'update' || action.action === 'install') {
          const recommendation = getRecommendation(action, config)
          l.recommendation = Utils.color(recommendation.cmd, 'bold', config.withColor)
          l.breaking = recommendation.isBreaking ? 'Y' : 'N'

          // TODO: Verify: The advisory seems to repeat and be the same for all the 'resolves'. Is it true?
          const advisory = data.advisories[action.resolves[0].id]
          l.sevLevel = Utils.severityLabel(advisory.severity, config.withColor)
          l.severity = advisory.title
          l.package = Utils.color(advisory.module_name, 'green', config.withColor)
          l.moreInfo = `https://nodesecurity.io/advisories/${advisory.id}`
          l.path = `${action.resolves[0].path.split('>').join(Utils.color(' > ', 'grey', config.withColor))}`

          accumulator[advisory.severity] += [action.action, l.package, l.sevLevel, l.recommendation,  l.severity, l.moreInfo, l.path, l.breaking]
            .join('\t') + '\n'
        }

        if (action.action === 'review') {

          action.resolves.forEach((resolution) => {
            const advisory = data.advisories[resolution.id]

            l.sevLevel = Utils.severityLabel(advisory.severity, config.withColor)
            l.severity = advisory.title
            l.package = Utils.color(advisory.module_name, 'green', config.withColor)
            l.moreInfo = `https://nodesecurity.io/advisories/${advisory.id}`
            l.patchedIn = Utils.color(advisory.patched_versions.replace(' ', '') === '<0.0.0' ? 'No patch available' : advisory.patched_versions, 'bold', config.withColor)
            l.path = `${resolution.path.split('>').join(Utils.color(' > ', 'grey', config.withColor))}`

            accumulator[advisory.severity] += [action.action, l.package, l.sevLevel, l.patchedIn, l.severity, l.moreInfo, l.path]
              .join('\t') + '\n'
          }) // forEach resolves
        } // is review

      }) // forEach actions

    }
    return accumulator['high'] + accumulator['moderate'] + accumulator['low']
  }

  const exitCode = function (metadata) {
    let total = 0
    const keys = Object.keys(metadata.vulnerabilities)
    for (let key of keys) {
      const value = metadata.vulnerabilities[key]
      total = total + value
    }

    if (total > 0) {
      exit = 1
    }
  }

  exitCode(data.metadata)

  return {
    report: actions(data, config),
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
