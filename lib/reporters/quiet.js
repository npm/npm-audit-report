module.exports = (data, { indent }) => ({
  report: '',
  exitCode: Object.keys(data.vulnerabilities).length === 0 ? 0 : 1
})
