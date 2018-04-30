'use strict'

const tap = require('tap')
const Report = require('../')
const Keyfob = require('keyfob')

const fixtures = Keyfob.load({ path: 'test/fixtures', fn: require })

tap.test('it generates a detail report with no vulns', function (t) {
  return Report(fixtures['no-vulns'], {reporter: 'detail'}).then((report) => {
    t.match(report.exitCode, 0)
    t.match(report.report, /no known vulnerabilities found/)
    t.match(report.report, /Packages audited: 918 \(466 dev, 77 optional\)/)
  })
})

tap.test('it generates a detail report with one vuln (update action)', function (t) {
  return Report(fixtures['one-vuln'], {reporter: 'detail'}).then((report) => {
    t.match(report.exitCode, 1)
    t.match(report.report, /npm update tough-cookie --depth 6/)
  })
})

tap.test('it generates a detail report with one vuln (install action)', function (t) {
  return Report(fixtures['one-vuln-install'], {reporter: 'detail'}).then((report) => {
    t.match(report.exitCode, 1)
    t.match(report.report, /npm install knex@3.0.0/)
  })
})

tap.test('it generates a detail report with one vuln (install dev dep)', function (t) {
  return Report(fixtures['one-vuln-dev'], {reporter: 'detail'}).then((report) => {
    t.match(report.exitCode, 1)
    t.match(report.report, /npm install --dev knex@3.0.0/)
  })
})

tap.test('it generates a detail report with one vuln (review dev dep)', function (t) {
  return Report(fixtures['one-vuln-dev-review'], {reporter: 'detail'}).then((report) => {
    t.match(report.exitCode, 1)
    t.match(report.report, /knex \[dev\]/)
    t.match(report.report, /Manual Review/)
  })
})

tap.test('it generates a detail report with one vuln, no color', function (t) {
  return Report(fixtures['one-vuln'], {reporter: 'detail', withColor: false}).then((report) => {
    t.match(report.exitCode, 1)
    t.match(report.report, /# Run  npm update tough-cookie --depth 6  to resolve 1 vulnerability/)
  })
})

tap.test('it generates a detail report with one vuln, no unicode', function (t) {
  return Report(fixtures['one-vuln'], {reporter: 'detail', withUnicode: false}).then((report) => {
    t.match(report.exitCode, 1)
    t.notMatch(report.report, /┬/)
  })
})

tap.test('it generates a detail report with some vulns', function (t) {
  return Report(fixtures['some-vulns'], {reporter: 'detail'}).then((report) => {
    t.match(report.exitCode, 1)
    t.match(report.report, /Manual Review/)
    t.match(report.report, /12 vulnerabilities found/)
    t.match(report.report, /9 low \| 3 high/)
    t.match(report.report, /Denial of Service/)
    t.match(report.report, /Cryptographically Weak PRNG/)
  })
})

tap.test('it generates a detail report with review vulns, no unicode', function (t) {
  return Report(fixtures['update-review'], {reporter: 'detail', withUnicode: false}).then((report) => {
    t.match(report.exitCode, 1)
    t.notMatch(report.report, /┬/)
    t.match(report.report, /Manual Review/)
    t.match(report.report, /1 low | 1 moderate | 1 critical/)
  })
})
