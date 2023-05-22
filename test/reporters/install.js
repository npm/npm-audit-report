const t = require('tap')
const fixture = require('../fixtures/index.js')
const { color, noColor } = require('../fixtures/chalk')
const Report = require('../..')
const install = require('../../lib/reporters/install.js')

t.formatSnapshot = ({ report, exitCode }) => `${report}\nexitCode=${exitCode}`

for (const f of fixture.files) {
  t.test(f, async t => {
    const data = fixture(f)
    t.matchSnapshot({ report: install.summary(data, { chalk: color }) }, 'summary color')
    t.matchSnapshot({ report: install.summary(data, { chalk: noColor }) }, 'summary no color')
    t.matchSnapshot(Report(data, { reporter: 'install', chalk: color }), 'default settings')
    t.matchSnapshot(Report(data, { reporter: 'install', chalk: noColor }), 'no color')
    t.end()
  })
}
