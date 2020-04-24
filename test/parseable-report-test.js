'use strict'

const tap = require('tap')
const Report = require('../')

const fixtures = require('./fixtures')

tap.test('it generates a parseable report with no vulns', async t => {
  const report = Report(fixtures('no-vulns'), {reporter: 'parseable'})
  t.match(report.exitCode, 0, 'successful exit code')
  t.equal(report.report.length, 0, 'no vulns reported')
})

tap.test('it generates a parseable report with one vuln (update action)', async t => {
  const report = Report(fixtures('one-vuln-one-pkg'), {reporter: 'parseable'})
  t.equal(report.exitCode, 1, 'non-zero exit code')
  t.match(report.report, /\tnpm update tough-cookie --depth 6/, 'recommends update command with --depth')
})

tap.test('it generates a parseable report with one vuln (update action)', async t => {
  const report = Report(fixtures('one-vuln'), {reporter: 'parseable'})
  t.equal(report.exitCode, 1, 'non-zero exit code')
  t.match(report.report, /^update/)
  t.match(report.report, /npm update tough-cookie --depth 6/)
})

tap.test('it generates a parseable report with one vuln (install action)', async t => {
  const report = Report(fixtures('one-vuln-install'), {reporter: 'parseable'})
  t.equal(report.exitCode, 1, 'non-zero exit code')
  t.match(report.report, /^install/)
  t.match(report.report, /npm install knex@3.0.0/)
})

tap.test('it adds a message if a dep isMajor (one vuln)', async t => {
  const report = Report(fixtures('one-vuln-install-ismajor'), {reporter: 'parseable'})
  t.equal(report.exitCode, 1, 'non-zero exit code')
  t.match(report.report, /\tY\n/, 'reports one semver-major bump')
})

tap.test('it adds a message if a dep isMajor (multiple vulns)', async t => {
  const report = Report(fixtures('some-vulns-ismajor'), {reporter: 'parseable'})
  t.equal(report.exitCode, 1, 'non-zero exit code')
  t.match(report.report, /\tY\n[\s\w ->@]*\tY\n/, 'reports multiple semver-major bumps')
})

tap.test('it generates a parseable report with one vuln (install dev dep)', async t => {
  const report = Report(fixtures('one-vuln-dev'), {reporter: 'parseable'})
  t.equal(report.exitCode, 1, 'non-zero exit code')
  t.match(report.report, /npm install --save-dev knex@3.0.0/)
})

tap.test('it generates a parseable report with one vuln (review dev dep)', async t => {
  const report = Report(fixtures('one-vuln-dev-review'), {reporter: 'parseable'})
  t.equal(report.exitCode, 1, 'non-zero exit code')
  t.match(report.report, /review\t/, 'expects manual review')
  t.match(report.report, /\tknex/)
})

tap.test('it generates a parseable report with some vulns', async t => {
  const report = Report(fixtures('some-vulns'), {reporter: 'parseable'})
  t.equal(report.exitCode, 1, 'non-zero exit code')
  t.match(report.report, /review\t/, 'expects manual review')
  t.match(report.report, /\tlow/)
  t.match(report.report, /\thigh/)
  t.match(report.report, /\tDenial of Service/)
  t.match(report.report, /\tCryptographically Weak PRNG/)
})

tap.test('it generates a parseable report with review vulns', async t => {
  const report = Report(fixtures('update-review'), {reporter: 'parseable'})
  t.equal(report.exitCode, 1, 'non-zero exit code')
  t.match(report.report, /review\t/, 'expects manual review')
})

tap.test('it generates a parseable report with critical vulns', async t => {
  const report = Report(fixtures('some-vulns-critical'), {reporter: 'parseable'})
  t.equal(report.exitCode, 1, 'non-zero exit code')
  t.match(report.report, /\tcritical/)
})

tap.test('it generates a parseable report with multiple resolves on the same update/install action', async t => {
  const report = Report(fixtures('some-same-action'), {reporter: 'parseable'})
  t.equal(report.exitCode, 1, 'non-zero exit code')
  t.match(report.report, /\tcritical/)
  t.match(report.report, /\tlow/)
})
