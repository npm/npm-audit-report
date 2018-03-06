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

const blocks = {
  low: '▉',
  moderate: `▉${colors.yellow('▉')}`,
  high: `▉${colors.yellow('▉')}${colors.red('▉')}`,
  critical: `▉${colors.yellow('▉')}${colors.red('▉')}${colors.magenta('▉')}`
}

const severityLabel = function (sev, style = 'stars') {
  if (style === 'stars') {
    return severity[sev].color(severity[sev].stars)
  }
  if (style === 'blocks') {
    return blocks[sev]
  }
  return severity[sev].color(sev)
}

const report = function (data, options, logger = console) {
  const defaults = {
    severityThreshold: ''
  }

  const config = Object.assign({}, defaults, options)

  return new Promise((resolve, reject) => {

    logger.log('npm WARN npm-audit-report@1.0.0 No repository field.')

    if (Object.keys(data.advisories).length === 0) {
      logger.log(`${colors.green('[+]')} no known vulnerabilities found [${data.metadata.totalDependencies} packages audited]`)
    } else {
      // vulns found, summarize
      let total = 0
      let severityCounts = {
        critical: 0,
        high: 0,
        moderate: 0,
        low: 0
      }

      data.actions.forEach((action) => {
        total = total + action.resolves.length

        action.resolves.forEach((resolution) => {
          const advisory = data.advisories[resolution.id]
          severityCounts[advisory.severity]++
        })
      })
      const severities = Object.entries(severityCounts).filter((value) => {
        if (value[1] > 0) {
          return true
        }
      }).map((value) => {
        return `${value[1]} ${severityLabel(value[0], false)}`
      }).join(' | ')

      logger.log(`npm WARN ${total} ${total === 1 ? 'vulnerability' : 'vulnerabilities'} found [${data.metadata.totalDependencies} packages audited]`)      
      logger.log(`npm WARN ${severities}`)
      logger.log(`npm WARN Run \`npm audit\` for more detail`)
    }
    logger.log('\nadded 918 packages from 400 contributors in 10.939s')
    // severityCounts.map((k,v) => {
    //   console.log(k,v)

    // })
    return resolve()
  })
}

module.exports = report
