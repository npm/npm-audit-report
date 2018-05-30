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
  t.equal(color('Low', 'brightGreen', true), '\x1b[92mLow\x1b[0m')
  t.equal(color('High', 'brightRed', true), '\x1b[91mHigh\x1b[0m')
  t.done()
})

tap.test('severity does not throw an error if given severity is not defined', function (t) {
  t.doesNotThrow(function () { severityLabel('me-no-exist') })
  t.done()
})
