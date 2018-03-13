
# npm audit security report

Given a response from the npm security api, render it into a variety of security reports.

The response is `true` or `false` depending on if vulnerabilities were found that are >= the severityThreshold option.


## Basic usage

```
'use strict'
const Report = require('npm-audit-report')

Report(response, options, (result) => {
  // result is either true or false
  // done rendering report
})
```

response: the response from the security audit API

options:
- reporter: specify which output format you want to use
- severityThreshold: specify the severity threshold for reporting
  example: If you specify high, then only vulnerabilities with high and critical would be displayed.


