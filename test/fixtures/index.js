// not just using require, so that we get it fresh every time.
const { readFileSync, readdirSync } = require('fs')
const readJson = f => JSON.parse(readFileSync(f, 'utf8'))
module.exports = Object.assign(f => readJson(require.resolve(`./${f}`)), {
  files: readdirSync(__dirname).filter(f => /\.json$/.test(f))
})
