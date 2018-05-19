'use strict'

const tap = require('tap')
const Report = require('../')
const Keyfob = require('keyfob')

const fixtures = Keyfob.load({ path: 'test/fixtures', fn: require })

tap.test('it generates a detail report with no vulns', function (t) {
  return Report(fixtures['no-vulns'], {reporter: 'parseable'}).then((report) => {
    t.match(report.exitCode, 0)
    t.equal(report.report.length, 0)
  })
})

tap.test('it generates a detail report with one vuln (update action)', function (t) {
  return Report(fixtures['one-vuln'], {reporter: 'parseable'}).then((report) => {
    t.match(report.exitCode, 1)
    t.match(report.report, /^update/)
    t.match(report.report, /npm update tough-cookie --depth 6/)
  })
})

tap.test('it generates a detail report with one vuln (install action)', function (t) {
  return Report(fixtures['one-vuln-install'], {reporter: 'parseable'}).then((report) => {
    t.match(report.exitCode, 1)
    t.match(report.report, /^install/)
    t.match(report.report, /npm install knex@3.0.0/)
  })
})

tap.test('it generates a detail report with one vuln (install dev dep)', function (t) {
  return Report(fixtures['one-vuln-dev'], {reporter: 'parseable'}).then((report) => {
    t.match(report.exitCode, 1)
    t.match(report.report, /npm install --dev knex@3.0.0/)
  })
})

tap.test('it generates a detail report with one vuln (review dev dep)', function (t) {
  return Report(fixtures['one-vuln-dev-review'], {reporter: 'parseable'}).then((report) => {
    t.match(report.exitCode, 1)
    t.match(report.report, /review/)
    t.match(report.report, /knex/)
  })
})

tap.test('it generates a detail report with one vuln, no color', function (t) {
  return Report(fixtures['one-vuln'], {reporter: 'parseable', withColor: false}).then((report) => {
    t.match(report.exitCode, 1)
    t.match(report.report, /\tnpm update tough-cookie --depth 6\t/)
  })
})

tap.test('it generates a detail report with some vulns', function (t) {
  return Report(fixtures['some-vulns'], {reporter: 'parseable'}).then((report) => {
    t.match(report.exitCode, 1)
    t.match(report.report, /Low/)
    t.match(report.report, /High/)
    t.match(report.report, /Denial of Service/)
    t.match(report.report, /Cryptographically Weak PRNG/)
  })
})

tap.test('it generates a detail report with some vulns, no color', function (t) {
  return Report(fixtures['some-vulns'], {reporter: 'parseable', withColor: false}).then((report) => {
    t.match(report.exitCode, 1)
    t.match(report.report, /\tLow/)
    t.match(report.report, /\tHigh/)
    t.match(report.report, /\tDenial of Service/)
    t.match(report.report, /\tCryptographically Weak PRNG/)
  })
})
