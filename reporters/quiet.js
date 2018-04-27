'use strict'

const report = function (data, options) {
  let total = 0

  Object.entries(data.metadata.vulnerabilities).map((value) => {
    total = total + value[1]
  })

  return {
    report: '',
    exitCode: total === 0 ? 0 : 1
  }
}

module.exports = report
