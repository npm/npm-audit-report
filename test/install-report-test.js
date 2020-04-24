'use strict'

const tap = require('tap')
const Report = require('../')
const fixtures = require('./lib/test-fixtures')

tap.test('it generates an install report with no vulns', async t => {
  const report = Report(fixtures['no-vulns'])
  t.match(report.report, /found .*0.* vulnerabilities/)
  t.match(report.exitCode, 0)
})

tap.test('it generates an install report with no vulns, no colors', async t => {
  const report = Report(fixtures['no-vulns'], {withColor: false})
  t.match(report.report, /found 0 vulnerabilities/)
  t.match(report.exitCode, 0)
})

tap.test('it generates an install report with one vuln', async t => {
  const report = Report(fixtures['one-vuln'], {withColor: false})
  t.match(report.report, /found 1 high severity vulnerability/)
  t.match(report.exitCode, 1)
})

tap.test('recommend `npm audit fix` when install actions present', async t => {
  const report = Report(fixtures['one-vuln'], {withColor: false})
  t.match(report.report, /run `npm audit fix`/)
  t.match(report.exitCode, 1)
})

tap.test('it generates an install report with multiple vulns of one type', async t => {
  const report = Report(fixtures['some-same-type'], {withColor: false})
  t.match(report.report, /found 12 high severity vulnerabilities/)
  t.match(report.exitCode, 1)
})

tap.test('it generates an install report with more than one vuln', async t => {
  const report = Report(fixtures['some-vulns'])
  t.match(report.report, /^found .*12.* vulnerabilities/)
  t.match(report.report, /9 .*low.*, 3 .*high.*/)
  t.match(report.exitCode, 1)
})

tap.test('it generates an install report with vulns of all severities', async t => {
  const report = Report(fixtures['all-severity-vulns'])
  t.match(report.report, /^found .*31.* vulnerabilities/)
  t.match(report.report, /16 .*info, 8 .*low.*, 4 .*moderate.*, 2 .*high.*, 1 .*critical.*/)
  t.match(report.exitCode, 1)
})
