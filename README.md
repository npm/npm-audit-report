
# npm audit security report

Given a response from the npm security api, render it into a hopefully useful terminal response.


## Basic usage

```
'use strict'
const Report = require('npm-audit-report')

Report(response, options, (result) => {
  // Result contains hints as to what was found in the report to influence things like
  // exit codes
  // done rendering report
})
```

response: the response from the security audit API

options:
- reporter: specify which output format you want to use  
