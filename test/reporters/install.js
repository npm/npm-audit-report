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
  'chalk': requireInject('chalk', {
    'supports-color': Object.assign(() => cs, {
      stdout: cs,
      stderr: cs,
    })
  })
})
t.formatSnapshot = ({report, exitCode}) => `${report}\nexitCode=${exitCode}`
const install = requireInject('../../lib/reporters/install.js', {
  'chalk': requireInject('chalk', {
    'supports-color': Object.assign(() => cs, {
      stdout: cs,
      stderr: cs,
    })
  })
})

for (const f of fixture.files) {
  t.test(f, async t => {
    const data = fixture(f)
    t.matchSnapshot({report:install.summary(data, {color: true})}, 'summary color')
    t.matchSnapshot({report:install.summary(data, {color: false})}, 'summary no color')
    t.matchSnapshot(Report(data, { reporter: 'install' }), 'default settings')
    t.matchSnapshot(Report(data, { reporter: 'install', color: false }), 'no color')
    t.end()
  })
}
