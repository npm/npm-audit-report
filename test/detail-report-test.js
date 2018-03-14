'use strict'

const tap = require('tap')
const Report = require('../')
const Keyfob = require('keyfob')

const fixtures = Keyfob.load({ path: 'test/fixtures', fn: require })
const results = Keyfob.load({ path: 'test/results' })

tap.test('it generates an install report with no vulns', function (t) {
  const result = Report(fixtures['no-vulns'])
  t.resolveMatch(result, {
    report: results['no-vulns-1'],
    exitCode: 0
  })
  t.end()
})

tap.test('it generates an install report with no vulns, no colors', function (t) {
  const result = Report(fixtures['no-vulns'], {withColor: false})
  t.resolveMatch(result, {
    report: '[+] no known vulnerabilities found [918 packages audited]',
    exitCode: 0
  })
  t.end()
})

tap.test('it generates an install report with one vuln', function (t) {
  const result = Report(fixtures['one-vuln'], {withColor: false})
  t.resolveMatch(result, {
    report: results['one-vuln-1'],
    exitCode: 1
  })
  t.end()
})

tap.test('it generates an install report with more than one vuln', function (t) {
  const result = Report(fixtures['some-vulns'])
  t.resolveMatch(result, {
    report: results['some-vulns-1'],
    exitCode: 1
  })
  t.end()
})

tap.test('it generates an install report with vulns, no colors', function (t) {
  const result = Report(fixtures['some-vulns'], {withColor: false})
  t.resolveMatch(result, {
    report: results['some-vulns-2'],
    exitCode: 1
  })
  t.end()
})
