
# npm audit security report

Given a response from the npm security api, render it into a variety of security reports

The response is an object that contains an output string (the report) and a suggested exitCode.
```
{
  output: 'string that contains the security report',
  exit: 1
}
```


## Basic usage example

```
'use strict'
const Report = require('npm-audit-report')

Report(response, options, (result) => {
  console.log(result.output)
  process.exitCode = result.exitCode
})
```


## options

reporter: 
  specify which output format you want to use (install, detail, json)

withColor: 
  true || false indicates if some report elements should use colors or not

withUnicode: 
  true || false indicates if unicode characters should be used or not.





