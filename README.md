Refill task sequence
====================

Sequence gulp task in [Refill](https://github.com/refilljs/refill) format. It can be used to run sequence of tasks
using [run-sequence](https://www.npmjs.com/package/run-sequence).

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

[Facebook](https://www.facebook.com/zaklinaczekodu)

Shields
-------

[![npm](https://img.shields.io/npm/v/refill-task-sequence.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-sequence)
[![npm](https://img.shields.io/npm/l/refill-task-sequence.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-sequence)
[![npm](https://img.shields.io/npm/dm/refill-task-sequence.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-sequence)
[![Travis](https://img.shields.io/travis/refilljs/refill-task-sequence/master.svg?style=flat-square)](https://travis-ci.org/refilljs/refill-task-sequence)<br>
[![bitHound Overall Score](https://www.bithound.io/github/refilljs/refill-task-sequence/badges/score.svg)](https://www.bithound.io/github/refilljs/refill-task-sequence)
[![bitHound Dependencies](https://www.bithound.io/github/refilljs/refill-task-sequence/badges/dependencies.svg)](https://www.bithound.io/github/refilljs/refill-task-sequence/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/refilljs/refill-task-sequence/badges/devDependencies.svg)](https://www.bithound.io/github/refilljs/refill-task-sequence/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/refilljs/refill-task-sequence/badges/code.svg)](https://www.bithound.io/github/refilljs/refill-task-sequence)<br>
[![GitHub forks](https://img.shields.io/github/forks/refilljs/refill-task-sequence.svg?style=flat-square)](https://github.com/refilljs/refill-task-sequence)
[![GitHub stars](https://img.shields.io/github/stars/refilljs/refill-task-sequence.svg?style=flat-square)](https://github.com/refilljs/refill-task-sequence)
[![GitHub watchers](https://img.shields.io/github/watchers/refilljs/refill-task-sequence.svg?style=flat-square)](https://github.com/refilljs/refill-task-sequence)

Installation
------------

```bash
npm install --save zkflow-task-sequence zkflow gulp
```

Example
-------

Refill task sequence is used in [Refill for Angular](https://github.com/refilljs/refill-angular)

Quickstart
----------

Just put this code in gulpfile.js

```javaScript
require('refill')({
  'sequence': {
    task: require('refill-task-sequence'),
    sequence: ['some-task']
  }
}, require('gulp'), {})
```

Usage
-----

Make sure you understand [how Refill works](https://github.com/refilljs/refill)

### Default options

```javaScript
require('refill')({
  'sequence': {
    task: require('refill-task-sequence'),
    sequence: [],
    mode: undefined
  }
}, require('gulp'), {})
```

### sequnce

Array, it will be passed as arguments to [run-sequence](https://www.npmjs.com/package/run-sequence) with gulp task callback appended at the end.

### mode

Object or undefined, this object will extend mode object, usefull if you want to change mode of operation of task before
running the sequence.

Changelog
---------

[Changelog at github](https://github.com/refilljs/refill-task-sequence/releases)

Sponsors
--------

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)

