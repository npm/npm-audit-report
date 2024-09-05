# Changelog

## [6.0.0](https://github.com/npm/npm-audit-report/compare/v5.0.0...v6.0.0) (2024-09-03)
### ⚠️ BREAKING CHANGES
* `npm-audit-report` now supports node `^18.17.0 || >=20.5.0`
### Bug Fixes
* [`b9a071c`](https://github.com/npm/npm-audit-report/commit/b9a071ced7af6f2e9a993f51e144b9e0cd26eda5) [#137](https://github.com/npm/npm-audit-report/pull/137) align to npm 10 node engine range (@hashtagchris)
### Chores
* [`6ae4785`](https://github.com/npm/npm-audit-report/commit/6ae4785be2b746fe0b8235601da058e265a6a38f) [#137](https://github.com/npm/npm-audit-report/pull/137) run template-oss-apply (@hashtagchris)
* [`d9a9b5a`](https://github.com/npm/npm-audit-report/commit/d9a9b5a553520fa1dc17a1f5808e11a372d7c304) [#135](https://github.com/npm/npm-audit-report/pull/135) bump @npmcli/eslint-config from 4.0.5 to 5.0.0 (@dependabot[bot])
* [`6a5ef6a`](https://github.com/npm/npm-audit-report/commit/6a5ef6a35d2cb01af7b9159611ade9d73fd3e148) [#123](https://github.com/npm/npm-audit-report/pull/123) bump @npmcli/template-oss to 4.22.0 (@lukekarrys)
* [`3dfcf02`](https://github.com/npm/npm-audit-report/commit/3dfcf027274add93829070bac7157a30e98b5177) [#90](https://github.com/npm/npm-audit-report/pull/90) enable auto publish (#90) (@wraithgar)
* [`dfc6832`](https://github.com/npm/npm-audit-report/commit/dfc68324bfb01827ef85828dd5a298e5823535b2) [#136](https://github.com/npm/npm-audit-report/pull/136) postinstall for dependabot template-oss PR (@hashtagchris)
* [`ac3cfa2`](https://github.com/npm/npm-audit-report/commit/ac3cfa2d7297cf8fbcc78679eed61ed8754461ed) [#136](https://github.com/npm/npm-audit-report/pull/136) bump @npmcli/template-oss from 4.23.1 to 4.23.3 (@dependabot[bot])

## [5.0.0](https://github.com/npm/npm-audit-report/compare/v4.0.0...v5.0.0) (2023-05-22)

### ⚠️ BREAKING CHANGES

* use a passed in chalk instance to create colors (#84)

### Features

* [`ef0bac5`](https://github.com/npm/npm-audit-report/commit/ef0bac5f961c96c51455c5a23076d9fb4becc198) [#84](https://github.com/npm/npm-audit-report/pull/84) use a passed in chalk instance to create colors (#84) (@lukekarrys)

## [4.0.0](https://github.com/npm/npm-audit-report/compare/v3.0.0...v4.0.0) (2022-10-10)

### ⚠️ BREAKING CHANGES

* `npm-audit-report` is now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

* [`af74324`](https://github.com/npm/npm-audit-report/commit/af74324e943f69a0c8354fdce46745efc1cb7f61) [#67](https://github.com/npm/npm-audit-report/pull/67) postinstall for dependabot template-oss PR (@lukekarrys)

## [3.0.0](https://github.com/npm/npm-audit-report/compare/v2.1.5...v3.0.0) (2022-03-23)


### ⚠ BREAKING CHANGES

* this drops support for node10 and non-LTS versions of node 12 and node 14.

### Bug Fixes

* linting and printed check ([0e1d9e5](https://github.com/npm/npm-audit-report/commit/0e1d9e5f3c2aa5d33cad332e8a3a4a38809adbeb))


* @npmcli/template-oss@3.1.2 ([6aa9eef](https://github.com/npm/npm-audit-report/commit/6aa9eefbae2c2a438731362d4beb3799e4d67bec))

## [1.3.3](https://github.com/npm/npm-audit-report/compare/v1.3.2...v1.3.3) (2020-03-26)



<a name="1.3.2"></a>
## [1.3.2](https://github.com/npm/npm-audit-report/compare/v1.3.1...v1.3.2) (2018-12-18)


### Bug Fixes

* **parseable:** add support for critical vulns and more resolves on update/install action ([#28](https://github.com/npm/npm-audit-report/issues/28)) ([5e27893](https://github.com/npm/npm-audit-report/commit/5e27893))
* **security:** audit fix ([ff9faf3](https://github.com/npm/npm-audit-report/commit/ff9faf3))
* **urls:** Replace hardcoded URL to advisory with a URL from audit response ([#34](https://github.com/npm/npm-audit-report/issues/34)) ([e2fe95b](https://github.com/npm/npm-audit-report/commit/e2fe95b))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/npm/npm-audit-report/compare/v1.3.0...v1.3.1) (2018-07-10)



<a name="1.3.0"></a>
# [1.3.0](https://github.com/npm/npm-audit-report/compare/v1.2.1...v1.3.0) (2018-07-09)


### Bug Fixes

* **deps:** remove object.values dependency ([2c5374a](https://github.com/npm/npm-audit-report/commit/2c5374a))
* **detail:** Fix info-level severity ([#18](https://github.com/npm/npm-audit-report/issues/18)) ([807db5a](https://github.com/npm/npm-audit-report/commit/807db5a))
* **tests:** a test should not cause side-effects in other tests ([#23](https://github.com/npm/npm-audit-report/issues/23)) ([a94449f](https://github.com/npm/npm-audit-report/commit/a94449f))


### Features

* **output:** add `parseable` tabular output format support ([#21](https://github.com/npm/npm-audit-report/issues/21)) ([1c9aaf4](https://github.com/npm/npm-audit-report/commit/1c9aaf4))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/npm/npm-audit-report/compare/v1.2.0...v1.2.1) (2018-05-17)


### Bug Fixes

* **detail:** count id+path instead of just id ([99880fd](https://github.com/npm/npm-audit-report/commit/99880fd))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/npm/npm-audit-report/compare/v1.1.0...v1.2.0) (2018-05-16)


### Bug Fixes

* **full-report:** Fix install flag for devDependencies ([#14](https://github.com/npm/npm-audit-report/issues/14)) ([30e5f30](https://github.com/npm/npm-audit-report/commit/30e5f30))


### Features

* **detail:** consistified full report with install report ([#15](https://github.com/npm/npm-audit-report/issues/15)) ([6df6810](https://github.com/npm/npm-audit-report/commit/6df6810))
* **install:** include `npm audit` recommendation too ([32fb153](https://github.com/npm/npm-audit-report/commit/32fb153))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/npm/npm-audit-report/compare/v1.0.9...v1.1.0) (2018-05-10)


### Bug Fixes

* **install:** not enough data for this conditional ([6ddc30c](https://github.com/npm/npm-audit-report/commit/6ddc30c))


### Features

* **report:** compress and reformat human-readable install report ([74d5203](https://github.com/npm/npm-audit-report/commit/74d5203))
