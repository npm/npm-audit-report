'use strict'

const Utils = require('../lib/utils')

module.exports = report
function report (data, options) {
  const summary = Utils.vulnSummary(data.metadata.vulnerabilities, options)
  if (summary.total) {
    summary.msg += '\n  run `npm audit fix` to fix them, or `npm audit` for details'
  }

  return {
    report: summary.msg,
    exitCode: summary.total ? 1 : 0
  }
}
