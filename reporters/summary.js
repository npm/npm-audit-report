'use strict'

const colors = require('ansicolors')
const styles = require('ansistyles')
const Table = require('cli-table2')

const severity = {
  critical: {
    stars: '****',
    color: colors.magenta
  },
  high: {
    stars: '***',
    color: colors.red
  },
  moderate: {
    stars: '**',
    color: colors.yellow
  },
  low: {
    stars: '*',
    color: function (str) { return str }
  }
}

const severityLabel = function (sev, star = true) {
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

  const header = function () {
    logger.log('npm audit - security report\n')
  }

  const footer = function (data, vulnData, config) {
    if (vulnData.total === 0) {
      return logger.log(`${colors.green('[+]')} no known vulnerabilities found (${data.metadata.totalDependencies} dependencies audited)`)
    }
    logger.log(`${colors.red('[!]')} ${vulnData.total} vulnerabilities found (${data.metadata.totalDependencies} dependencies audited)`)
    //logger.log(`    ${vulnData.critical} critical | ${vulnData.high} high | ${vulnData.moderate} moderate | ${vulnData.low} low`)
    const keys = Object.keys(vulnData).filter((key) => key !== 'total' && vulnData[key] > 0)
    let vulns = ''
    keys.forEach((key) => {
      vulns = `${vulns} ${vulnData[key]} ${key}`
    })
    logger.log(vulns)
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
      let updateFlag = false
      let reviewFlag = false

      if (action.action === 'update') {
        if (!updateFlag) {
          //logger.log('Vulnerabilities with an upgrade path')
        }
        vulnData.total = vulnData.total + action.resolves.length
        updateFlag = true

        const table = new Table({
          style: {
            head: []
          },
          head: []
        })

        table.push([{
          colSpan: 2,
          hAlign: 'center',
          content: `\nRun ${styles.underline(getInstallCmd(action, config))} to fix\n`
        }])

        action.resolves.forEach((resolution) => {
          const advisory = data.advisories[resolution.id]
          vulnData[advisory.severity]++

          if (table.length > 1) {
            // Spacer
            table.push([{
              colSpan: 2,
              content: ''
            }])
          }
          table.push(
            [severityLabel(advisory.severity), `${advisory.title}`],
            ['Package', `${advisory.module}@${advisory.version}`],
            ['Location', resolution.path],
            ['Details', `https://nodesecurity.io/advisories/${advisory.id}`]
          )
        })

        logger.log(table.toString())

      } else if (action.action === 'review') {
        if (!reviewFlag) {
          logger.log('\n\n')
        }
        vulnData.total = vulnData.total + action.resolves.length
        reviewFlag = true

        const table = new Table({
          style: {
            head: []
          },
          head: []
        })

        table.push([{
          colSpan: 2,
          hAlign: 'center',
          content: `\nPlease Review\n`
        }])

        const spacer = true
        action.resolves.forEach((resolution) => {
          const advisory = data.advisories[resolution.id]
          vulnData[advisory.severity]++

          table.push(
            [severityLabel(advisory.severity), `${advisory.title}`],
            ['Package', `${advisory.module}@${advisory.version}`],
            ['Location', resolution.path],
            ['Details', `https://nodesecurity.io/advisories/${advisory.id}`]
          )

          logger.log(table.toString())
        })

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

const getInstallCmd = function (action, config) {
  return `npm install ${action.module_name}@${action.version}`
}

const getSummaryInstallCmd = function (data, config) {
  const actions = data.actions.map(function (action) {
    if (action.action === 'update') {
      return `${action.module_name}@${action.version}`
    }
  })
  return `npm install ${actions.join(' ')}`
}

module.exports = report
