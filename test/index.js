const t = require('tap')
const nar = require('../')
nar.reporters.fake = (data, options) => ({ data, options })
const fixture = require('./fixtures/index.js')
const chalk = require('./fixtures/chalk.js')

t.equal(nar.reporters.install, require('../lib/reporters/install.js'))
t.equal(nar.reporters.detail, require('../lib/reporters/detail.js'))
t.equal(nar.reporters.json, require('../lib/reporters/json.js'))
t.equal(nar.reporters.quiet, require('../lib/reporters/quiet.js'))

const metadata = { vulnerabilities: {} }
const highMeta = {
  vulnerabilities: {
    high: 99,
    low: 0,
    critical: 0,
    total: 99,
  },
}

const fake = { reporter: 'fake' }
t.strictSame(nar({ foo: 'bar', metadata }, fake), {
  exitCode: 0,
  report: {
    data: { foo: 'bar', metadata },
    options: {
      chalk: undefined,
      unicode: true,
      indent: 2,
    },
  },
}, 'default settings')

t.strictSame(nar({ foo: 'bar', toJSON: () => ({ bar: 'baz', metadata }) }, fake), {
  exitCode: 0,
  report: {
    data: { bar: 'baz', metadata },
    options: {
      chalk: undefined,
      unicode: true,
      indent: 2,
    },
  },
}, 'should call toJSON')

t.strictSame(nar({ foo: 'bar', auditLevel: null, metadata: highMeta }, fake), {
  exitCode: 1,
  report: {
    data: { foo: 'bar', auditLevel: null, metadata: highMeta },
    options: {
      chalk: undefined,
      unicode: true,
      indent: 2,
    },
  },
}, 'null auditLevel')

t.test('install is default reporter', async t => {
  const fix = fixture('one-vuln')
  const { color } = await chalk()
  t.strictSame(nar(fix, { chalk: color }).report, nar.reporters.install(fix, {
    chalk: color,
    unicode: true,
    indent: 2,
  }))
})

t.test('falsy audit data', t => {
  t.throws(
    () => nar(),
    { code: 'ENOAUDITDATA' },
    'should throw a missing audit data error'
  )
  t.end()
})
