# oneline

Write nice template literals with newlines, but format as a single-line string.
Trims leading/trailing whitespace and replaces all newlines and subsequent whitespace with a single space.

[![npm version](https://img.shields.io/npm/v/oneline.svg?style=flat-square)](https://www.npmjs.com/package/oneline)[![npm bundle size](https://img.shields.io/bundlephobia/minzip/oneline?style=flat-square)](https://bundlephobia.com/result?p=oneline)[![npm weekly downloads](https://img.shields.io/npm/dw/oneline.svg?style=flat-square)](https://www.npmjs.com/package/oneline)

## Installing

```
npm install --save oneline
```

## Basic usage

```js
import {oneline} from 'oneline'

const url = 'https://docs.npmjs.com/'
const message = oneline`
  It's a fine day to write a long, verbose string.
  It could contain all sorts of expressions, let's for instance
  inject a URL, say to the NPM docs: ${url}. In the end, this will
  all result in a single line of text.
`

console.log(message)
// It's a fine day to write a long, verbose string. It could contain all sorts of expressions, let's for instance inject a URL, say to the NPM docs: https://docs.npmjs.com/. In the end, this will all result in a single line of text.
```

## Thanks to...

Thanks [Hal Henke](https://github.com/halhenke) for donating the package name! <3

## License

MIT © [Espen Hovlandsdal](https://espen.codes/)
