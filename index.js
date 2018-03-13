'use strict'

// const Keyfob = require('keyfob')
// const reporters = Keyfob.load({path: './reporters', fn: require})

const reporters = {
  install: require('./reporters/install'),
  detail: require('./reporters/detail'),
  json: require('./reporters/json')
}

const report = function (data, options) {
  const defaults = {
    reporter: 'install'
  }

  const config = Object.assign({}, defaults, options)
  return new Promise((resolve, reject) => {
    const result = reporters[config.reporter](data, config)
    return resolve(result)
  })
}

module.exports = report
