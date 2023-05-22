module.exports = async () => {
  const { Chalk } = await import('chalk')
  return {
    color: new Chalk({ level: 3 }),
    noColor: new Chalk({ level: 0 }),
  }
}
