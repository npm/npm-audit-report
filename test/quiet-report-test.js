'use strict'

const tap = require('tap')
const Report = require('../')
const fixtures = require('./lib/test-fixtures')

tap.test('it generates an quiet report with no vulns', async t => {
  const report = Report(fixtures['no-vulns'], {reporter: 'quiet'})
  t.match(report.report, '')
  t.match(report.exitCode, 0)
})
tap.test('it generates an quiet report with one vuln', async t => {
  const report = Report(fixtures['one-vuln'], {reporter: 'quiet'})
  t.match(report.report, '')
  t.match(report.exitCode, 1)
})
