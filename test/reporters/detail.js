const t = require('tap')
const fixture = require('../fixtures/index.js')
const requireInject = require('require-inject')
// force color support when in CI, so tests do the right thing
const cs = {
  hasBasic: true,
  has256: true,
  has16m: true,
  level: 3,
}
const Report = requireInject('../..', {
  chalk: requireInject('chalk', {
    'supports-color': Object.assign(() => cs, {
      stdout: cs,
      stderr: cs,
    }),
  }),
})
t.formatSnapshot = ({ report, exitCode }) => `${report}\nexitCode=${exitCode}`

for (const f of fixture.files) {
  t.test(f, async t => {
    const data = fixture(f)
    t.matchSnapshot(Report(data, { reporter: 'detail' }), 'default settings')
    t.matchSnapshot(Report(data, { reporter: 'detail', color: false }), 'no color')
    t.end()
  })
}
