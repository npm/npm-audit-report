'use strict'

const tap = require('tap')
const Report = require('../')
const fixtures = require('./lib/test-fixtures')

tap.test('it generates an quiet report with no vulns', function (t) {
  return Report(fixtures['no-vulns'], {reporter: 'quiet'}).then((report) => {
    t.equal(report.report, '')
    t.equal(report.exitCode, 0)
  })
})

tap.test('it generates an quiet report with one vuln', function (t) {
  return Report(fixtures['one-vuln'], {reporter: 'quiet'}).then((report) => {
    t.equal(report.report, '')
    t.equal(report.exitCode, 1)
  })
})

tap.test('it generates a quiet report with no vulns when a dev dep has a vuln and dev deps are excluded', function (t) {
  return Report(fixtures['one-vuln-dev'], {reporter: 'quiet', excludeDev: true}).then((report) => {
    t.match(report.report, '')
    t.match(report.exitCode, 0)
  })
})

tap.test('it generates a quiet report with fewer vulns when a higher severity threshold is set', function (t) {
  return Report(fixtures['all-severity-vulns'], {reporter: 'quiet', severityThreshold: 'high'}).then((report) => {
    t.equal(report.report, '')
    t.equal(report.exitCode, 1)
  })
})

tap.test('it generates a quiet report with no vulns when a severity threshold higher than all vulns is set', function (t) {
  return Report(fixtures['some-vulns'], {reporter: 'quiet', severityThreshold: 'critical'}).then((report) => {
    t.equal(report.report, '')
    t.equal(report.exitCode, 0)
  })
})
