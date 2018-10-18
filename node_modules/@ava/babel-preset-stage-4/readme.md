# @ava/babel-preset-stage-4 [![Build Status](https://travis-ci.org/avajs/babel-preset-stage-4.svg?branch=master)](https://travis-ci.org/avajs/babel-preset-stage-4)

> [Babel] preset for use with [AVA]

Aspires to bring [finished ECMAScript proposals](https://github.com/tc39/proposals/blob/master/finished-proposals.md) to AVA's test and helper files.

Efficiently applies the minimum of transforms to run the latest JavaScript syntax on Node.js 6, 8 and 10.

Built-ins are not added or extended, so features like Proxies, `Array.prototype.includes` or `String.prototype.padStart` will only be available if the Node.js version running the tests supports it. Consult [node.green] for details.

Sometimes a particular feature is *mostly* implemented in Node.js. In that case transforms are not applied.

Not all proposals can be supported via Babel transforms, see below for details. Babel may require "syntax" plugins in order to parse certain files. These plugins should be applied explicitly since this preset may not include them.


## Install

```console
$ npm install --save @ava/babel-preset-stage-4
```


## Usage

Add `@ava/stage-4` to your [Babel] presets.

### Options

For more information on setting options for a preset, refer to the [preset options] documentation.

#### `modules`

By default this preset transform ES2015 modules to CommonJS. Set to `false` to disable this behavior. Other values are ignored.


## Supported proposals

| Proposal                                                                 | Supported
| ------------------------------------------------------------------------ | ---------
| [`Array.prototype.includes`][array-includes]                             | No
| [Exponentiation operator][exponentiation]                                | Yes
| [`Object.values`/`Object.entries`][object-values-entries]                | No
| [String padding][string-padding]                                         | No
| [`Object.getOwnPropertyDescriptors`][object-gopds]                       | No
| [Trailing commas in function parameter lists and calls][function-commas] | Yes
| [Async functions][async-await]                                           | Yes
| [Shared memory and atomics][atomics]                                     | No
| [Lifting template literal restriction][template-literal-lift]            | No
| [`s` (`dotAll`) flag for regular expressions][dot-all]                   | Yes
| [RegExp named capture groups][named-groups]                              | No
| [Rest/Spread Properties][object-rest-spread]                             | Yes
| [RegExp Lookbehind Assertions][lookbehind]                               | No
| [RegExp Unicode Property Escapes][unicode-escapes]                       | No
| [`Promise.prototype.finally`][finally]                                   | No
| [Asynchronous Iteration][async-iteration]                                | Partially<sup>†</sup>
| [Optional `catch` binding][optional-catch]                               | Yes

† [`@babel/plugin-proposal-async-generator-functions`](https://www.npmjs.com/package/@babel/plugin-proposal-async-generator-functions) relies on `Symbol.asyncIterator`, which AVA does not polyfill for you.


[AVA]: https://ava.li
[Babel]: https://babeljs.io
[node.green]: http://node.green
[preset options]: http://babeljs.io/docs/plugins/#pluginpreset-options

[array-includes]: https://github.com/tc39/Array.prototype.includes
[exponentiation]: https://github.com/rwaldron/exponentiation-operator
[exponentiation-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-01/2016-01-28.md#5xviii-exponentiation-operator-rw
[object-values-entries]: https://github.com/tc39/proposal-object-values-entries
[string-padding]: https://github.com/tc39/proposal-string-pad-start-end
[object-gopds]: https://github.com/ljharb/proposal-object-getownpropertydescriptors
[function-commas]: https://github.com/tc39/proposal-trailing-function-commas
[async-await]: https://github.com/tc39/ecmascript-asyncawait
[atomics]: https://github.com/tc39/ecmascript_sharedmem
[template-literal-lift]: https://github.com/tc39/proposal-template-literal-revision
[dot-all]: https://github.com/tc39/proposal-regexp-dotall-flag
[named-groups]: https://github.com/tc39/proposal-regexp-named-groups
[object-rest-spread]: https://github.com/tc39/proposal-object-rest-spread
[lookbehind]: https://github.com/tc39/proposal-regexp-lookbehind
[unicode-escapes]: https://github.com/tc39/proposal-regexp-unicode-property-escapes
[finally]: https://github.com/tc39/proposal-promise-finally
[async-iteration]: https://github.com/tc39/proposal-async-iteration
[optional-catch]: https://github.com/tc39/proposal-optional-catch-binding
