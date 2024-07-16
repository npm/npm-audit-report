const t = require('tap')
const exitCode = require('../lib/exit-code.js')
const fixture = require('./fixtures/index.js')

t.equal(exitCode({
  metadata: {
    vulnerabilities: {
      info: 99,
      low: 0,
      critical: 0,
      total: 99,
    },
  },
}, 'low'), 0, 'has info, level set to low')

t.equal(exitCode({
  metadata: {
    vulnerabilities: {
      info: 99,
      low: 0,
      critical: 0,
      total: 99,
    },
  },
}, 'info'), 1, 'has info, level set to info')

t.equal(exitCode({
  metadata: {
    vulnerabilities: {
      high: 99,
      low: 0,
      critical: 0,
      total: 99,
    },
  },
}, 'critical'), 0)

t.equal(exitCode({
  metadata: {
    vulnerabilities: {
      high: 99,
      low: 0,
      critical: 0,
      total: 99,
    },
  },
}, 'low'), 1)

t.test('ignoreUnfixed with no vulnerabilities', t => {
  const data = fixture('no-vulns')
  t.equal(
    exitCode(data, 'low', true),
    0,
    'return 0, no vulnerabilities and ignoreUnfixed is true'
  )
  t.end()
})

t.test('ignoreUnfixed and one vulnerability with fix', t => {
  const data = fixture('one-vuln')
  t.equal(
    exitCode(data, 'low', true),
    1,
    'return 1, one vulnerability with fix and ignoreUnfixed is true'
  )
  t.end()
})

t.test('ignoreUnfixed with vulnerabilities without fix', t => {
  const data = fixture('not-in-registry')
  t.equal(
    exitCode(data, 'low', true),
    0,
    'return 0, vulnerabilities have no fix and ignoreUnfixed is true'
  )
  t.end()
})

t.test('disable ignoreUnfixed with vulnerabilities without fix', t => {
  const data = fixture('not-in-registry')
  t.equal(
    exitCode(data, 'low', false),
    1,
    'return 1, vulnerabilities have no fix and ignoreUnfixed is false'
  )
  t.end()
})
