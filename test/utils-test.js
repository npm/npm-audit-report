'use strict'

const tap = require('tap')
const {color, severityLabel, severityCompare} = require('../lib/utils')

tap.test('color does just return the value if colorName AND withColor are missing', function (t) {
  t.equal(color('Low'), 'Low')
  t.equal(color('something'), 'something')
  t.equal(color('something', 'brightRed'), 'something')
  t.equal(color('something', null, true), 'something')
  t.done()
})

tap.test('color returns a formatted string if all params are set', function (t) {
  t.equal(color('Low', 'brightGreen', true), '\u001b[92mLow\u001b[0m')
  t.equal(color('High', 'brightRed', true), '\u001b[91mHigh\u001b[0m')
  t.done()
})

tap.test('severityLabel does not throw an error if given severity is not defined', function (t) {
  t.doesNotThrow(function () { severityLabel('me-no-exist') })
  t.done()
})

tap.test('severityLabel returns a label if there is no color mapping', function (t) {
  t.equal(severityLabel('me-no-exist'), 'Me-no-exist')
  t.equal(severityLabel('w000000t'), 'W000000t')
  t.done()
})

tap.test('severityLabel returns a label with color formatting ', function (t) {
  t.equal(severityLabel('high', true, true), '\u001b[91;1mHigh\u001b[0m')
  t.equal(severityLabel('low', true, true), '\u001b[1;1mLow\u001b[0m')
  t.done()
})

tap.test('severityCompare does not throw an error if given severity is not defined', function (t) {
  t.doesNotThrow(function () { severityCompare('low', 'me-no-exist') })
  t.doesNotThrow(function () { severityCompare('me-no-exist', 'low') })
  t.done()
})

tap.test('severityCompare returns 0 when comparing the same severity', function (t) {
  t.equal(severityCompare('critical', 'critical'), 0)
  t.equal(severityCompare('high', 'high'), 0)
  t.equal(severityCompare('moderate', 'moderate'), 0)
  t.equal(severityCompare('low', 'low'), 0)
  t.equal(severityCompare('info', 'info'), 0)
  t.equal(severityCompare('me-no-exist', 'me-no-exist'), 0)
  t.done()
})

tap.test('severityCompare returns <0 only when first severity is more severe than 2nd severity', function (t) {
  t.ok(severityCompare('me-no-exist', 'critical') < 0)
  t.ok(severityCompare('me-no-exist', 'high') < 0)
  t.ok(severityCompare('me-no-exist', 'moderate') < 0)
  t.ok(severityCompare('me-no-exist', 'low') < 0)
  t.ok(severityCompare('me-no-exist', 'info') < 0)
  t.ok(severityCompare('critical', 'high') < 0)
  t.ok(severityCompare('critical', 'moderate') < 0)
  t.ok(severityCompare('critical', 'low') < 0)
  t.ok(severityCompare('critical', 'info') < 0)
  t.ok(severityCompare('high', 'moderate') < 0)
  t.ok(severityCompare('high', 'low') < 0)
  t.ok(severityCompare('high', 'info') < 0)
  t.ok(severityCompare('moderate', 'low') < 0)
  t.ok(severityCompare('moderate', 'info') < 0)
  t.ok(severityCompare('low', 'info') < 0)
  t.done()
})

tap.test('severityCompare returns >0 only when first severity is less severe than 2nd severity', function (t) {
  t.ok(severityCompare('info', 'low') > 0)
  t.ok(severityCompare('info', 'moderate') > 0)
  t.ok(severityCompare('info', 'high') > 0)
  t.ok(severityCompare('info', 'critical') > 0)
  t.ok(severityCompare('info', 'me-no-exist') > 0)
  t.ok(severityCompare('low', 'moderate') > 0)
  t.ok(severityCompare('low', 'high') > 0)
  t.ok(severityCompare('low', 'critical') > 0)
  t.ok(severityCompare('low', 'me-no-exist') > 0)
  t.ok(severityCompare('moderate', 'high') > 0)
  t.ok(severityCompare('moderate', 'critical') > 0)
  t.ok(severityCompare('moderate', 'me-no-exist') > 0)
  t.ok(severityCompare('high', 'critical') > 0)
  t.ok(severityCompare('high', 'me-no-exist') > 0)
  t.ok(severityCompare('critical', 'me-no-exist') > 0)
  t.done()
})
