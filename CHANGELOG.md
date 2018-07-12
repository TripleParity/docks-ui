# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- User management pages to Create, View, Update and Delete users ([#115])

## [0.1.0]
### Added
- Docks API address can now be set using the `DOCKS_API_ADDRESS` environment variable when deploying using Docker ([#64])
- Instructions to deploy Docks UI to a swarm
- Login page ([#58])
- Authentication Guard to prevent visiting pages without being authenticated ([#48])

### Fixed
- Fix Lazy loading not working when `--aot` is not used with `ng serve` ([#109])

### Changed
- Default Docks address is now `http://127.0.0.1:8080` to avoid name resolution issues in Chrome
- Replaced search bar with logout button in User Bar

### Fixed
- JWT is now sent with requests to Docks API ([#48], [#100])

## [0.0.2] - 2018-05-11
- Demo 2 release

## 0.0.1 - 2018-04-14
- Demo 1 release

[Unreleased]: https://github.com/TripleParity/docks-ui/compare/0.1.0...HEAD
[0.1.0]: https://github.com/TripleParity/docks-ui/compare/0.0.2...0.1.0
[0.0.2]: https://github.com/TripleParity/docks-ui/compare/0.0.1...0.0.2

[#115]: https://github.com/TripleParity/docks-ui/issues/115
[#109]: https://github.com/TripleParity/docks-ui/issues/109
[#100]: https://github.com/TripleParity/docks-ui/issues/100
[#64]: https://github.com/TripleParity/docks-ui/issues/64
[#58]: https://github.com/TripleParity/docks-ui/issues/58
[#48]: https://github.com/TripleParity/docks-ui/issues/48
