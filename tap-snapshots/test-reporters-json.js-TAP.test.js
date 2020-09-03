/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/reporters/json.js TAP all-severity-levels.json > default settings 1`] = `
{
  "auditReportVersion": 2,
  "vulnerabilities": {
    "handlebars": {
      "name": "handlebars",
      "severity": "critical",
      "via": [
        {
          "id": 755,
          "url": "https://npmjs.com/advisories/755",
          "title": "Prototype Pollution",
          "severity": "critical",
          "vulnerable_versions": "<=4.0.13 || >=4.1.0 <4.1.2"
        },
        {
          "id": 1164,
          "url": "https://npmjs.com/advisories/1164",
          "title": "Prototype Pollution",
          "severity": "high",
          "vulnerable_versions": "<3.0.8 || >=4.0.0 <4.3.0"
        },
        {
          "id": 1300,
          "url": "https://npmjs.com/advisories/1300",
          "title": "Denial of Service",
          "severity": "moderate",
          "vulnerable_versions": ">=4.0.0 <4.4.5"
        },
        {
          "id": 1316,
          "url": "https://npmjs.com/advisories/1316",
          "title": "Arbitrary Code Execution",
          "severity": "high",
          "vulnerable_versions": "<3.0.8 || >=4.0.0 <4.5.2"
        },
        {
          "id": 1324,
          "url": "https://npmjs.com/advisories/1324",
          "title": "Arbitrary Code Execution",
          "severity": "high",
          "vulnerable_versions": "<3.0.8 || >=4.0.0 <4.5.3"
        },
        {
          "id": 1325,
          "url": "https://npmjs.com/advisories/1325",
          "title": "Prototype Pollution",
          "severity": "high",
          "vulnerable_versions": "<3.0.8 || >=4.0.0 <4.5.3"
        },
        "optimist"
      ],
      "effects": [],
      "range": "<=4.7.3",
      "nodes": [
        "node_modules/nyc/node_modules/handlebars"
      ],
      "fixAvailable": true
    },
    "lodash": {
      "name": "lodash",
      "severity": "high",
      "via": [
        {
          "id": 782,
          "url": "https://npmjs.com/advisories/782",
          "title": "Prototype Pollution",
          "severity": "high",
          "vulnerable_versions": "<4.17.11"
        },
        {
          "id": 1065,
          "url": "https://npmjs.com/advisories/1065",
          "title": "Prototype Pollution",
          "severity": "high",
          "vulnerable_versions": "<4.17.12"
        }
      ],
      "effects": [],
      "range": "<=4.17.11",
      "nodes": [
        "node_modules/nyc/node_modules/lodash"
      ],
      "fixAvailable": true
    },
    "set-value": {
      "name": "set-value",
      "severity": "high",
      "via": [
        {
          "id": 1012,
          "url": "https://npmjs.com/advisories/1012",
          "title": "Prototype Pollution",
          "severity": "high",
          "vulnerable_versions": "<2.0.1 || >=3.0.0 <3.0.1"
        }
      ],
      "effects": [
        "union-value"
      ],
      "range": "<=2.0.0 || 3.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/set-value",
        "node_modules/nyc/node_modules/union-value/node_modules/set-value"
      ],
      "fixAvailable": true
    },
    "mixin-deep": {
      "name": "mixin-deep",
      "severity": "high",
      "via": [
        {
          "id": 1013,
          "url": "https://npmjs.com/advisories/1013",
          "title": "Prototype Pollution",
          "severity": "high",
          "vulnerable_versions": "<1.3.2 || >=2.0.0 <2.0.1"
        }
      ],
      "effects": [],
      "range": "<=1.3.1 || 2.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/mixin-deep"
      ],
      "fixAvailable": true
    },
    "mem": {
      "name": "mem",
      "severity": "low",
      "via": [
        {
          "id": 1084,
          "url": "https://npmjs.com/advisories/1084",
          "title": "Denial of Service",
          "severity": "low",
          "vulnerable_versions": "<4.0.0"
        }
      ],
      "effects": [
        "os-locale"
      ],
      "range": "<4.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/mem"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    },
    "subtext": {
      "name": "subtext",
      "severity": "high",
      "via": [
        {
          "id": 1168,
          "url": "https://npmjs.com/advisories/1168",
          "title": "Denial of Service",
          "severity": "high",
          "vulnerable_versions": ">=0.0.0"
        },
        {
          "id": 1478,
          "url": "https://npmjs.com/advisories/1478",
          "title": "Denial of Service",
          "severity": "high",
          "vulnerable_versions": ">=4.1.0"
        },
        {
          "id": 1479,
          "url": "https://npmjs.com/advisories/1479",
          "title": "Prototype Pollution",
          "severity": "high",
          "vulnerable_versions": ">=0.0.0"
        }
      ],
      "effects": [],
      "range": ">=0.0.0 || >=4.1.0",
      "nodes": [
        "node_modules/subtext"
      ],
      "fixAvailable": false
    },
    "minimist": {
      "name": "minimist",
      "severity": "low",
      "via": [
        {
          "id": 1179,
          "url": "https://npmjs.com/advisories/1179",
          "title": "Prototype Pollution",
          "severity": "low",
          "vulnerable_versions": "<0.2.1 || >=1.0.0 <1.2.3"
        }
      ],
      "effects": [
        "mkdirp",
        "optimist"
      ],
      "range": "<0.2.1 || >=1.0.0 <1.2.3",
      "nodes": [
        "node_modules/minimist",
        "node_modules/nyc/node_modules/minimist"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    },
    "kind-of": {
      "name": "kind-of",
      "severity": "low",
      "via": [
        {
          "id": 1490,
          "url": "https://npmjs.com/advisories/1490",
          "title": "Validation Bypass",
          "severity": "low",
          "vulnerable_versions": ">=6.0.0 <6.0.3"
        }
      ],
      "effects": [],
      "range": "6.0.0 - 6.0.2",
      "nodes": [
        "node_modules/nyc/node_modules/base/node_modules/kind-of",
        "node_modules/nyc/node_modules/define-property/node_modules/kind-of",
        "node_modules/nyc/node_modules/extglob/node_modules/kind-of",
        "node_modules/nyc/node_modules/micromatch/node_modules/kind-of",
        "node_modules/nyc/node_modules/nanomatch/node_modules/kind-of",
        "node_modules/nyc/node_modules/snapdragon-node/node_modules/kind-of",
        "node_modules/nyc/node_modules/test-exclude/node_modules/kind-of",
        "node_modules/nyc/node_modules/use/node_modules/kind-of"
      ],
      "fixAvailable": true
    },
    "sapper": {
      "name": "sapper",
      "severity": "critical",
      "via": [
        {
          "id": 1494,
          "url": "https://npmjs.com/advisories/1494",
          "title": "Path Traversal",
          "severity": "critical",
          "vulnerable_versions": "<0.27.11"
        }
      ],
      "effects": [],
      "range": "<0.27.11",
      "nodes": [
        "node_modules/sapper"
      ],
      "fixAvailable": false
    },
    "node-weakauras-parser": {
      "name": "node-weakauras-parser",
      "severity": "moderate",
      "via": [
        {
          "id": 1504,
          "url": "https://npmjs.com/advisories/1504",
          "title": "Buffer Overflow",
          "severity": "moderate",
          "vulnerable_versions": ">=1.0.4 <1.0.5 || >=2.0.0 <2.0.2 || >=3.0.0 <3.0.1"
        }
      ],
      "effects": [],
      "range": ">=1.0.4 <1.0.5 || >=2.0.0 <2.0.2 || >=3.0.0 <3.0.1",
      "nodes": [
        "node_modules/node-weakauras-parser"
      ],
      "fixAvailable": false
    },
    "union-value": {
      "name": "union-value",
      "severity": "high",
      "via": [
        "set-value"
      ],
      "effects": [],
      "range": "<=1.0.0 || 2.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/union-value"
      ],
      "fixAvailable": true
    },
    "os-locale": {
      "name": "os-locale",
      "severity": "low",
      "via": [
        "mem"
      ],
      "effects": [
        "yargs"
      ],
      "range": "2.0.0 - 3.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/os-locale"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    },
    "mkdirp": {
      "name": "mkdirp",
      "severity": "low",
      "via": [
        "minimist"
      ],
      "effects": [
        "nyc"
      ],
      "range": "0.4.1 - 0.5.1",
      "nodes": [
        "node_modules/mkdirp",
        "node_modules/nyc/node_modules/mkdirp"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    },
    "optimist": {
      "name": "optimist",
      "severity": "low",
      "via": [
        "minimist"
      ],
      "effects": [
        "handlebars"
      ],
      "range": ">=0.6.0",
      "nodes": [
        "node_modules/nyc/node_modules/optimist"
      ],
      "fixAvailable": true
    },
    "yargs": {
      "name": "yargs",
      "severity": "low",
      "via": [
        "os-locale"
      ],
      "effects": [
        "nyc"
      ],
      "range": "8.0.1 - 11.1.0 || 12.0.0-candidate.0 - 12.0.1",
      "nodes": [
        "node_modules/nyc/node_modules/yargs"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    },
    "nyc": {
      "name": "nyc",
      "severity": "low",
      "via": [
        "mkdirp",
        "yargs"
      ],
      "effects": [],
      "range": "6.2.0-alpha - 13.1.0",
      "nodes": [
        "node_modules/nyc"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    }
  },
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 8,
      "moderate": 1,
      "high": 5,
      "critical": 2,
      "total": 16
    },
    "dependencies": {
      "prod": 506,
      "dev": 0,
      "optional": 12,
      "peer": 0,
      "peerOptional": 0,
      "total": 518
    }
  }
}
exitCode=1
`

exports[`test/reporters/json.js TAP all-severity-levels.json > no indent 1`] = `
{"auditReportVersion":2,"vulnerabilities":{"handlebars":{"name":"handlebars","severity":"critical","via":[{"id":755,"url":"https://npmjs.com/advisories/755","title":"Prototype Pollution","severity":"critical","vulnerable_versions":"<=4.0.13 || >=4.1.0 <4.1.2"},{"id":1164,"url":"https://npmjs.com/advisories/1164","title":"Prototype Pollution","severity":"high","vulnerable_versions":"<3.0.8 || >=4.0.0 <4.3.0"},{"id":1300,"url":"https://npmjs.com/advisories/1300","title":"Denial of Service","severity":"moderate","vulnerable_versions":">=4.0.0 <4.4.5"},{"id":1316,"url":"https://npmjs.com/advisories/1316","title":"Arbitrary Code Execution","severity":"high","vulnerable_versions":"<3.0.8 || >=4.0.0 <4.5.2"},{"id":1324,"url":"https://npmjs.com/advisories/1324","title":"Arbitrary Code Execution","severity":"high","vulnerable_versions":"<3.0.8 || >=4.0.0 <4.5.3"},{"id":1325,"url":"https://npmjs.com/advisories/1325","title":"Prototype Pollution","severity":"high","vulnerable_versions":"<3.0.8 || >=4.0.0 <4.5.3"},"optimist"],"effects":[],"range":"<=4.7.3","nodes":["node_modules/nyc/node_modules/handlebars"],"fixAvailable":true},"lodash":{"name":"lodash","severity":"high","via":[{"id":782,"url":"https://npmjs.com/advisories/782","title":"Prototype Pollution","severity":"high","vulnerable_versions":"<4.17.11"},{"id":1065,"url":"https://npmjs.com/advisories/1065","title":"Prototype Pollution","severity":"high","vulnerable_versions":"<4.17.12"}],"effects":[],"range":"<=4.17.11","nodes":["node_modules/nyc/node_modules/lodash"],"fixAvailable":true},"set-value":{"name":"set-value","severity":"high","via":[{"id":1012,"url":"https://npmjs.com/advisories/1012","title":"Prototype Pollution","severity":"high","vulnerable_versions":"<2.0.1 || >=3.0.0 <3.0.1"}],"effects":["union-value"],"range":"<=2.0.0 || 3.0.0","nodes":["node_modules/nyc/node_modules/set-value","node_modules/nyc/node_modules/union-value/node_modules/set-value"],"fixAvailable":true},"mixin-deep":{"name":"mixin-deep","severity":"high","via":[{"id":1013,"url":"https://npmjs.com/advisories/1013","title":"Prototype Pollution","severity":"high","vulnerable_versions":"<1.3.2 || >=2.0.0 <2.0.1"}],"effects":[],"range":"<=1.3.1 || 2.0.0","nodes":["node_modules/nyc/node_modules/mixin-deep"],"fixAvailable":true},"mem":{"name":"mem","severity":"low","via":[{"id":1084,"url":"https://npmjs.com/advisories/1084","title":"Denial of Service","severity":"low","vulnerable_versions":"<4.0.0"}],"effects":["os-locale"],"range":"<4.0.0","nodes":["node_modules/nyc/node_modules/mem"],"fixAvailable":{"name":"nyc","version":"15.0.0","isSemVerMajor":true}},"subtext":{"name":"subtext","severity":"high","via":[{"id":1168,"url":"https://npmjs.com/advisories/1168","title":"Denial of Service","severity":"high","vulnerable_versions":">=0.0.0"},{"id":1478,"url":"https://npmjs.com/advisories/1478","title":"Denial of Service","severity":"high","vulnerable_versions":">=4.1.0"},{"id":1479,"url":"https://npmjs.com/advisories/1479","title":"Prototype Pollution","severity":"high","vulnerable_versions":">=0.0.0"}],"effects":[],"range":">=0.0.0 || >=4.1.0","nodes":["node_modules/subtext"],"fixAvailable":false},"minimist":{"name":"minimist","severity":"low","via":[{"id":1179,"url":"https://npmjs.com/advisories/1179","title":"Prototype Pollution","severity":"low","vulnerable_versions":"<0.2.1 || >=1.0.0 <1.2.3"}],"effects":["mkdirp","optimist"],"range":"<0.2.1 || >=1.0.0 <1.2.3","nodes":["node_modules/minimist","node_modules/nyc/node_modules/minimist"],"fixAvailable":{"name":"nyc","version":"15.0.0","isSemVerMajor":true}},"kind-of":{"name":"kind-of","severity":"low","via":[{"id":1490,"url":"https://npmjs.com/advisories/1490","title":"Validation Bypass","severity":"low","vulnerable_versions":">=6.0.0 <6.0.3"}],"effects":[],"range":"6.0.0 - 6.0.2","nodes":["node_modules/nyc/node_modules/base/node_modules/kind-of","node_modules/nyc/node_modules/define-property/node_modules/kind-of","node_modules/nyc/node_modules/extglob/node_modules/kind-of","node_modules/nyc/node_modules/micromatch/node_modules/kind-of","node_modules/nyc/node_modules/nanomatch/node_modules/kind-of","node_modules/nyc/node_modules/snapdragon-node/node_modules/kind-of","node_modules/nyc/node_modules/test-exclude/node_modules/kind-of","node_modules/nyc/node_modules/use/node_modules/kind-of"],"fixAvailable":true},"sapper":{"name":"sapper","severity":"critical","via":[{"id":1494,"url":"https://npmjs.com/advisories/1494","title":"Path Traversal","severity":"critical","vulnerable_versions":"<0.27.11"}],"effects":[],"range":"<0.27.11","nodes":["node_modules/sapper"],"fixAvailable":false},"node-weakauras-parser":{"name":"node-weakauras-parser","severity":"moderate","via":[{"id":1504,"url":"https://npmjs.com/advisories/1504","title":"Buffer Overflow","severity":"moderate","vulnerable_versions":">=1.0.4 <1.0.5 || >=2.0.0 <2.0.2 || >=3.0.0 <3.0.1"}],"effects":[],"range":">=1.0.4 <1.0.5 || >=2.0.0 <2.0.2 || >=3.0.0 <3.0.1","nodes":["node_modules/node-weakauras-parser"],"fixAvailable":false},"union-value":{"name":"union-value","severity":"high","via":["set-value"],"effects":[],"range":"<=1.0.0 || 2.0.0","nodes":["node_modules/nyc/node_modules/union-value"],"fixAvailable":true},"os-locale":{"name":"os-locale","severity":"low","via":["mem"],"effects":["yargs"],"range":"2.0.0 - 3.0.0","nodes":["node_modules/nyc/node_modules/os-locale"],"fixAvailable":{"name":"nyc","version":"15.0.0","isSemVerMajor":true}},"mkdirp":{"name":"mkdirp","severity":"low","via":["minimist"],"effects":["nyc"],"range":"0.4.1 - 0.5.1","nodes":["node_modules/mkdirp","node_modules/nyc/node_modules/mkdirp"],"fixAvailable":{"name":"nyc","version":"15.0.0","isSemVerMajor":true}},"optimist":{"name":"optimist","severity":"low","via":["minimist"],"effects":["handlebars"],"range":">=0.6.0","nodes":["node_modules/nyc/node_modules/optimist"],"fixAvailable":true},"yargs":{"name":"yargs","severity":"low","via":["os-locale"],"effects":["nyc"],"range":"8.0.1 - 11.1.0 || 12.0.0-candidate.0 - 12.0.1","nodes":["node_modules/nyc/node_modules/yargs"],"fixAvailable":{"name":"nyc","version":"15.0.0","isSemVerMajor":true}},"nyc":{"name":"nyc","severity":"low","via":["mkdirp","yargs"],"effects":[],"range":"6.2.0-alpha - 13.1.0","nodes":["node_modules/nyc"],"fixAvailable":{"name":"nyc","version":"15.0.0","isSemVerMajor":true}}},"metadata":{"vulnerabilities":{"info":0,"low":8,"moderate":1,"high":5,"critical":2,"total":16},"dependencies":{"prod":506,"dev":0,"optional":12,"peer":0,"peerOptional":0,"total":518}}}
exitCode=1
`

exports[`test/reporters/json.js TAP dep-vuln-with-own-vuln.json > default settings 1`] = `
{
  "auditReportVersion": 2,
  "vulnerabilities": {
    "minimist": {
      "name": "minimist",
      "severity": "low",
      "via": [
        {
          "id": 1179,
          "url": "https://npmjs.com/advisories/1179",
          "title": "Prototype Pollution",
          "severity": "low",
          "vulnerable_versions": "<0.2.1 || >=1.0.0 <1.2.3"
        }
      ],
      "effects": [
        "mkdirp"
      ],
      "range": "<0.2.1 || >=1.0.0 <1.2.3",
      "nodes": [
        "node_modules/minimist"
      ],
      "fixAvailable": true
    },
    "mkdirp": {
      "name": "mkdirp",
      "severity": "high",
      "via": [
        {
          "id": 42069,
          "url": "https://npmjs.com/advisories/42069",
          "title": "File System Pollution",
          "severity": "high",
          "vulnerable_versions": "<0.5.5"
        },
        "minimist"
      ],
      "effects": [],
      "range": "<=0.5.4",
      "nodes": [
        "node_modules/mkdirp"
      ],
      "fixAvailable": true
    }
  },
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 1,
      "moderate": 0,
      "high": 1,
      "critical": 0,
      "total": 2
    },
    "dependencies": {
      "prod": 2,
      "dev": 0,
      "optional": 0,
      "peer": 0,
      "peerOptional": 0,
      "total": 2
    }
  }
}
exitCode=1
`

exports[`test/reporters/json.js TAP dep-vuln-with-own-vuln.json > no indent 1`] = `
{"auditReportVersion":2,"vulnerabilities":{"minimist":{"name":"minimist","severity":"low","via":[{"id":1179,"url":"https://npmjs.com/advisories/1179","title":"Prototype Pollution","severity":"low","vulnerable_versions":"<0.2.1 || >=1.0.0 <1.2.3"}],"effects":["mkdirp"],"range":"<0.2.1 || >=1.0.0 <1.2.3","nodes":["node_modules/minimist"],"fixAvailable":true},"mkdirp":{"name":"mkdirp","severity":"high","via":[{"id":42069,"url":"https://npmjs.com/advisories/42069","title":"File System Pollution","severity":"high","vulnerable_versions":"<0.5.5"},"minimist"],"effects":[],"range":"<=0.5.4","nodes":["node_modules/mkdirp"],"fixAvailable":true}},"metadata":{"vulnerabilities":{"info":0,"low":1,"moderate":0,"high":1,"critical":0,"total":2},"dependencies":{"prod":2,"dev":0,"optional":0,"peer":0,"peerOptional":0,"total":2}}}
exitCode=1
`

exports[`test/reporters/json.js TAP gatsby.json > default settings 1`] = `
{
  "auditReportVersion": 2,
  "vulnerabilities": {
    "mem": {
      "name": "mem",
      "severity": "low",
      "via": [
        {
          "id": 1084,
          "url": "https://npmjs.com/advisories/1084",
          "title": "Denial of Service",
          "severity": "low",
          "vulnerable_versions": "<4.0.0"
        }
      ],
      "effects": [
        "os-locale"
      ],
      "range": "<4.0.0",
      "nodes": [
        "node_modules/mem"
      ],
      "fixAvailable": true
    },
    "yargs-parser": {
      "name": "yargs-parser",
      "severity": "low",
      "via": [
        {
          "id": 1500,
          "url": "https://npmjs.com/advisories/1500",
          "title": "Prototype Pollution",
          "severity": "low",
          "vulnerable_versions": "<13.1.2 || >=14.0.0 <15.0.1 || >=16.0.0 <18.1.2"
        }
      ],
      "effects": [
        "yargs"
      ],
      "range": "<=13.1.1 || 14.0.0 - 15.0.0 || 16.0.0 - 18.1.1",
      "nodes": [
        "node_modules/@gatsbyjs/relay-compiler/node_modules/yargs-parser"
      ],
      "fixAvailable": true
    },
    "os-locale": {
      "name": "os-locale",
      "severity": "low",
      "via": [
        "mem"
      ],
      "effects": [
        "yargs"
      ],
      "range": "2.0.0 - 3.0.0",
      "nodes": [
        "node_modules/os-locale"
      ],
      "fixAvailable": true
    },
    "yargs": {
      "name": "yargs",
      "severity": "low",
      "via": [
        "os-locale",
        "yargs-parser"
      ],
      "effects": [
        "@gatsbyjs/relay-compiler"
      ],
      "range": "4.0.0-alpha1 - 12.0.5 || 14.1.0 || 15.0.0 - 15.2.0",
      "nodes": [
        "node_modules/@gatsbyjs/relay-compiler/node_modules/yargs"
      ],
      "fixAvailable": true
    },
    "@gatsbyjs/relay-compiler": {
      "name": "@gatsbyjs/relay-compiler",
      "severity": "low",
      "via": [
        "yargs"
      ],
      "effects": [
        "gatsby"
      ],
      "range": "*",
      "nodes": [
        "node_modules/@gatsbyjs/relay-compiler"
      ],
      "fixAvailable": true
    },
    "gatsby": {
      "name": "gatsby",
      "severity": "low",
      "via": [
        "@gatsbyjs/relay-compiler",
        "gatsby-cli"
      ],
      "effects": [
        "gatsby-interface"
      ],
      "range": "2.1.1 - 2.18.3 || 2.20.24-unifiedroutes.87 || 2.20.24-unifiedroutes-v2.146 - 2.20.24-unifiedroutes-v2.151 || 2.22.13-recipes-renderer.56 - 2.22.13-recipes-renderer.75 || 2.24.13-telemetry-test.100 - 2.24.13-telemetry-test.106 || >=2.24.25",
      "nodes": [
        "node_modules/gatsby-recipes/node_modules/gatsby",
        "node_modules/gatsby"
      ],
      "fixAvailable": true
    },
    "gatsby-interface": {
      "name": "gatsby-interface",
      "severity": "low",
      "via": [
        "gatsby"
      ],
      "effects": [
        "gatsby-recipes"
      ],
      "range": "<=0.0.165-bump-reach-deps-20200527T1634 || 0.0.165 || 0.0.166",
      "nodes": [
        "node_modules/gatsby-recipes/node_modules/gatsby-interface"
      ],
      "fixAvailable": true
    },
    "gatsby-recipes": {
      "name": "gatsby-recipes",
      "severity": "low",
      "via": [
        "gatsby-interface"
      ],
      "effects": [
        "gatsby-cli"
      ],
      "range": "0.1.32-recipes-renderer.56 - 0.1.32-recipes-renderer.75 || 0.1.58-telemetry-test.100 - 0.1.58-telemetry-test.106 || >=0.2.0",
      "nodes": [
        "node_modules/gatsby-recipes"
      ],
      "fixAvailable": true
    },
    "gatsby-cli": {
      "name": "gatsby-cli",
      "severity": "low",
      "via": [
        "gatsby-recipes"
      ],
      "effects": [
        "gatsby"
      ],
      "range": "2.12.38-recipes-renderer.56 - 2.12.38-recipes-renderer.75 || 2.12.68-telemetry-test.100 - 2.12.68-telemetry-test.106 || >=2.12.70",
      "nodes": [
        "node_modules/gatsby-cli"
      ],
      "fixAvailable": true
    }
  },
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 9,
      "moderate": 0,
      "high": 0,
      "critical": 0,
      "total": 9
    },
    "dependencies": {
      "prod": 2028,
      "dev": 0,
      "optional": 127,
      "peer": 304,
      "peerOptional": 0,
      "total": 2367
    }
  }
}
exitCode=1
`

exports[`test/reporters/json.js TAP gatsby.json > no indent 1`] = `
{"auditReportVersion":2,"vulnerabilities":{"mem":{"name":"mem","severity":"low","via":[{"id":1084,"url":"https://npmjs.com/advisories/1084","title":"Denial of Service","severity":"low","vulnerable_versions":"<4.0.0"}],"effects":["os-locale"],"range":"<4.0.0","nodes":["node_modules/mem"],"fixAvailable":true},"yargs-parser":{"name":"yargs-parser","severity":"low","via":[{"id":1500,"url":"https://npmjs.com/advisories/1500","title":"Prototype Pollution","severity":"low","vulnerable_versions":"<13.1.2 || >=14.0.0 <15.0.1 || >=16.0.0 <18.1.2"}],"effects":["yargs"],"range":"<=13.1.1 || 14.0.0 - 15.0.0 || 16.0.0 - 18.1.1","nodes":["node_modules/@gatsbyjs/relay-compiler/node_modules/yargs-parser"],"fixAvailable":true},"os-locale":{"name":"os-locale","severity":"low","via":["mem"],"effects":["yargs"],"range":"2.0.0 - 3.0.0","nodes":["node_modules/os-locale"],"fixAvailable":true},"yargs":{"name":"yargs","severity":"low","via":["os-locale","yargs-parser"],"effects":["@gatsbyjs/relay-compiler"],"range":"4.0.0-alpha1 - 12.0.5 || 14.1.0 || 15.0.0 - 15.2.0","nodes":["node_modules/@gatsbyjs/relay-compiler/node_modules/yargs"],"fixAvailable":true},"@gatsbyjs/relay-compiler":{"name":"@gatsbyjs/relay-compiler","severity":"low","via":["yargs"],"effects":["gatsby"],"range":"*","nodes":["node_modules/@gatsbyjs/relay-compiler"],"fixAvailable":true},"gatsby":{"name":"gatsby","severity":"low","via":["@gatsbyjs/relay-compiler","gatsby-cli"],"effects":["gatsby-interface"],"range":"2.1.1 - 2.18.3 || 2.20.24-unifiedroutes.87 || 2.20.24-unifiedroutes-v2.146 - 2.20.24-unifiedroutes-v2.151 || 2.22.13-recipes-renderer.56 - 2.22.13-recipes-renderer.75 || 2.24.13-telemetry-test.100 - 2.24.13-telemetry-test.106 || >=2.24.25","nodes":["node_modules/gatsby-recipes/node_modules/gatsby","node_modules/gatsby"],"fixAvailable":true},"gatsby-interface":{"name":"gatsby-interface","severity":"low","via":["gatsby"],"effects":["gatsby-recipes"],"range":"<=0.0.165-bump-reach-deps-20200527T1634 || 0.0.165 || 0.0.166","nodes":["node_modules/gatsby-recipes/node_modules/gatsby-interface"],"fixAvailable":true},"gatsby-recipes":{"name":"gatsby-recipes","severity":"low","via":["gatsby-interface"],"effects":["gatsby-cli"],"range":"0.1.32-recipes-renderer.56 - 0.1.32-recipes-renderer.75 || 0.1.58-telemetry-test.100 - 0.1.58-telemetry-test.106 || >=0.2.0","nodes":["node_modules/gatsby-recipes"],"fixAvailable":true},"gatsby-cli":{"name":"gatsby-cli","severity":"low","via":["gatsby-recipes"],"effects":["gatsby"],"range":"2.12.38-recipes-renderer.56 - 2.12.38-recipes-renderer.75 || 2.12.68-telemetry-test.100 - 2.12.68-telemetry-test.106 || >=2.12.70","nodes":["node_modules/gatsby-cli"],"fixAvailable":true}},"metadata":{"vulnerabilities":{"info":0,"low":9,"moderate":0,"high":0,"critical":0,"total":9},"dependencies":{"prod":2028,"dev":0,"optional":127,"peer":304,"peerOptional":0,"total":2367}}}
exitCode=1
`

exports[`test/reporters/json.js TAP git-dep.json > default settings 1`] = `
{
  "auditReportVersion": 2,
  "vulnerabilities": {
    "minimist": {
      "name": "minimist",
      "severity": "low",
      "via": [
        {
          "id": 1179,
          "url": "https://npmjs.com/advisories/1179",
          "title": "Prototype Pollution",
          "severity": "low",
          "vulnerable_versions": "<0.2.1 || >=1.0.0 <1.2.3"
        }
      ],
      "effects": [
        "@isaacs/minimist-git-dep"
      ],
      "range": "<0.2.1 || >=1.0.0 <1.2.3",
      "nodes": [
        "node_modules/minimist"
      ],
      "fixAvailable": false
    },
    "@isaacs/minimist-git-dep": {
      "name": "@isaacs/minimist-git-dep",
      "severity": "low",
      "via": [
        "minimist"
      ],
      "effects": [],
      "range": "*",
      "nodes": [
        "node_modules/@isaacs/minimist-git-dep"
      ],
      "fixAvailable": false
    }
  },
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 2,
      "moderate": 0,
      "high": 0,
      "critical": 0,
      "total": 2
    },
    "dependencies": {
      "prod": 0,
      "dev": 2,
      "optional": 0,
      "peer": 0,
      "peerOptional": 0,
      "total": 2
    }
  }
}
exitCode=1
`

exports[`test/reporters/json.js TAP git-dep.json > no indent 1`] = `
{"auditReportVersion":2,"vulnerabilities":{"minimist":{"name":"minimist","severity":"low","via":[{"id":1179,"url":"https://npmjs.com/advisories/1179","title":"Prototype Pollution","severity":"low","vulnerable_versions":"<0.2.1 || >=1.0.0 <1.2.3"}],"effects":["@isaacs/minimist-git-dep"],"range":"<0.2.1 || >=1.0.0 <1.2.3","nodes":["node_modules/minimist"],"fixAvailable":false},"@isaacs/minimist-git-dep":{"name":"@isaacs/minimist-git-dep","severity":"low","via":["minimist"],"effects":[],"range":"*","nodes":["node_modules/@isaacs/minimist-git-dep"],"fixAvailable":false}},"metadata":{"vulnerabilities":{"info":0,"low":2,"moderate":0,"high":0,"critical":0,"total":2},"dependencies":{"prod":0,"dev":2,"optional":0,"peer":0,"peerOptional":0,"total":2}}}
exitCode=1
`

exports[`test/reporters/json.js TAP no-vulns.json > default settings 1`] = `
{
  "auditReportVersion": 2,
  "vulnerabilities": {},
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 0,
      "moderate": 0,
      "high": 0,
      "critical": 0,
      "total": 0
    },
    "dependencies": {
      "prod": 1,
      "dev": 0,
      "optional": 0,
      "peer": 0,
      "peerOptional": 0,
      "total": 1
    }
  }
}
exitCode=0
`

exports[`test/reporters/json.js TAP no-vulns.json > no indent 1`] = `
{"auditReportVersion":2,"vulnerabilities":{},"metadata":{"vulnerabilities":{"info":0,"low":0,"moderate":0,"high":0,"critical":0,"total":0},"dependencies":{"prod":1,"dev":0,"optional":0,"peer":0,"peerOptional":0,"total":1}}}
exitCode=0
`

exports[`test/reporters/json.js TAP non-semver-major-force-fix.json > default settings 1`] = `
{
  "auditReportVersion": 2,
  "vulnerabilities": {
    "minimist": {
      "name": "minimist",
      "severity": "low",
      "via": [
        {
          "id": 1179,
          "url": "https://npmjs.com/advisories/1179",
          "title": "Prototype Pollution",
          "severity": "low",
          "vulnerable_versions": "<0.2.1 || >=1.0.0 <1.2.3"
        }
      ],
      "effects": [
        "mkdirp"
      ],
      "range": "<0.2.1 || >=1.0.0 <1.2.3",
      "nodes": [
        "node_modules/minimist"
      ],
      "fixAvailable": {
        "name": "mkdirp",
        "version": "0.5.5",
        "isSemVerMajor": false
      }
    },
    "mkdirp": {
      "name": "mkdirp",
      "severity": "low",
      "via": [
        "minimist"
      ],
      "effects": [],
      "range": "0.4.1 - 0.5.1",
      "nodes": [
        "node_modules/mkdirp"
      ],
      "fixAvailable": {
        "name": "mkdirp",
        "version": "0.5.5",
        "isSemVerMajor": false
      }
    }
  },
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 2,
      "moderate": 0,
      "high": 0,
      "critical": 0,
      "total": 2
    },
    "dependencies": {
      "prod": 2,
      "dev": 0,
      "optional": 0,
      "peer": 0,
      "peerOptional": 0,
      "total": 2
    }
  }
}
exitCode=1
`

exports[`test/reporters/json.js TAP non-semver-major-force-fix.json > no indent 1`] = `
{"auditReportVersion":2,"vulnerabilities":{"minimist":{"name":"minimist","severity":"low","via":[{"id":1179,"url":"https://npmjs.com/advisories/1179","title":"Prototype Pollution","severity":"low","vulnerable_versions":"<0.2.1 || >=1.0.0 <1.2.3"}],"effects":["mkdirp"],"range":"<0.2.1 || >=1.0.0 <1.2.3","nodes":["node_modules/minimist"],"fixAvailable":{"name":"mkdirp","version":"0.5.5","isSemVerMajor":false}},"mkdirp":{"name":"mkdirp","severity":"low","via":["minimist"],"effects":[],"range":"0.4.1 - 0.5.1","nodes":["node_modules/mkdirp"],"fixAvailable":{"name":"mkdirp","version":"0.5.5","isSemVerMajor":false}}},"metadata":{"vulnerabilities":{"info":0,"low":2,"moderate":0,"high":0,"critical":0,"total":2},"dependencies":{"prod":2,"dev":0,"optional":0,"peer":0,"peerOptional":0,"total":2}}}
exitCode=1
`

exports[`test/reporters/json.js TAP not-in-registry.json > default settings 1`] = `
{
  "auditReportVersion": 2,
  "vulnerabilities": {
    "minimist": {
      "name": "minimist",
      "severity": "low",
      "via": [
        {
          "id": 1179,
          "url": "https://npmjs.com/advisories/1179",
          "title": "Prototype Pollution",
          "severity": "low",
          "vulnerable_versions": "<0.2.1 || >=1.0.0 <1.2.3"
        }
      ],
      "effects": [
        "@isaacs/this-does-not-exist-at-all"
      ],
      "range": "<0.2.1 || >=1.0.0 <1.2.3",
      "nodes": [
        "node_modules/minimist"
      ],
      "fixAvailable": false
    },
    "@isaacs/this-does-not-exist-at-all": {
      "name": "@isaacs/this-does-not-exist-at-all",
      "severity": "low",
      "via": [
        "minimist"
      ],
      "effects": [],
      "range": "0.5.1",
      "nodes": [
        "node_modules/@isaacs/this-does-not-exist-at-all"
      ],
      "fixAvailable": false
    }
  },
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 2,
      "moderate": 0,
      "high": 0,
      "critical": 0,
      "total": 2
    },
    "dependencies": {
      "prod": 0,
      "dev": 0,
      "optional": 2,
      "peer": 0,
      "peerOptional": 0,
      "total": 2
    }
  }
}
exitCode=1
`

exports[`test/reporters/json.js TAP not-in-registry.json > no indent 1`] = `
{"auditReportVersion":2,"vulnerabilities":{"minimist":{"name":"minimist","severity":"low","via":[{"id":1179,"url":"https://npmjs.com/advisories/1179","title":"Prototype Pollution","severity":"low","vulnerable_versions":"<0.2.1 || >=1.0.0 <1.2.3"}],"effects":["@isaacs/this-does-not-exist-at-all"],"range":"<0.2.1 || >=1.0.0 <1.2.3","nodes":["node_modules/minimist"],"fixAvailable":false},"@isaacs/this-does-not-exist-at-all":{"name":"@isaacs/this-does-not-exist-at-all","severity":"low","via":["minimist"],"effects":[],"range":"0.5.1","nodes":["node_modules/@isaacs/this-does-not-exist-at-all"],"fixAvailable":false}},"metadata":{"vulnerabilities":{"info":0,"low":2,"moderate":0,"high":0,"critical":0,"total":2},"dependencies":{"prod":0,"dev":0,"optional":2,"peer":0,"peerOptional":0,"total":2}}}
exitCode=1
`

exports[`test/reporters/json.js TAP nyc-mkdirp.json > default settings 1`] = `
{
  "auditReportVersion": 2,
  "vulnerabilities": {
    "handlebars": {
      "name": "handlebars",
      "severity": "critical",
      "via": [
        {
          "id": 755,
          "url": "https://npmjs.com/advisories/755",
          "title": "Prototype Pollution",
          "severity": "critical",
          "vulnerable_versions": "<=4.0.13 || >=4.1.0 <4.1.2"
        },
        {
          "id": 1164,
          "url": "https://npmjs.com/advisories/1164",
          "title": "Prototype Pollution",
          "severity": "high",
          "vulnerable_versions": "<3.0.8 || >=4.0.0 <4.3.0"
        },
        {
          "id": 1300,
          "url": "https://npmjs.com/advisories/1300",
          "title": "Denial of Service",
          "severity": "moderate",
          "vulnerable_versions": ">=4.0.0 <4.4.5"
        },
        {
          "id": 1316,
          "url": "https://npmjs.com/advisories/1316",
          "title": "Arbitrary Code Execution",
          "severity": "high",
          "vulnerable_versions": "<3.0.8 || >=4.0.0 <4.5.2"
        },
        {
          "id": 1324,
          "url": "https://npmjs.com/advisories/1324",
          "title": "Arbitrary Code Execution",
          "severity": "high",
          "vulnerable_versions": "<3.0.8 || >=4.0.0 <4.5.3"
        },
        {
          "id": 1325,
          "url": "https://npmjs.com/advisories/1325",
          "title": "Prototype Pollution",
          "severity": "high",
          "vulnerable_versions": "<3.0.8 || >=4.0.0 <4.5.3"
        },
        "optimist"
      ],
      "effects": [],
      "range": "<=4.7.3",
      "nodes": [
        "node_modules/nyc/node_modules/handlebars"
      ],
      "fixAvailable": true
    },
    "lodash": {
      "name": "lodash",
      "severity": "high",
      "via": [
        {
          "id": 782,
          "url": "https://npmjs.com/advisories/782",
          "title": "Prototype Pollution",
          "severity": "high",
          "vulnerable_versions": "<4.17.11"
        },
        {
          "id": 1065,
          "url": "https://npmjs.com/advisories/1065",
          "title": "Prototype Pollution",
          "severity": "high",
          "vulnerable_versions": "<4.17.12"
        }
      ],
      "effects": [],
      "range": "<=4.17.11",
      "nodes": [
        "node_modules/nyc/node_modules/lodash"
      ],
      "fixAvailable": true
    },
    "set-value": {
      "name": "set-value",
      "severity": "high",
      "via": [
        {
          "id": 1012,
          "url": "https://npmjs.com/advisories/1012",
          "title": "Prototype Pollution",
          "severity": "high",
          "vulnerable_versions": "<2.0.1 || >=3.0.0 <3.0.1"
        }
      ],
      "effects": [
        "union-value"
      ],
      "range": "<=2.0.0 || 3.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/set-value",
        "node_modules/nyc/node_modules/union-value/node_modules/set-value"
      ],
      "fixAvailable": true
    },
    "mixin-deep": {
      "name": "mixin-deep",
      "severity": "high",
      "via": [
        {
          "id": 1013,
          "url": "https://npmjs.com/advisories/1013",
          "title": "Prototype Pollution",
          "severity": "high",
          "vulnerable_versions": "<1.3.2 || >=2.0.0 <2.0.1"
        }
      ],
      "effects": [],
      "range": "<=1.3.1 || 2.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/mixin-deep"
      ],
      "fixAvailable": true
    },
    "mem": {
      "name": "mem",
      "severity": "low",
      "via": [
        {
          "id": 1084,
          "url": "https://npmjs.com/advisories/1084",
          "title": "Denial of Service",
          "severity": "low",
          "vulnerable_versions": "<4.0.0"
        }
      ],
      "effects": [
        "os-locale"
      ],
      "range": "<4.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/mem"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    },
    "minimist": {
      "name": "minimist",
      "severity": "low",
      "via": [
        {
          "id": 1179,
          "url": "https://npmjs.com/advisories/1179",
          "title": "Prototype Pollution",
          "severity": "low",
          "vulnerable_versions": "<0.2.1 || >=1.0.0 <1.2.3"
        }
      ],
      "effects": [
        "mkdirp",
        "optimist"
      ],
      "range": "<0.2.1 || >=1.0.0 <1.2.3",
      "nodes": [
        "node_modules/minimist",
        "node_modules/nyc/node_modules/minimist"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    },
    "kind-of": {
      "name": "kind-of",
      "severity": "low",
      "via": [
        {
          "id": 1490,
          "url": "https://npmjs.com/advisories/1490",
          "title": "Validation Bypass",
          "severity": "low",
          "vulnerable_versions": ">=6.0.0 <6.0.3"
        }
      ],
      "effects": [],
      "range": "6.0.0 - 6.0.2",
      "nodes": [
        "node_modules/nyc/node_modules/base/node_modules/kind-of",
        "node_modules/nyc/node_modules/define-property/node_modules/kind-of",
        "node_modules/nyc/node_modules/extglob/node_modules/kind-of",
        "node_modules/nyc/node_modules/micromatch/node_modules/kind-of",
        "node_modules/nyc/node_modules/nanomatch/node_modules/kind-of",
        "node_modules/nyc/node_modules/snapdragon-node/node_modules/kind-of",
        "node_modules/nyc/node_modules/test-exclude/node_modules/kind-of",
        "node_modules/nyc/node_modules/use/node_modules/kind-of"
      ],
      "fixAvailable": true
    },
    "union-value": {
      "name": "union-value",
      "severity": "high",
      "via": [
        "set-value"
      ],
      "effects": [],
      "range": "<=1.0.0 || 2.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/union-value"
      ],
      "fixAvailable": true
    },
    "os-locale": {
      "name": "os-locale",
      "severity": "low",
      "via": [
        "mem"
      ],
      "effects": [
        "yargs"
      ],
      "range": "2.0.0 - 3.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/os-locale"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    },
    "mkdirp": {
      "name": "mkdirp",
      "severity": "low",
      "via": [
        "minimist"
      ],
      "effects": [
        "nyc"
      ],
      "range": "0.4.1 - 0.5.1",
      "nodes": [
        "node_modules/mkdirp",
        "node_modules/nyc/node_modules/mkdirp"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    },
    "optimist": {
      "name": "optimist",
      "severity": "low",
      "via": [
        "minimist"
      ],
      "effects": [
        "handlebars"
      ],
      "range": ">=0.6.0",
      "nodes": [
        "node_modules/nyc/node_modules/optimist"
      ],
      "fixAvailable": true
    },
    "yargs": {
      "name": "yargs",
      "severity": "low",
      "via": [
        "os-locale"
      ],
      "effects": [
        "nyc"
      ],
      "range": "8.0.1 - 11.1.0 || 12.0.0-candidate.0 - 12.0.1",
      "nodes": [
        "node_modules/nyc/node_modules/yargs"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    },
    "nyc": {
      "name": "nyc",
      "severity": "low",
      "via": [
        "mkdirp",
        "yargs"
      ],
      "effects": [],
      "range": "6.2.0-alpha - 13.1.0",
      "nodes": [
        "node_modules/nyc"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    }
  },
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 8,
      "moderate": 0,
      "high": 4,
      "critical": 1,
      "total": 13
    },
    "dependencies": {
      "prod": 317,
      "dev": 0,
      "optional": 12,
      "peer": 0,
      "peerOptional": 0,
      "total": 329
    }
  }
}
exitCode=1
`

exports[`test/reporters/json.js TAP nyc-mkdirp.json > no indent 1`] = `
{"auditReportVersion":2,"vulnerabilities":{"handlebars":{"name":"handlebars","severity":"critical","via":[{"id":755,"url":"https://npmjs.com/advisories/755","title":"Prototype Pollution","severity":"critical","vulnerable_versions":"<=4.0.13 || >=4.1.0 <4.1.2"},{"id":1164,"url":"https://npmjs.com/advisories/1164","title":"Prototype Pollution","severity":"high","vulnerable_versions":"<3.0.8 || >=4.0.0 <4.3.0"},{"id":1300,"url":"https://npmjs.com/advisories/1300","title":"Denial of Service","severity":"moderate","vulnerable_versions":">=4.0.0 <4.4.5"},{"id":1316,"url":"https://npmjs.com/advisories/1316","title":"Arbitrary Code Execution","severity":"high","vulnerable_versions":"<3.0.8 || >=4.0.0 <4.5.2"},{"id":1324,"url":"https://npmjs.com/advisories/1324","title":"Arbitrary Code Execution","severity":"high","vulnerable_versions":"<3.0.8 || >=4.0.0 <4.5.3"},{"id":1325,"url":"https://npmjs.com/advisories/1325","title":"Prototype Pollution","severity":"high","vulnerable_versions":"<3.0.8 || >=4.0.0 <4.5.3"},"optimist"],"effects":[],"range":"<=4.7.3","nodes":["node_modules/nyc/node_modules/handlebars"],"fixAvailable":true},"lodash":{"name":"lodash","severity":"high","via":[{"id":782,"url":"https://npmjs.com/advisories/782","title":"Prototype Pollution","severity":"high","vulnerable_versions":"<4.17.11"},{"id":1065,"url":"https://npmjs.com/advisories/1065","title":"Prototype Pollution","severity":"high","vulnerable_versions":"<4.17.12"}],"effects":[],"range":"<=4.17.11","nodes":["node_modules/nyc/node_modules/lodash"],"fixAvailable":true},"set-value":{"name":"set-value","severity":"high","via":[{"id":1012,"url":"https://npmjs.com/advisories/1012","title":"Prototype Pollution","severity":"high","vulnerable_versions":"<2.0.1 || >=3.0.0 <3.0.1"}],"effects":["union-value"],"range":"<=2.0.0 || 3.0.0","nodes":["node_modules/nyc/node_modules/set-value","node_modules/nyc/node_modules/union-value/node_modules/set-value"],"fixAvailable":true},"mixin-deep":{"name":"mixin-deep","severity":"high","via":[{"id":1013,"url":"https://npmjs.com/advisories/1013","title":"Prototype Pollution","severity":"high","vulnerable_versions":"<1.3.2 || >=2.0.0 <2.0.1"}],"effects":[],"range":"<=1.3.1 || 2.0.0","nodes":["node_modules/nyc/node_modules/mixin-deep"],"fixAvailable":true},"mem":{"name":"mem","severity":"low","via":[{"id":1084,"url":"https://npmjs.com/advisories/1084","title":"Denial of Service","severity":"low","vulnerable_versions":"<4.0.0"}],"effects":["os-locale"],"range":"<4.0.0","nodes":["node_modules/nyc/node_modules/mem"],"fixAvailable":{"name":"nyc","version":"15.0.0","isSemVerMajor":true}},"minimist":{"name":"minimist","severity":"low","via":[{"id":1179,"url":"https://npmjs.com/advisories/1179","title":"Prototype Pollution","severity":"low","vulnerable_versions":"<0.2.1 || >=1.0.0 <1.2.3"}],"effects":["mkdirp","optimist"],"range":"<0.2.1 || >=1.0.0 <1.2.3","nodes":["node_modules/minimist","node_modules/nyc/node_modules/minimist"],"fixAvailable":{"name":"nyc","version":"15.0.0","isSemVerMajor":true}},"kind-of":{"name":"kind-of","severity":"low","via":[{"id":1490,"url":"https://npmjs.com/advisories/1490","title":"Validation Bypass","severity":"low","vulnerable_versions":">=6.0.0 <6.0.3"}],"effects":[],"range":"6.0.0 - 6.0.2","nodes":["node_modules/nyc/node_modules/base/node_modules/kind-of","node_modules/nyc/node_modules/define-property/node_modules/kind-of","node_modules/nyc/node_modules/extglob/node_modules/kind-of","node_modules/nyc/node_modules/micromatch/node_modules/kind-of","node_modules/nyc/node_modules/nanomatch/node_modules/kind-of","node_modules/nyc/node_modules/snapdragon-node/node_modules/kind-of","node_modules/nyc/node_modules/test-exclude/node_modules/kind-of","node_modules/nyc/node_modules/use/node_modules/kind-of"],"fixAvailable":true},"union-value":{"name":"union-value","severity":"high","via":["set-value"],"effects":[],"range":"<=1.0.0 || 2.0.0","nodes":["node_modules/nyc/node_modules/union-value"],"fixAvailable":true},"os-locale":{"name":"os-locale","severity":"low","via":["mem"],"effects":["yargs"],"range":"2.0.0 - 3.0.0","nodes":["node_modules/nyc/node_modules/os-locale"],"fixAvailable":{"name":"nyc","version":"15.0.0","isSemVerMajor":true}},"mkdirp":{"name":"mkdirp","severity":"low","via":["minimist"],"effects":["nyc"],"range":"0.4.1 - 0.5.1","nodes":["node_modules/mkdirp","node_modules/nyc/node_modules/mkdirp"],"fixAvailable":{"name":"nyc","version":"15.0.0","isSemVerMajor":true}},"optimist":{"name":"optimist","severity":"low","via":["minimist"],"effects":["handlebars"],"range":">=0.6.0","nodes":["node_modules/nyc/node_modules/optimist"],"fixAvailable":true},"yargs":{"name":"yargs","severity":"low","via":["os-locale"],"effects":["nyc"],"range":"8.0.1 - 11.1.0 || 12.0.0-candidate.0 - 12.0.1","nodes":["node_modules/nyc/node_modules/yargs"],"fixAvailable":{"name":"nyc","version":"15.0.0","isSemVerMajor":true}},"nyc":{"name":"nyc","severity":"low","via":["mkdirp","yargs"],"effects":[],"range":"6.2.0-alpha - 13.1.0","nodes":["node_modules/nyc"],"fixAvailable":{"name":"nyc","version":"15.0.0","isSemVerMajor":true}}},"metadata":{"vulnerabilities":{"info":0,"low":8,"moderate":0,"high":4,"critical":1,"total":13},"dependencies":{"prod":317,"dev":0,"optional":12,"peer":0,"peerOptional":0,"total":329}}}
exitCode=1
`

exports[`test/reporters/json.js TAP one-vuln.json > default settings 1`] = `
{
  "auditReportVersion": 2,
  "vulnerabilities": {
    "minimist": {
      "name": "minimist",
      "severity": "low",
      "via": [
        {
          "id": 1179,
          "url": "https://npmjs.com/advisories/1179",
          "title": "Prototype Pollution",
          "severity": "low",
          "vulnerable_versions": "<0.2.1 || >=1.0.0 <1.2.3"
        }
      ],
      "effects": [],
      "range": "<0.2.1 || >=1.0.0 <1.2.3",
      "nodes": [
        "node_modules/minimist"
      ],
      "fixAvailable": true
    }
  },
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 1,
      "moderate": 0,
      "high": 0,
      "critical": 0,
      "total": 1
    },
    "dependencies": {
      "prod": 1,
      "dev": 0,
      "optional": 0,
      "peer": 0,
      "peerOptional": 0,
      "total": 1
    }
  }
}
exitCode=1
`

exports[`test/reporters/json.js TAP one-vuln.json > no indent 1`] = `
{"auditReportVersion":2,"vulnerabilities":{"minimist":{"name":"minimist","severity":"low","via":[{"id":1179,"url":"https://npmjs.com/advisories/1179","title":"Prototype Pollution","severity":"low","vulnerable_versions":"<0.2.1 || >=1.0.0 <1.2.3"}],"effects":[],"range":"<0.2.1 || >=1.0.0 <1.2.3","nodes":["node_modules/minimist"],"fixAvailable":true}},"metadata":{"vulnerabilities":{"info":0,"low":1,"moderate":0,"high":0,"critical":0,"total":1},"dependencies":{"prod":1,"dev":0,"optional":0,"peer":0,"peerOptional":0,"total":1}}}
exitCode=1
`
