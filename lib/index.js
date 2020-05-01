'use strict'

const reporters = {
  install: require('./reporters/install'),
  detail: require('./reporters/detail'),
  json: require('./reporters/json'),
  quiet: require('./reporters/quiet')
}

module.exports = Object.assign((data, options = {}) => {
  const {
    reporter = 'install',
    color = true,
    unicode = true,
    indent = 2
  } = options

  if (typeof data.toJSON === 'function')
    data = data.toJSON()

  return reporters[reporter](data, { color, unicode, indent })
}, { reporters })
