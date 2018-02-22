'use strict'

const report = function (data, options, logger = console) {
  const defaults = {
  }

  const config = Object.assign({}, defaults, options)

  return new Promise((resolve, reject) => {
    const json = JSON.stringify(data, null, 2)
    logger.log(json)
    return resolve()
  })
}

module.exports = report
