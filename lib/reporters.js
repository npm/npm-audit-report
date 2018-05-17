exports.totalVulnCount = function (vulnerabilities) {
  return Object.values(vulnerabilities).reduce((accumulator, vulnCount) => {
    accumulator += vulnCount

    return accumulator
  }, 0)
}

exports.severities = function (vulnerabilities) {
  return Object.keys(vulnerabilities).reduce((accumulator, severity) => {
    const vulnCount = vulnerabilities[severity]
    if (vulnCount > 0) accumulator.push([severity, vulnCount])

    return accumulator
  }, [])
}
