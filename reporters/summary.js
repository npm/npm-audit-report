'use strict'

const colors = require('ansicolors')
const styles = require('ansistyles')

const report = function (data, options, logger = console) {
  const defaults = {
    severityThreshold: ''
  }

  const config = Object.assign({}, defaults, options)

  const header = function () {
    logger.log('npm audit security report\n')
  }

  const footer = function (data, vulnData, config) {
    if (vulnData.total === 0) {
      return logger.log(`${colors.green('[+]')} no known vulnerabilities found (${data.metadata.totalDependencies} dependencies audited)`)
    }
    logger.log(`${colors.red('[!]')} ${vulnData.total} vulnerabilities found (${data.metadata.totalDependencies} dependencies audited)`)
    logger.log(`    ${vulnData.critical} critical | ${vulnData.high} high | ${vulnData.moderate} moderate | ${vulnData.low} low`)
  }

  const actions = function (data, config) {
    let vulnData = {
      total: 0,
      critical: 0,
      high: 0,
      moderate: 0,
      low: 0
    }

    data.actions.forEach((action) => {
      // logger.log(`${styles.underline('Actions')}`)
      if (action.action === 'update') {
        vulnData.total = vulnData.total + action.resolves.length

        logger.log(`${styles.underline(getSummaryInstallCmd(data, config))}`)
      } else if (action.action === 'review') {
        vulnData.total = vulnData.total + action.resolves.length
        logger.log(`Review ${action.module_name}@${action.version}`)
      }
    })

    return vulnData
  }

  return new Promise((resolve, reject) => {
    header()
    const vulnData = actions(data, config)
    footer(data, vulnData, config)

    return resolve()
  })
}

const getSummaryInstallCmd = function (data, config) {
  const actions = data.actions.map(function (action) {
    if (action.action === 'update') {
      console.log(`${action.module_name}@${action.version}`)
      return `${action.module_name}@${action.version}`
    }
  })
  return `npm install ${actions.join(' ')}`
}

module.exports = report
