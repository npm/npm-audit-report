const t = require('tap')
const fixture = require('../fixtures/index.js')
const chalk = require('../fixtures/chalk')
const Report = require('../..')

t.formatSnapshot = ({ report, exitCode }) => `${report}\nexitCode=${exitCode}`

for (const f of fixture.files) {
  t.test(f, async t => {
    const data = fixture(f)
    const { color, noColor } = await chalk()
    t.matchSnapshot(Report(data, { reporter: 'detail', chalk: color }), 'default settings')
    t.matchSnapshot(Report(data, { reporter: 'detail', chalk: noColor }), 'no color')
    t.end()
  })
}
