module.exports = (data, { indent }) => ({
  report: JSON.stringify(data, null, indent),
  exitCode: Object.keys(data.vulnerabilities).length === 0 ? 0 : 1
})
