// not just using require, so that we get it fresh every time.
const { readFileSync } = require('fs')
const readJson = f => JSON.parse(readFileSync(f, 'utf8'))
module.exports = f => readJson(require.resolve(`./${f}.json`))
