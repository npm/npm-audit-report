'use strict'

const Keyfob = require('keyfob')
const reporters = Keyfob.load({path: './reporters', fn: require})

const report = function (data, options, logger = console) {
  const defaults = {
    reporter: 'default'
  }

  const config = Object.assign({}, defaults, options)
  return new Promise((resolve, reject) => {
    reporters[config.reporter](data, config, logger)
    return resolve()
  })
}

module.exports = report
