'use strict'

const tap = require('tap')
const Report = require('../')
const Keyfob = require('keyfob')

const fixtures = Keyfob.load({ path: 'test/fixtures', fn: require })

tap.test('it generates a json report with zero for every severity', function (t) {
  return Report(fixtures['no-vulns'], {reporter: 'json'}).then((reportRaw) => {
    const exitCode = reportRaw.exitCode
    const vulnerabilities = JSON.parse(reportRaw.report).metadata.vulnerabilities

    t.equal(exitCode, 0)

    t.equal(vulnerabilities.info, 0)
    t.equal(vulnerabilities.low, 0)
    t.equal(vulnerabilities.moderate, 0)
    t.equal(vulnerabilities.high, 0)
    t.equal(vulnerabilities.critical, 0)
  })
})
