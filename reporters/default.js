'use strict'

/*
Add vuln metadata
  total: 0,
  critical: 0,
  high: 0,
  moderate: 0,
  low: 0

Make actions an object
{
  update: []
  review: []
}
*/

const colors = require('ansicolors')
const styles = require('ansistyles')
const Table = require('cli-table2')

const severity = {
  critical: {
    stars: '****',
    color: colors.magenta
  },
  high: {
    stars: '*** ',
    color: colors.red
  },
  moderate: {
    stars: '**  ',
    color: colors.yellow
  },
  low: {
    stars: '*   ',
    color: function (str) { return str }
  }
}

const severityLabel = function (sev, star = false) {
  if (star) {
    return severity[sev].color(severity[sev].stars)
  }
  return severity[sev].color(sev)
}

const report = function (data, options, logger = console) {
  const defaults = {
    severityThreshold: ''
  }

  const config = Object.assign({}, defaults, options)

  const header = function (data, vulnData, config) {
    if (vulnData.total === 0) {
      return logger.log(`${colors.green('[+]')} no known vulnerabilities found (${data.metadata.totalDependencies} dependencies audited)`)
    }
    logger.log(`${colors.red('[!]')} ${vulnData.total} vulnerabilities found (${data.metadata.totalDependencies} dependencies audited)`)
    logger.log(`Run \`npm audit details\` for a more detailed report\n`)
  }

  const headerData = function (data, config) {
    let vulnData = {
      total: 0,
      critical: 0,
      high: 0,
      moderate: 0,
      low: 0
    }

    data.actions.forEach((action) => {
      vulnData.total = vulnData.total + action.resolves.length

      action.resolves.forEach((resolution) => {
        const advisory = data.advisories[resolution.id]
        vulnData[advisory.severity]++
      })
    })

    return vulnData
  }

  const actions = function (data, vulnData, config) {
    logger.log('To fix the issues:')
    data.actions.forEach((action) => {
      if (action.action === 'update') {
        const rec = getRecommendation(action, config)
        logger.log(`-> $ ${rec.cmd} ${rec.isBreaking ? ` [${colors.red('SEMVER-MAJOR')}]` : ''}`)

        action.resolves.forEach((resolution) => {
          const advisory = data.advisories[resolution.id]
          logger.log(`   - ${advisory.title} in ${advisory.module}@${advisory.version} [${severityLabel(advisory.severity)}]`)
        })
        logger.log()
      } else if (action.action === 'review') {
        const rec = getRecommendation(action, config)
        logger.log(`-> $ ${rec.cmd}`)
        action.resolves.forEach((resolution) => {
          const advisory = data.advisories[resolution.id]
          logger.log(`   - ${advisory.title} in ${advisory.module}@${advisory.version} (${resolution.path})) [${severityLabel(advisory.severity)}]`)
        })
        logger.log()
      }
    })
  }

  return new Promise((resolve, reject) => {
    const vulnData = headerData(data, config)
    header(data, vulnData, config)
    if (vulnData.total > 0) {
      actions(data, vulnData, config)
    }

    return resolve()
  })
}

const getRecommendation = function (action, config) {
  if (action.action === 'update') {
    return {
      cmd: `npm install ${action.module_name}@${action.version}`,
      isBreaking: action.change === 'major'
    }
  }
  return {
    cmd: `npm audit detail ${action.module_name}@${action.version}`,
    isBreaking: false
  }
}

module.exports = report
