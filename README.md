# npm audit security report

Given a response from the npm security api, render it into a variety of security reports

[![Build Status](https://travis-ci.org/npm/npm-audit-report.svg?branch=master)](https://travis-ci.org/npm/npm-audit-report)

The response is an object that contains an output string (the report) and a suggested exitCode.
```
{
  report: 'string that contains the security report',
  exit: 1
}
```


## Basic usage example

```
'use strict'
const Report = require('npm-audit-report')

Report(response, options, (result) => {
  console.log(result.report)
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





