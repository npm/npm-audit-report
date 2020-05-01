const t = require('tap')
const fixture = require('../fixtures/index.js')
const Report = require('../..')
t.formatSnapshot = ({report, exitCode}) => `${report}\nexitCode=${exitCode}`

for (const f of fixture.files) {
  t.test(f, async t => {
    const data = fixture(f)
    t.matchSnapshot(Report(data, { reporter: 'quiet' }), 'default settings')
    t.end()
  })
}
