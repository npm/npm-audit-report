'use strict'

const tap = require('tap')
const Report = require('../')
const fixtures = require('./lib/test-fixtures')

tap.test('it generates a detail report with no vulns', function (t) {
  return Report(fixtures['no-vulns'], {reporter: 'detail', withColor: false}).then((report) => {
    t.match(report.exitCode, 0, 'successful exit code')
    t.match(report.report, /found 0 vulnerabilities/, 'no vulns reported')
    t.match(report.report, /918 scanned packages/, 'reports scanned count')
  })
})

tap.test('it generates a detail report with one vuln (update action)', function (t) {
  return Report(fixtures['one-vuln-one-pkg'], {reporter: 'detail'}).then((report) => {
    t.equal(report.exitCode, 1, 'non-zero exit code')
    t.match(report.report, /npm update tough-cookie --depth 6/, 'recommends update command with --depth')
    t.match(report.report, /1 scanned package/, 'reports a single scanned pkg')
  })
})

tap.test('it generates a detail report with one vuln (install action)', function (t) {
  return Report(fixtures['one-vuln-install'], {reporter: 'detail'}).then((report) => {
    t.equal(report.exitCode, 1, 'non-zero exit code')
    t.match(report.report, /npm install knex@3\.0\.0/, 'recommends install command')
  })
})

tap.test('it adds a message if a dep isMajor (one vuln)', function (t) {
  return Report(fixtures['one-vuln-install-ismajor'], {reporter: 'detail', withColor: false}).then((report) => {
    t.equal(report.exitCode, 1, 'non-zero exit code')
    t.match(report.report, /1 vulnerability requires semver-major dependency updates/, 'reports one semver-major bump')
  })
})

tap.test('it adds a message if a dep isMajor (multiple vulns)', function (t) {
  return Report(fixtures['some-vulns-ismajor'], {reporter: 'detail', withColor: false}).then((report) => {
    t.equal(report.exitCode, 1, 'non-zero exit code')
    t.match(report.report, /6 vulnerabilities require semver-major dependency updates/, 'reports multiple semver-major bumps')
  })
})

tap.test('it generates a detail report with one vuln (install dev dep)', function (t) {
  return Report(fixtures['one-vuln-dev'], {reporter: 'detail'}).then((report) => {
    t.equal(report.exitCode, 1, 'non-zero exit code')
    t.match(report.report, /npm install --save-dev knex@3\.0\.0/, 'adds --save-dev to recommendation')
  })
})

tap.test('it generates a detail report with one vuln (review dev dep)', function (t) {
  return Report(fixtures['one-vuln-dev-review'], {reporter: 'detail'}).then((report) => {
    t.equal(report.exitCode, 1, 'non-zero exit code')
    t.match(report.report, /knex \[dev\]/, 'mentions the dep and tags it as dev')
    t.match(report.report, /Manual Review/, 'reports a manual review requirement')
  })
})

tap.test('it generates a detail report with one vuln, no color', function (t) {
  return Report(fixtures['one-vuln'], {reporter: 'detail', withColor: false}).then((report) => {
    t.equal(report.exitCode, 1, 'non-zero exit code')
    t.match(report.report, /# Run {2}npm update tough-cookie --depth 6 {2}to resolve 1 vulnerability/, 'individual update command printed')
  })
})

tap.test('it generates a detail report with one vuln, no unicode', function (t) {
  return Report(fixtures['one-vuln'], {reporter: 'detail', withUnicode: false}).then((report) => {
    t.equal(report.exitCode, 1, 'non-zero exit code')
    t.notMatch(report.report, /┬/, 'prints a fancy table')
  })
})

tap.test('it generates a detail report with some vulns', function (t) {
  return Report(fixtures['some-vulns'], {reporter: 'detail', withColor: false}).then((report) => {
    t.equal(report.exitCode, 1, 'non-zero exit code')
    t.match(report.report, /Manual Review/, 'expects manual review')
    t.match(report.report, /found 12 vulnerabilities/, 'reports vuln count')
    t.match(report.report, /9 low, 3 high/, 'severity breakdown reported')
    t.match(report.report, /Denial of Service/, 'mentions one vuln title')
    t.match(report.report, /Cryptographically Weak PRNG/, 'mentions the other vuln title')
  })
})

tap.test('it generates a detail report with vulns of all severities', function (t) {
  return Report(fixtures['all-severity-vulns'], {reporter: 'detail', withColor: false}).then((report) => {
    t.equal(report.exitCode, 1, 'non-zero exit code')
    t.match(report.report, /Manual Review/, 'expects manual review')
    t.match(report.report, /found 31 vulnerabilities/, 'reports vuln count')
    t.match(report.report, /16 info, 8 low, 4 moderate, 2 high, 1 critical/, 'severity breakdown reported')
    t.match(report.report, /Denial of Service/, 'mentions one vuln title')
    t.match(report.report, /Cryptographically Weak PRNG/, 'mentions the other vuln title')
  })
})

tap.test('it generates a detail report with review vulns, no unicode', function (t) {
  return Report(fixtures['update-review'], {reporter: 'detail', withUnicode: false, withColor: false}).then((report) => {
    t.equal(report.exitCode, 1, 'non-zero exit code')
    t.notMatch(report.report, /┬/, 'unicode table not printed')
    t.match(report.report, /Manual Review/, 'manual review reported')
    t.match(report.report, /1 low, 1 moderate, 1 critical/, 'severity breakdown reported')
  })
})
