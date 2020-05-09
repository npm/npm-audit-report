'use strict'

const reporters = {
  install: require('./reporters/install'),
  detail: require('./reporters/detail'),
  json: require('./reporters/json'),
  quiet: require('./reporters/quiet'),
  warn: require('./reporters/warn')
}

const exitCode = require('./exit-code.js')

module.exports = Object.assign((data, options = {}) => {
  const {
    reporter = 'install',
    color = true,
    unicode = true,
    indent = 2,
    auditLevel = 'low'
  } = options

  if (!data)
    return {
      report: reporters.warn(),
      exitCode: 0
    }

  if (typeof data.toJSON === 'function')
    data = data.toJSON()

  return {
    report: reporters[reporter](data, { color, unicode, indent }),
    exitCode: exitCode(data, auditLevel)
  }
}, { reporters })
