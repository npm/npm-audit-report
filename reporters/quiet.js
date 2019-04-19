'use strict'

const Utils = require('../lib/utils')

const report = function (data, options) {
  const defaults = {
    severityThreshold: 'info'
  }

  const config = Object.assign({}, defaults, options)

  Utils.vulnFilter(data, config)
  const vulnTotal = Utils.vulnTotal(data.metadata.vulnerabilities)

  return {
    report: '',
    exitCode: vulnTotal ? 1 : 0
  }
}

module.exports = report
