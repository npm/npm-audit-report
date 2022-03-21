/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/reporters/detail.js TAP all-severity-levels.json > default settings 1`] = `
[1m# npm audit report[22m

[1mhandlebars[22m  <=4.7.3
Severity: [35m[1mcritical[22m[39m
[1mPrototype Pollution[22m - https://npmjs.com/advisories/755
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1164
[1mDenial of Service[22m - https://npmjs.com/advisories/1300
[1mArbitrary Code Execution[22m - https://npmjs.com/advisories/1316
[1mArbitrary Code Execution[22m - https://npmjs.com/advisories/1324
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1325
Depends on vulnerable versions of [1moptimist[22m
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/nyc/node_modules/handlebars[22m

[1mlodash[22m  <=4.17.11
Severity: [31m[1mhigh[22m[39m
[1mPrototype Pollution[22m - https://npmjs.com/advisories/782
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1065
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/nyc/node_modules/lodash[22m

[1mset-value[22m  <=2.0.0 || 3.0.0
Severity: [31m[1mhigh[22m[39m
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1012
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/nyc/node_modules/set-value[22m
[2mnode_modules/nyc/node_modules/union-value/node_modules/set-value[22m
  [1munion-value[22m  <=1.0.0 || 2.0.0
  Depends on vulnerable versions of [1mset-value[22m
  [2mnode_modules/nyc/node_modules/union-value[22m

[1mmixin-deep[22m  <=1.3.1 || 2.0.0
Severity: [31m[1mhigh[22m[39m
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1013
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/nyc/node_modules/mixin-deep[22m

[1mmem[22m  <4.0.0
[1mDenial of Service[22m - https://npmjs.com/advisories/1084
[33m[1mfix available[22m[39m via \`npm audit fix --force\`
Will install nyc@15.0.0, which is a breaking change
[2mnode_modules/nyc/node_modules/mem[22m
  [1mos-locale[22m  2.0.0 - 3.0.0
  Depends on vulnerable versions of [1mmem[22m
  [2mnode_modules/nyc/node_modules/os-locale[22m
    [1myargs[22m  8.0.1 - 11.1.0 || 12.0.0-candidate.0 - 12.0.1
    Depends on vulnerable versions of [1mos-locale[22m
    [2mnode_modules/nyc/node_modules/yargs[22m
      [1mnyc[22m  6.2.0-alpha - 13.1.0
      Depends on vulnerable versions of [1mmkdirp[22m
      Depends on vulnerable versions of [1myargs[22m
      [2mnode_modules/nyc[22m

[1msubtext[22m  >=0.0.0 || >=4.1.0
Severity: [31m[1mhigh[22m[39m
[1mDenial of Service[22m - https://npmjs.com/advisories/1168
[1mDenial of Service[22m - https://npmjs.com/advisories/1478
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1479
[31m[1mNo fix available[22m[39m
[2mnode_modules/subtext[22m

[1mminimist[22m  <0.2.1 || >=1.0.0 <1.2.3
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1179
[33m[1mfix available[22m[39m via \`npm audit fix --force\`
Will install nyc@15.0.0, which is a breaking change
[2mnode_modules/minimist[22m
[2mnode_modules/nyc/node_modules/minimist[22m
  [1mmkdirp[22m  0.4.1 - 0.5.1
  Depends on vulnerable versions of [1mminimist[22m
  [2mnode_modules/mkdirp[22m
  [2mnode_modules/nyc/node_modules/mkdirp[22m
  [1moptimist[22m  >=0.6.0
  Depends on vulnerable versions of [1mminimist[22m
  [2mnode_modules/nyc/node_modules/optimist[22m

[1mkind-of[22m  6.0.0 - 6.0.2
[1mValidation Bypass[22m - https://npmjs.com/advisories/1490
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/nyc/node_modules/base/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/define-property/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/extglob/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/micromatch/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/nanomatch/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/snapdragon-node/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/test-exclude/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/use/node_modules/kind-of[22m

[1msapper[22m  <0.27.11
Severity: [35m[1mcritical[22m[39m
[1mPath Traversal[22m - https://npmjs.com/advisories/1494
[31m[1mNo fix available[22m[39m
[2mnode_modules/sapper[22m

[1mnode-weakauras-parser[22m  >=1.0.4 <1.0.5 || >=2.0.0 <2.0.2 || >=3.0.0 <3.0.1
Severity: [33m[1mmoderate[22m[39m
[1mBuffer Overflow[22m - https://npmjs.com/advisories/1504
[31m[1mNo fix available[22m[39m
[2mnode_modules/node-weakauras-parser[22m

[31m[1m16[22m[39m vulnerabilities (8 [1mlow[22m, 1 [33m[1mmoderate[22m[39m, 5 [31m[1mhigh[22m[39m, 2 [35m[1mcritical[22m[39m)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.
exitCode=1
`

exports[`test/reporters/detail.js TAP all-severity-levels.json > no color 1`] = `
# npm audit report

handlebars  <=4.7.3
Severity: critical
Prototype Pollution - https://npmjs.com/advisories/755
Prototype Pollution - https://npmjs.com/advisories/1164
Denial of Service - https://npmjs.com/advisories/1300
Arbitrary Code Execution - https://npmjs.com/advisories/1316
Arbitrary Code Execution - https://npmjs.com/advisories/1324
Prototype Pollution - https://npmjs.com/advisories/1325
Depends on vulnerable versions of optimist
fix available via \`npm audit fix\`
node_modules/nyc/node_modules/handlebars

lodash  <=4.17.11
Severity: high
Prototype Pollution - https://npmjs.com/advisories/782
Prototype Pollution - https://npmjs.com/advisories/1065
fix available via \`npm audit fix\`
node_modules/nyc/node_modules/lodash

set-value  <=2.0.0 || 3.0.0
Severity: high
Prototype Pollution - https://npmjs.com/advisories/1012
fix available via \`npm audit fix\`
node_modules/nyc/node_modules/set-value
node_modules/nyc/node_modules/union-value/node_modules/set-value
  union-value  <=1.0.0 || 2.0.0
  Depends on vulnerable versions of set-value
  node_modules/nyc/node_modules/union-value

mixin-deep  <=1.3.1 || 2.0.0
Severity: high
Prototype Pollution - https://npmjs.com/advisories/1013
fix available via \`npm audit fix\`
node_modules/nyc/node_modules/mixin-deep

mem  <4.0.0
Denial of Service - https://npmjs.com/advisories/1084
fix available via \`npm audit fix --force\`
Will install nyc@15.0.0, which is a breaking change
node_modules/nyc/node_modules/mem
  os-locale  2.0.0 - 3.0.0
  Depends on vulnerable versions of mem
  node_modules/nyc/node_modules/os-locale
    yargs  8.0.1 - 11.1.0 || 12.0.0-candidate.0 - 12.0.1
    Depends on vulnerable versions of os-locale
    node_modules/nyc/node_modules/yargs
      nyc  6.2.0-alpha - 13.1.0
      Depends on vulnerable versions of mkdirp
      Depends on vulnerable versions of yargs
      node_modules/nyc

subtext  >=0.0.0 || >=4.1.0
Severity: high
Denial of Service - https://npmjs.com/advisories/1168
Denial of Service - https://npmjs.com/advisories/1478
Prototype Pollution - https://npmjs.com/advisories/1479
No fix available
node_modules/subtext

minimist  <0.2.1 || >=1.0.0 <1.2.3
Prototype Pollution - https://npmjs.com/advisories/1179
fix available via \`npm audit fix --force\`
Will install nyc@15.0.0, which is a breaking change
node_modules/minimist
node_modules/nyc/node_modules/minimist
  mkdirp  0.4.1 - 0.5.1
  Depends on vulnerable versions of minimist
  node_modules/mkdirp
  node_modules/nyc/node_modules/mkdirp
  optimist  >=0.6.0
  Depends on vulnerable versions of minimist
  node_modules/nyc/node_modules/optimist

kind-of  6.0.0 - 6.0.2
Validation Bypass - https://npmjs.com/advisories/1490
fix available via \`npm audit fix\`
node_modules/nyc/node_modules/base/node_modules/kind-of
node_modules/nyc/node_modules/define-property/node_modules/kind-of
node_modules/nyc/node_modules/extglob/node_modules/kind-of
node_modules/nyc/node_modules/micromatch/node_modules/kind-of
node_modules/nyc/node_modules/nanomatch/node_modules/kind-of
node_modules/nyc/node_modules/snapdragon-node/node_modules/kind-of
node_modules/nyc/node_modules/test-exclude/node_modules/kind-of
node_modules/nyc/node_modules/use/node_modules/kind-of

sapper  <0.27.11
Severity: critical
Path Traversal - https://npmjs.com/advisories/1494
No fix available
node_modules/sapper

node-weakauras-parser  >=1.0.4 <1.0.5 || >=2.0.0 <2.0.2 || >=3.0.0 <3.0.1
Severity: moderate
Buffer Overflow - https://npmjs.com/advisories/1504
No fix available
node_modules/node-weakauras-parser

16 vulnerabilities (8 low, 1 moderate, 5 high, 2 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.
exitCode=1
`

exports[`test/reporters/detail.js TAP dep-vuln-with-own-vuln.json > default settings 1`] = `
[1m# npm audit report[22m

[1mminimist[22m  <0.2.1 || >=1.0.0 <1.2.3
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1179
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/minimist[22m
  [1mmkdirp[22m  <=0.5.4
  Depends on vulnerable versions of [1mminimist[22m
  [2mnode_modules/mkdirp[22m


[31m[1m2[22m[39m vulnerabilities (1 [1mlow[22m, 1 [31m[1mhigh[22m[39m)

To address all issues, run:
  npm audit fix
exitCode=1
`

exports[`test/reporters/detail.js TAP dep-vuln-with-own-vuln.json > no color 1`] = `
# npm audit report

minimist  <0.2.1 || >=1.0.0 <1.2.3
Prototype Pollution - https://npmjs.com/advisories/1179
fix available via \`npm audit fix\`
node_modules/minimist
  mkdirp  <=0.5.4
  Depends on vulnerable versions of minimist
  node_modules/mkdirp


2 vulnerabilities (1 low, 1 high)

To address all issues, run:
  npm audit fix
exitCode=1
`

exports[`test/reporters/detail.js TAP gatsby.json > default settings 1`] = `
[1m# npm audit report[22m

[1mmem[22m  <4.0.0
[1mDenial of Service[22m - https://npmjs.com/advisories/1084
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/mem[22m
  [1mos-locale[22m  2.0.0 - 3.0.0
  Depends on vulnerable versions of [1mmem[22m
  [2mnode_modules/os-locale[22m
    [1myargs[22m  4.0.0-alpha1 - 12.0.5 || 14.1.0 || 15.0.0 - 15.2.0
    Depends on vulnerable versions of [1mos-locale[22m
    Depends on vulnerable versions of [1myargs-parser[22m
    [2mnode_modules/@gatsbyjs/relay-compiler/node_modules/yargs[22m
      [1m@gatsbyjs/relay-compiler[22m  *
      Depends on vulnerable versions of [1myargs[22m
      [2mnode_modules/@gatsbyjs/relay-compiler[22m
        [1mgatsby[22m  2.1.1 - 2.18.3 || 2.20.24-unifiedroutes.87 || 2.20.24-unifiedroutes-v2.146 - 2.20.24-unifiedroutes-v2.151 || 2.22.13-recipes-renderer.56 - 2.22.13-recipes-renderer.75 || 2.24.13-telemetry-test.100 - 2.24.13-telemetry-test.106 || >=2.24.25
        Depends on vulnerable versions of [1m@gatsbyjs/relay-compiler[22m
        Depends on vulnerable versions of [1mgatsby-cli[22m
        [2mnode_modules/gatsby-recipes/node_modules/gatsby[22m
        [2mnode_modules/gatsby[22m
          [1mgatsby-interface[22m  <=0.0.165-bump-reach-deps-20200527T1634 || 0.0.165 || 0.0.166
          Depends on vulnerable versions of [1mgatsby[22m
          [2mnode_modules/gatsby-recipes/node_modules/gatsby-interface[22m
            [1mgatsby-recipes[22m  0.1.32-recipes-renderer.56 - 0.1.32-recipes-renderer.75 || 0.1.58-telemetry-test.100 - 0.1.58-telemetry-test.106 || >=0.2.0
            Depends on vulnerable versions of [1mgatsby-interface[22m
            [2mnode_modules/gatsby-recipes[22m
              [1mgatsby-cli[22m  2.12.38-recipes-renderer.56 - 2.12.38-recipes-renderer.75 || 2.12.68-telemetry-test.100 - 2.12.68-telemetry-test.106 || >=2.12.70
              Depends on vulnerable versions of [1mgatsby-recipes[22m
              [2mnode_modules/gatsby-cli[22m

[1myargs-parser[22m  <=13.1.1 || 14.0.0 - 15.0.0 || 16.0.0 - 18.1.1
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1500
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/@gatsbyjs/relay-compiler/node_modules/yargs-parser[22m

9 [1mlow[22m severity vulnerabilities

To address all issues, run:
  npm audit fix
exitCode=1
`

exports[`test/reporters/detail.js TAP gatsby.json > no color 1`] = `
# npm audit report

mem  <4.0.0
Denial of Service - https://npmjs.com/advisories/1084
fix available via \`npm audit fix\`
node_modules/mem
  os-locale  2.0.0 - 3.0.0
  Depends on vulnerable versions of mem
  node_modules/os-locale
    yargs  4.0.0-alpha1 - 12.0.5 || 14.1.0 || 15.0.0 - 15.2.0
    Depends on vulnerable versions of os-locale
    Depends on vulnerable versions of yargs-parser
    node_modules/@gatsbyjs/relay-compiler/node_modules/yargs
      @gatsbyjs/relay-compiler  *
      Depends on vulnerable versions of yargs
      node_modules/@gatsbyjs/relay-compiler
        gatsby  2.1.1 - 2.18.3 || 2.20.24-unifiedroutes.87 || 2.20.24-unifiedroutes-v2.146 - 2.20.24-unifiedroutes-v2.151 || 2.22.13-recipes-renderer.56 - 2.22.13-recipes-renderer.75 || 2.24.13-telemetry-test.100 - 2.24.13-telemetry-test.106 || >=2.24.25
        Depends on vulnerable versions of @gatsbyjs/relay-compiler
        Depends on vulnerable versions of gatsby-cli
        node_modules/gatsby-recipes/node_modules/gatsby
        node_modules/gatsby
          gatsby-interface  <=0.0.165-bump-reach-deps-20200527T1634 || 0.0.165 || 0.0.166
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-recipes/node_modules/gatsby-interface
            gatsby-recipes  0.1.32-recipes-renderer.56 - 0.1.32-recipes-renderer.75 || 0.1.58-telemetry-test.100 - 0.1.58-telemetry-test.106 || >=0.2.0
            Depends on vulnerable versions of gatsby-interface
            node_modules/gatsby-recipes
              gatsby-cli  2.12.38-recipes-renderer.56 - 2.12.38-recipes-renderer.75 || 2.12.68-telemetry-test.100 - 2.12.68-telemetry-test.106 || >=2.12.70
              Depends on vulnerable versions of gatsby-recipes
              node_modules/gatsby-cli

yargs-parser  <=13.1.1 || 14.0.0 - 15.0.0 || 16.0.0 - 18.1.1
Prototype Pollution - https://npmjs.com/advisories/1500
fix available via \`npm audit fix\`
node_modules/@gatsbyjs/relay-compiler/node_modules/yargs-parser

9 low severity vulnerabilities

To address all issues, run:
  npm audit fix
exitCode=1
`

exports[`test/reporters/detail.js TAP git-dep.json > default settings 1`] = `
[1m# npm audit report[22m

[1mminimist[22m  <0.2.1 || >=1.0.0 <1.2.3
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1179
[31m[1mNo fix available[22m[39m
[2mnode_modules/minimist[22m
  [1m@isaacs/minimist-git-dep[22m  *
  Depends on vulnerable versions of [1mminimist[22m
  [2mnode_modules/@isaacs/minimist-git-dep[22m

2 [1mlow[22m severity vulnerabilities

Some issues need review, and may require choosing
a different dependency.
exitCode=1
`

exports[`test/reporters/detail.js TAP git-dep.json > no color 1`] = `
# npm audit report

minimist  <0.2.1 || >=1.0.0 <1.2.3
Prototype Pollution - https://npmjs.com/advisories/1179
No fix available
node_modules/minimist
  @isaacs/minimist-git-dep  *
  Depends on vulnerable versions of minimist
  node_modules/@isaacs/minimist-git-dep

2 low severity vulnerabilities

Some issues need review, and may require choosing
a different dependency.
exitCode=1
`

exports[`test/reporters/detail.js TAP no-vulns.json > default settings 1`] = `
found [32m[1m0[22m[39m vulnerabilities
exitCode=0
`

exports[`test/reporters/detail.js TAP no-vulns.json > no color 1`] = `
found 0 vulnerabilities
exitCode=0
`

exports[`test/reporters/detail.js TAP non-semver-major-force-fix.json > default settings 1`] = `
[1m# npm audit report[22m

[1mminimist[22m  <0.2.1 || >=1.0.0 <1.2.3
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1179
[33m[1mfix available[22m[39m via \`npm audit fix --force\`
Will install mkdirp@0.5.5, which is outside the stated dependency range
[2mnode_modules/minimist[22m
  [1mmkdirp[22m  0.4.1 - 0.5.1
  Depends on vulnerable versions of [1mminimist[22m
  [2mnode_modules/mkdirp[22m

2 [1mlow[22m severity vulnerabilities

To address all issues, run:
  npm audit fix --force
exitCode=1
`

exports[`test/reporters/detail.js TAP non-semver-major-force-fix.json > no color 1`] = `
# npm audit report

minimist  <0.2.1 || >=1.0.0 <1.2.3
Prototype Pollution - https://npmjs.com/advisories/1179
fix available via \`npm audit fix --force\`
Will install mkdirp@0.5.5, which is outside the stated dependency range
node_modules/minimist
  mkdirp  0.4.1 - 0.5.1
  Depends on vulnerable versions of minimist
  node_modules/mkdirp

2 low severity vulnerabilities

To address all issues, run:
  npm audit fix --force
exitCode=1
`

exports[`test/reporters/detail.js TAP not-in-registry.json > default settings 1`] = `
[1m# npm audit report[22m

[1mminimist[22m  <0.2.1 || >=1.0.0 <1.2.3
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1179
[31m[1mNo fix available[22m[39m
[2mnode_modules/minimist[22m
  [1m@isaacs/this-does-not-exist-at-all[22m  0.5.1
  Depends on vulnerable versions of [1mminimist[22m
  [2mnode_modules/@isaacs/this-does-not-exist-at-all[22m

2 [1mlow[22m severity vulnerabilities

Some issues need review, and may require choosing
a different dependency.
exitCode=1
`

exports[`test/reporters/detail.js TAP not-in-registry.json > no color 1`] = `
# npm audit report

minimist  <0.2.1 || >=1.0.0 <1.2.3
Prototype Pollution - https://npmjs.com/advisories/1179
No fix available
node_modules/minimist
  @isaacs/this-does-not-exist-at-all  0.5.1
  Depends on vulnerable versions of minimist
  node_modules/@isaacs/this-does-not-exist-at-all

2 low severity vulnerabilities

Some issues need review, and may require choosing
a different dependency.
exitCode=1
`

exports[`test/reporters/detail.js TAP nyc-mkdirp.json > default settings 1`] = `
[1m# npm audit report[22m

[1mhandlebars[22m  <=4.7.3
Severity: [35m[1mcritical[22m[39m
[1mPrototype Pollution[22m - https://npmjs.com/advisories/755
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1164
[1mDenial of Service[22m - https://npmjs.com/advisories/1300
[1mArbitrary Code Execution[22m - https://npmjs.com/advisories/1316
[1mArbitrary Code Execution[22m - https://npmjs.com/advisories/1324
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1325
Depends on vulnerable versions of [1moptimist[22m
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/nyc/node_modules/handlebars[22m

[1mlodash[22m  <=4.17.11
Severity: [31m[1mhigh[22m[39m
[1mPrototype Pollution[22m - https://npmjs.com/advisories/782
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1065
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/nyc/node_modules/lodash[22m

[1mset-value[22m  <=2.0.0 || 3.0.0
Severity: [31m[1mhigh[22m[39m
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1012
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/nyc/node_modules/set-value[22m
[2mnode_modules/nyc/node_modules/union-value/node_modules/set-value[22m
  [1munion-value[22m  <=1.0.0 || 2.0.0
  Depends on vulnerable versions of [1mset-value[22m
  [2mnode_modules/nyc/node_modules/union-value[22m

[1mmixin-deep[22m  <=1.3.1 || 2.0.0
Severity: [31m[1mhigh[22m[39m
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1013
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/nyc/node_modules/mixin-deep[22m

[1mmem[22m  <4.0.0
[1mDenial of Service[22m - https://npmjs.com/advisories/1084
[33m[1mfix available[22m[39m via \`npm audit fix --force\`
Will install nyc@15.0.0, which is a breaking change
[2mnode_modules/nyc/node_modules/mem[22m
  [1mos-locale[22m  2.0.0 - 3.0.0
  Depends on vulnerable versions of [1mmem[22m
  [2mnode_modules/nyc/node_modules/os-locale[22m
    [1myargs[22m  8.0.1 - 11.1.0 || 12.0.0-candidate.0 - 12.0.1
    Depends on vulnerable versions of [1mos-locale[22m
    [2mnode_modules/nyc/node_modules/yargs[22m
      [1mnyc[22m  6.2.0-alpha - 13.1.0
      Depends on vulnerable versions of [1mmkdirp[22m
      Depends on vulnerable versions of [1myargs[22m
      [2mnode_modules/nyc[22m

[1mminimist[22m  <0.2.1 || >=1.0.0 <1.2.3
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1179
[33m[1mfix available[22m[39m via \`npm audit fix --force\`
Will install nyc@15.0.0, which is a breaking change
[2mnode_modules/minimist[22m
[2mnode_modules/nyc/node_modules/minimist[22m
  [1mmkdirp[22m  0.4.1 - 0.5.1
  Depends on vulnerable versions of [1mminimist[22m
  [2mnode_modules/mkdirp[22m
  [2mnode_modules/nyc/node_modules/mkdirp[22m
  [1moptimist[22m  >=0.6.0
  Depends on vulnerable versions of [1mminimist[22m
  [2mnode_modules/nyc/node_modules/optimist[22m

[1mkind-of[22m  6.0.0 - 6.0.2
[1mValidation Bypass[22m - https://npmjs.com/advisories/1490
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/nyc/node_modules/base/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/define-property/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/extglob/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/micromatch/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/nanomatch/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/snapdragon-node/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/test-exclude/node_modules/kind-of[22m
[2mnode_modules/nyc/node_modules/use/node_modules/kind-of[22m

[31m[1m13[22m[39m vulnerabilities (8 [1mlow[22m, 4 [31m[1mhigh[22m[39m, 1 [35m[1mcritical[22m[39m)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force
exitCode=1
`

exports[`test/reporters/detail.js TAP nyc-mkdirp.json > no color 1`] = `
# npm audit report

handlebars  <=4.7.3
Severity: critical
Prototype Pollution - https://npmjs.com/advisories/755
Prototype Pollution - https://npmjs.com/advisories/1164
Denial of Service - https://npmjs.com/advisories/1300
Arbitrary Code Execution - https://npmjs.com/advisories/1316
Arbitrary Code Execution - https://npmjs.com/advisories/1324
Prototype Pollution - https://npmjs.com/advisories/1325
Depends on vulnerable versions of optimist
fix available via \`npm audit fix\`
node_modules/nyc/node_modules/handlebars

lodash  <=4.17.11
Severity: high
Prototype Pollution - https://npmjs.com/advisories/782
Prototype Pollution - https://npmjs.com/advisories/1065
fix available via \`npm audit fix\`
node_modules/nyc/node_modules/lodash

set-value  <=2.0.0 || 3.0.0
Severity: high
Prototype Pollution - https://npmjs.com/advisories/1012
fix available via \`npm audit fix\`
node_modules/nyc/node_modules/set-value
node_modules/nyc/node_modules/union-value/node_modules/set-value
  union-value  <=1.0.0 || 2.0.0
  Depends on vulnerable versions of set-value
  node_modules/nyc/node_modules/union-value

mixin-deep  <=1.3.1 || 2.0.0
Severity: high
Prototype Pollution - https://npmjs.com/advisories/1013
fix available via \`npm audit fix\`
node_modules/nyc/node_modules/mixin-deep

mem  <4.0.0
Denial of Service - https://npmjs.com/advisories/1084
fix available via \`npm audit fix --force\`
Will install nyc@15.0.0, which is a breaking change
node_modules/nyc/node_modules/mem
  os-locale  2.0.0 - 3.0.0
  Depends on vulnerable versions of mem
  node_modules/nyc/node_modules/os-locale
    yargs  8.0.1 - 11.1.0 || 12.0.0-candidate.0 - 12.0.1
    Depends on vulnerable versions of os-locale
    node_modules/nyc/node_modules/yargs
      nyc  6.2.0-alpha - 13.1.0
      Depends on vulnerable versions of mkdirp
      Depends on vulnerable versions of yargs
      node_modules/nyc

minimist  <0.2.1 || >=1.0.0 <1.2.3
Prototype Pollution - https://npmjs.com/advisories/1179
fix available via \`npm audit fix --force\`
Will install nyc@15.0.0, which is a breaking change
node_modules/minimist
node_modules/nyc/node_modules/minimist
  mkdirp  0.4.1 - 0.5.1
  Depends on vulnerable versions of minimist
  node_modules/mkdirp
  node_modules/nyc/node_modules/mkdirp
  optimist  >=0.6.0
  Depends on vulnerable versions of minimist
  node_modules/nyc/node_modules/optimist

kind-of  6.0.0 - 6.0.2
Validation Bypass - https://npmjs.com/advisories/1490
fix available via \`npm audit fix\`
node_modules/nyc/node_modules/base/node_modules/kind-of
node_modules/nyc/node_modules/define-property/node_modules/kind-of
node_modules/nyc/node_modules/extglob/node_modules/kind-of
node_modules/nyc/node_modules/micromatch/node_modules/kind-of
node_modules/nyc/node_modules/nanomatch/node_modules/kind-of
node_modules/nyc/node_modules/snapdragon-node/node_modules/kind-of
node_modules/nyc/node_modules/test-exclude/node_modules/kind-of
node_modules/nyc/node_modules/use/node_modules/kind-of

13 vulnerabilities (8 low, 4 high, 1 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force
exitCode=1
`

exports[`test/reporters/detail.js TAP one-vuln.json > default settings 1`] = `
[1m# npm audit report[22m

[1mminimist[22m  <0.2.1 || >=1.0.0 <1.2.3
[1mPrototype Pollution[22m - https://npmjs.com/advisories/1179
[32m[1mfix available[22m[39m via \`npm audit fix\`
[2mnode_modules/minimist[22m

1 [1mlow[22m severity vulnerability

To address all issues, run:
  npm audit fix
exitCode=1
`

exports[`test/reporters/detail.js TAP one-vuln.json > no color 1`] = `
# npm audit report

minimist  <0.2.1 || >=1.0.0 <1.2.3
Prototype Pollution - https://npmjs.com/advisories/1179
fix available via \`npm audit fix\`
node_modules/minimist

1 low severity vulnerability

To address all issues, run:
  npm audit fix
exitCode=1
`
