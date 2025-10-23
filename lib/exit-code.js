/**
 * Determine the exit code based on the severity level and if a fix is available
 * Return 1 if any vulnerabilities in the set are at or above the specified severity
 * and, if ignoreUnfixed is true, have a fix available
 */
const severities = new Map(Object.entries([
  'info',
  'low',
  'moderate',
  'high',
  'critical',
  'none',
]).map(s => s.reverse()))

/**
 * Get number of vulnerabilities with fix available grouped by severity
 * @param data
 * @returns {Object}
 */
const getVulnerabilitiesWithFix = (data) => {
  return Object.entries(data.vulnerabilities)
    .filter(([, vuln]) => vuln.fixAvailable)
    .reduce((result, [, vuln]) => {
      result[vuln.severity] = (result[vuln.severity] || 0) + 1
      return result
    }, {})
}

module.exports = (data, level, ignoreUnfixed = false) => {
  const vulnerabilities =
     ignoreUnfixed ? getVulnerabilitiesWithFix(data) : data.metadata.vulnerabilities
  return Object.entries(vulnerabilities)
    .some(([sev, count]) => count > 0 && severities.has(sev) &&
      severities.get(sev) >= severities.get(level)) ? 1 : 0
}
