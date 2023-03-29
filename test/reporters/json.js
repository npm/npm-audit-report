const t = require('tap')
const fixture = require('../fixtures/index.js')
const Report = require('../..')

t.formatSnapshot = ({ report, exitCode }) => `${report}\nexitCode=${exitCode}`

for (const f of fixture.files) {
  t.test(f, async t => {
    const data = fixture(f)
    t.matchSnapshot(Report(data, { reporter: 'json' }), 'default settings')
    t.matchSnapshot(Report(data, { reporter: 'json', indent: null }), 'no indent')
    t.end()
  })
}
