const t = require('tap')
const fixture = require('../fixtures/index.js')
const Report = require('../..')
const install = require('../../lib/reporters/install.js')

t.formatSnapshot = ({ report, exitCode }) => `${report}\nexitCode=${exitCode}`

for (const f of fixture.files) {
  t.test(f, async t => {
    const data = fixture(f)
    t.matchSnapshot({ report: install.summary(data, { color: true }) }, 'summary color')
    t.matchSnapshot({ report: install.summary(data, { color: false }) }, 'summary no color')
    t.matchSnapshot(Report(data, { reporter: 'install', color: true }), 'default settings')
    t.matchSnapshot(Report(data, { reporter: 'install', color: false }), 'no color')
    t.end()
  })
}
