'use strict'

const Utils = require('../lib/utils')

const report = function (data, options) {
  const defaults = {}

  const config = Object.assign({}, defaults, options)

  Utils.vulnFilter(data, config)
  const vulnTotal = Utils.vulnTotal(data.metadata.vulnerabilities)

  const actions = function (data, config) {
    let accumulator = {
      high: '',
      moderate: '',
      low: ''
    }

    data.actions.forEach((action) => {
      const recommendation = action.action === 'update' || action.action === 'install' ? Utils.getRecommendation(action, config) : null
      if (recommendation) {
        recommendation.breaking = recommendation.isBreaking ? 'Y' : 'N'
      }

      action.resolves.forEach((resolution) => {
        const advisory = data.advisories[resolution.id]

        const line = [action.action, advisory.module_name, advisory.severity]

        if (recommendation) {
          line.push(recommendation.cmd)
        } else {
          line.push(advisory.patched_versions.replace(' ', '') === '<0.0.0' ? 'No patch available' : advisory.patched_versions)
        }
        line.push(advisory.title, 'https://nodesecurity.io/advisories/' + advisory.id, resolution.path)
        if (recommendation) {
          line.push(recommendation.breaking)
        }

        accumulator[advisory.severity] += line.join('\t') + '\n'
      })
    })
    return accumulator['high'] + accumulator['moderate'] + accumulator['low']
  }

  return {
    report: vulnTotal ? actions(data, config) : '',
    exitCode: vulnTotal ? 1 : 0
  }
}

module.exports = report
