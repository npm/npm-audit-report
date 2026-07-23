'use strict'

const { styleText } = require('node:util')

module.exports = (color) => {
  // chalk coerced non-string input (eg numbers) to strings, but styleText
  // throws on it, so coerce here to preserve the previous behavior
  const style = (format, s) => color ? styleText(format, String(s), { validateStream: false }) : s
  const green = s => style(['green', 'bold'], s)
  const red = s => style(['red', 'bold'], s)
  const magenta = s => style(['magenta', 'bold'], s)
  const yellow = s => style(['yellow', 'bold'], s)
  const white = s => style('bold', s)
  const severity = (sev, s) => sev.toLowerCase() === 'moderate' ? yellow(s || sev)
    : sev.toLowerCase() === 'high' ? red(s || sev)
    : sev.toLowerCase() === 'critical' ? magenta(s || sev)
    : white(s || sev)
  const dim = s => style('dim', s)

  return {
    dim,
    green,
    red,
    magenta,
    yellow,
    white,
    severity,
  }
}
