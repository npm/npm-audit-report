'use strict'

const tap = require('tap')
const Report = require('../')
const Keyfob = require('keyfob')

const fixtures = Keyfob.load({ path: 'test/fixtures', fn: require })
const results = Keyfob.load({ path: 'test/results' })

tap.test('it generates a detail report with no vulns', function (t) {
  const result = Report(fixtures['no-vulns'], {reporter: 'detail'})
  t.resolveMatch(result, {
    report: results['no-vulns-1'],
    exitCode: 0
  })
  t.end()
})

tap.test('it generates a detail report with one vuln', function (t) {
  const result = Report(fixtures['one-vuln'], {reporter: 'detail'})
  t.resolves(result)
  t.end()
})

tap.test('it generates a detail report with one vuln, no color', function (t) {
  const result = Report(fixtures['one-vuln'], {reporter: 'detail', withColor: false})
  t.resolves(result)
  t.end()
})

tap.test('it generates a detail report with one vuln, no unicode', function (t) {
  const result = Report(fixtures['one-vuln'], {reporter: 'detail', withUnicode: false})
  t.resolves(result)
  t.end()
})

tap.test('it generates a detail report with some vulns', function (t) {
  const result = Report(fixtures['some-vulns'], {reporter: 'detail'})
  t.resolves(result)
  t.end()
})

tap.test('it generates a detail report with review vulns, no unicode', function (t) {
  const result = Report(fixtures['update-review'], {reporter: 'detail', withUnicode: false})
  t.resolves(result)
  t.end()
})
