'use strict'

const tap = require('tap')
const Report = require('../')
const Keyfob = require('keyfob')
const {totalVulnCount, severities} = require('../lib/utils')
const fixtures = Keyfob.load({path: 'test/fixtures', fn: require})

tap.test('total vuln count is 0 with no vulns', async t => {
  const reportRaw = Report(fixtures['no-vulns'], {reporter: 'json'})
  t.equal(totalVulnCount(JSON.parse(reportRaw.report).metadata.vulnerabilities), 0)
})

tap.test('total vuln count is calculated with some vulns', async t => {
  const reportRaw = Report(fixtures['some-vulns'], {reporter: 'json'})
  t.equal(totalVulnCount(JSON.parse(reportRaw.report).metadata.vulnerabilities), 12)
})

tap.test('total vuln count is calculated with all severity vulns', async t => {
  const reportRaw = Report(fixtures['all-severity-vulns'], {reporter: 'json'})
  t.equal(totalVulnCount(JSON.parse(reportRaw.report).metadata.vulnerabilities), 31)
})

tap.test('no severities with 0 vulns', async t => {
  const reportRaw = Report(fixtures['no-vulns'], {reporter: 'json'})
  t.same(severities(JSON.parse(reportRaw.report).metadata.vulnerabilities), [])
})

tap.test('some severities with some vulns', async t => {
  const reportRaw = Report(fixtures['some-vulns'], {reporter: 'json'})
  t.same(severities(JSON.parse(reportRaw.report).metadata.vulnerabilities),
    [
      ['low', 9],
      ['high', 3]
    ]
  )
})

tap.test('all severities with all vulns', async t => {
  const reportRaw = Report(fixtures['all-severity-vulns'], {reporter: 'json'})
  t.same(severities(JSON.parse(reportRaw.report).metadata.vulnerabilities),
    [
      ['info', 16],
      ['low', 8],
      ['moderate', 4],
      ['high', 2],
      ['critical', 1]
    ]
  )
})
