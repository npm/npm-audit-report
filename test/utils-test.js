'use strict'

const tap = require('tap')
const {severityLabel, color} = require('../lib/utils')

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

tap.test('severity does not throw an error if given severity is not defined', function (t) {
  t.doesNotThrow(function () { severityLabel('me-no-exist') })
  t.done()
})

tap.test('severity returns a label if there is no color mapping', function (t) {
  t.equal(severityLabel('me-no-exist'), 'Me-no-exist')
  t.equal(severityLabel('w000000t'), 'W000000t')
  t.done()
})

tap.test('severity returns a label with color formatting ', function (t) {
  t.equal(severityLabel('high', true, true), '\u001b[91;1mHigh\u001b[0m')
  t.equal(severityLabel('low', true, true), '\u001b[1;1mLow\u001b[0m')
  t.done()
})
