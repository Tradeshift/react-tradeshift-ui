# react-tradeshift-ui
React wrappers for the [Tradeshift ui components](https://github.com/tradeshift/tradeshift-ui).
Check the component storybook at [tradeshift.github.io/react-tradeshift-ui](https://tradeshift.github.io/react-tradeshift-ui).

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Dependency Status](https://david-dm.org/tradeshift/react-tradeshift-ui.svg)](https://david-dm.org/tradeshift/react-tradeshift-ui)
[![devDependency Status](https://david-dm.org/tradeshift/react-tradeshift-ui/dev-status.svg)](https://david-dm.org/tradeshift/react-tradeshift-ui#info=devDependencies)

[![npm version](https://badge.fury.io/js/react-tradeshift-ui.svg)](https://badge.fury.io/js/react-tradeshift-ui)
[![Build Status](https://travis-ci.org/Tradeshift/react-tradeshift-ui.svg?branch=master)](https://travis-ci.org/Tradeshift/react-tradeshift-ui)
[![codecov](https://codecov.io/gh/Tradeshift/react-tradeshift-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/Tradeshift/react-tradeshift-ui)


## Installation

```bash
$ npm install react-tradeshift-ui
```

*Note:* Requires [Tradeshift ui](http://ui.tradeshift.com/#getstarted/) explicitly loaded on your page.

## Development
Development with minimal setup via [Storybook](https://github.com/storybooks/storybook) and
[react-scripts](https://github.com/facebookincubator/create-react-app).

```bash
$ npm install
$ npm start
$ open http://localhost:9009 # Open storybook
$ npm test # Run jest specs in interactive mode
```

will open the Storybook with hot module reloading enabled.

**Troubleshooting**: If you are unable to run `npm test`, because of `EMFILE` errors, try installing watchman:
```
sudo chown -R $(whoami) /usr/local # If you migrated a previous homebrew to el capitan
brew update
brew install watchman
```
Alternatively, try running tests with `npm test -- --no-watchman`.

### Release
Any code pushed to master will be automatically released to `npm` with an appropriate semantic version.
Releases are handled automatically by Travis-CI via [semantic-release](https://github.com/semantic-release/semantic-release)
and [commitizen](http://commitizen.github.io/cz-cli/) commit message conventions.

## License

* You can always create forks on GitHub, submit Issues and Pull Requests.
* You can only use Tradeshift-UI to make apps on a Tradeshift platform, e.g. tradeshift.com.
* You can fix a bug until the bugfix is deployed by Tradeshift.
* You can host Tradeshift UI yourself.
* If you want to make a bigger change or just want to talk with us, reach out to our team here on GitHub.

You can read the actual license agreement in the [LICENSE.md](https://github.com/Tradeshift/tradeshift-ui/blob/master/LICENSE.md).

