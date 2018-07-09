'use strict'

const tap = require('tap')
const Report = require('../')
const fixtures = require('./lib/test-fixtures')

tap.test('it generates an install report with no vulns', function (t) {
  return Report(fixtures['no-vulns']).then((report) => {
    t.match(report.report, /found .*0.* vulnerabilities/)
    t.match(report.exitCode, 0)
  })
})

tap.test('it generates an install report with no vulns, no colors', function (t) {
  return Report(fixtures['no-vulns'], {withColor: false}).then((report) => {
    t.match(report.report, /found 0 vulnerabilities/)
    t.match(report.exitCode, 0)
  })
})

tap.test('it generates an install report with one vuln', function (t) {
  return Report(fixtures['one-vuln'], {withColor: false}).then((report) => {
    t.match(report.report, /found 1 high severity vulnerability/)
    t.match(report.exitCode, 1)
  })
})

tap.test('recommend `npm audit fix` when install actions present', t => {
  return Report(fixtures['one-vuln'], {withColor: false}).then((report) => {
    t.match(report.report, /run `npm audit fix`/)
    t.match(report.exitCode, 1)
  })
})

tap.test('it generates an install report with multiple vulns of one type', function (t) {
  return Report(fixtures['some-same-type'], {withColor: false}).then((report) => {
    t.match(report.report, /found 12 high severity vulnerabilities/)
    t.match(report.exitCode, 1)
  })
})

tap.test('it generates an install report with more than one vuln', function (t) {
  return Report(fixtures['some-vulns']).then((report) => {
    t.match(report.report, /^found .*12.* vulnerabilities/)
    t.match(report.report, /9 .*low.*, 3 .*high.*/)
    t.match(report.exitCode, 1)
  })
})

tap.test('it generates an install report with vulns of all severities', function (t) {
  return Report(fixtures['all-severity-vulns']).then((report) => {
    t.match(report.report, /^found .*31.* vulnerabilities/)
    t.match(report.report, /16 .*info, 8 .*low.*, 4 .*moderate.*, 2 .*high.*, 1 .*critical.*/)
    t.match(report.exitCode, 1)
  })
})
