# datenow

[![npm version](https://badge.fury.io/js/datenow.svg)](https://badge.fury.io/js/datenow)
[![Build Status](https://travis-ci.org/yefremov/datenow.svg?branch=master)](https://travis-ci.org/yefremov/datenow)

Simple `Date.now()` polyfill for old browsers and node.

## Installation

```bash
$ npm install datenow
```

## API

```js
import now from 'datenow';

let timestamp = now();
// => 1487622014639
```

To polyfill `Date.now()` function.

```js
Date.now = Date.now || require('datenow');
```

## Running tests

```bash
$ npm install
$ npm test
```

## License

[MIT](LICENSE)
