const t = require('tap')
const requireInject = require('require-inject')
// force color support when in CI, so tests do the right thing
const cs = {
  hasBasic: true,
  has256: true,
  has16m: true,
  level: 3,
}
const colors = requireInject('../lib/colors.js', {
  'chalk': requireInject('chalk', {
    'supports-color': Object.assign(() => cs, {
      stdout: cs,
      stderr: cs,
    })
  })
})
t.formatSnapshot = ({report, exitCode}) => `${report}\nexitCode=${exitCode}`

t.test('with colors', async t => {
  const c = colors(true)
  t.not(c.green('x'), 'x')
  t.not(c.red('x'), 'x')
  t.not(c.magenta('x'), 'x')
  t.not(c.yellow('x'), 'x')
  t.not(c.white('x'), 'x')
  t.not(c.dim('x'), 'x')
  t.equal(c.severity('low'), c.white('low'))
  t.equal(c.severity('MoDeRaTe'), c.yellow('MoDeRaTe'))
  t.equal(c.severity('hiGH'), c.red('hiGH'))
  t.equal(c.severity('crITicAL'), c.magenta('crITicAL'))
  t.equal(c.severity('low', 'x'), c.white('x'))
  t.equal(c.severity('MoDeRaTe', 'x'), c.yellow('x'))
  t.equal(c.severity('hiGH', 'x'), c.red('x'))
  t.equal(c.severity('crITicAL', 'x'), c.magenta('x'))
})

t.test('without colors', async t => {
  const c = colors(false)
  t.equal(c.green('x'), 'x')
  t.equal(c.red('x'), 'x')
  t.equal(c.magenta('x'), 'x')
  t.equal(c.yellow('x'), 'x')
  t.equal(c.white('x'), 'x')
  t.equal(c.dim('x'), 'x')
  t.equal(c.severity('low'), 'low')
  t.equal(c.severity('moderate'), 'moderate')
  t.equal(c.severity('high'), 'high')
  t.equal(c.severity('critical'), 'critical')
  t.equal(c.severity('low', 'x'), 'x')
  t.equal(c.severity('MoDeRaTe', 'x'), 'x')
  t.equal(c.severity('hiGH', 'x'), 'x')
  t.equal(c.severity('crITicAL', 'x'), 'x')
})
