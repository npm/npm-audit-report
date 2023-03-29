const chalk = require('chalk')

module.exports = {
  color: new chalk.Instance({ level: 3 }),
  noColor: new chalk.Instance({ level: 0 }),
}
