# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Login page ([#58])
- Authentication Guard to prevent visiting pages without being authenticated ([#48])
- 150x150 Docks logo

### Changed
- Default Docks address is now `http://127.0.0.1:8080` to avoid name resolution issues in Chrome
- Frontend architecture now allows for a Login Page
- Replaced search bar with logout button in User Bar

### Fixed
- JWT is now sent with requests to Docks API ([#48], [#100])

## [0.0.2] - 2018-05-11
- Demo 2 release

## 0.0.1 - 2018-04-14
- Demo 1 release

[Unreleased]: https://github.com/TripleParity/docks-ui/compare/0.0.2...HEAD
[0.0.2]: https://github.com/TripleParity/docks-ui/compare/0.0.1...0.0.2

[#100]: https://github.com/TripleParity/docks-ui/issues/100
[#58]: https://github.com/TripleParity/docks-ui/issues/58
[#48]: https://github.com/TripleParity/docks-ui/issues/48