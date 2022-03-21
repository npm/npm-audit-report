const t = require('tap')
const exitCode = require('../lib/exit-code.js')

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
