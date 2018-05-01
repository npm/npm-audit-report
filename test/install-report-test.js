'use strict'

const tap = require('tap')
const Report = require('../')
const Keyfob = require('keyfob')

const fixtures = Keyfob.load({ path: 'test/fixtures', fn: require })

tap.test('it generates an install report with no vulns', function (t) {
  return Report(fixtures['no-vulns']).then((report) => {
    t.match(report.report, /no known vulnerabilities found \[918 packages audited\]/)
    t.match(report.exitCode, 0)
  })
})

tap.test('it generates an install report with no vulns, no colors', function (t) {
  return Report(fixtures['no-vulns'], {withColor: false}).then((report) => {
    t.match(report.report, /\[\+\]/)
    t.match(report.exitCode, 0)
  })
})

tap.test('it generates an install report with one vuln', function (t) {
  return Report(fixtures['one-vuln'], {withColor: false}).then((report) => {
    t.match(report.report, /\[!\] 1 vulnerability found \[918 packages audited\]/)
    t.match(report.exitCode, 1)
  })
})

tap.test('it generates an install report with more than one vuln', function (t) {
  return Report(fixtures['some-vulns']).then((report) => {
    t.match(report.report, /12 vulnerabilities found \[918 packages audited\]/)
    t.match(report.report, /Severity: 9 Low \| 3 .*High.*/)
    t.match(report.exitCode, 1)
  })
})
