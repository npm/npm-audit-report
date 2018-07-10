'use strict'

const Utils = require('../lib/utils')

const report = function (data) {
  const vulnTotal = Utils.vulnTotal(data.metadata.vulnerabilities)

  return {
    report: '',
    exitCode: vulnTotal ? 1 : 0
  }
}

module.exports = report
