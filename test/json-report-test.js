'use strict'

const tap = require('tap')
const Report = require('../')
const fixtures = require('./fixtures')

tap.test('it generates a json report with zero for every severity', async t => {
  const reportRaw = Report(fixtures('no-vulns'), {reporter: 'json'})
  const exitCode = reportRaw.exitCode
  const vulnerabilities = JSON.parse(reportRaw.report).metadata.vulnerabilities

  t.equal(exitCode, 0)

  t.equal(vulnerabilities.info, 0)
  t.equal(vulnerabilities.low, 0)
  t.equal(vulnerabilities.moderate, 0)
  t.equal(vulnerabilities.high, 0)
  t.equal(vulnerabilities.critical, 0)
})
