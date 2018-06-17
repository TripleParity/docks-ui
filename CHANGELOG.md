# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Docks API address can now be set using the `DOCKS_API_ADDRESS` environment variable when deploying using Docker ([#64])
- Instructions to deploy Docks UI to a swarm

### Fixed
- Fix Lazy loading not working when `--aot` is not used with `ng serve` ([#109])

## [0.0.2] - 2018-05-11
- Demo 2 release

## 0.0.1 - 2018-04-14
- Demo 1 release

[Unreleased]: https://github.com/TripleParity/docks-ui/compare/0.0.2...HEAD
[0.0.2]: https://github.com/TripleParity/docks-ui/compare/0.0.1...0.0.2

[#109]: https://github.com/TripleParity/docks-ui/issues/109
[#64]: https://github.com/TripleParity/docks-ui/issues/64
