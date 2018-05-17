'use strict'

const reporterUtils = require('../lib/reporters')

const report = function (data) {
  const totalVulnCount = reporterUtils.totalVulnCount(data.metadata.vulnerabilities)

  return {
    report: '',
    exitCode: totalVulnCount === 0 ? 0 : 1
  }
}

module.exports = report
