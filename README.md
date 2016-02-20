# ZKflow task sequence

Sequence gulp task in [ZKflow](https://github.com/zaklinaczekodu/zkflow) format. It can be used to run sequence of tasks
using [run-sequence](https://www.npmjs.com/package/run-sequence).

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

Shields
-------

[![npm](https://img.shields.io/npm/v/zkflow-task-sequence.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-sequence)
[![npm](https://img.shields.io/npm/l/zkflow-task-sequence.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-sequence)
[![npm](https://img.shields.io/npm/dm/zkflow-task-sequence.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-sequence)<br>
[![Travis](https://img.shields.io/travis/zaklinaczekodu/zkflow-task-sequence/master.svg?style=flat-square)](https://travis-ci.org/zaklinaczekodu/zkflow-task-sequence)
[![Code Climate](https://img.shields.io/codeclimate/github/zaklinaczekodu/zkflow-task-sequence.svg?style=flat-square)](https://codeclimate.com/github/zaklinaczekodu/zkflow-task-sequence)<br>
[![David](https://img.shields.io/david/zaklinaczekodu/zkflow-task-sequence.svg?style=flat-square)](https://david-dm.org/zaklinaczekodu/zkflow-task-sequence)
[![David](https://img.shields.io/david/dev/zaklinaczekodu/zkflow-task-sequence.svg?style=flat-square)](https://david-dm.org/zaklinaczekodu/zkflow-task-sequence)<br>
[![GitHub forks](https://img.shields.io/github/forks/zaklinaczekodu/zkflow-task-sequence.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-sequence)
[![GitHub stars](https://img.shields.io/github/stars/zaklinaczekodu/zkflow-task-sequence.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-sequence)
[![GitHub followers](https://img.shields.io/github/followers/zaklinaczekodu.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-sequence)

Installation
------------

```bash
npm install --save zkflow-task-sequence zkflow gulp
```

Example
-------

ZKflow task sequence is used in [ZKflow for Angular](https://github.com/zaklinaczekodu/zkflow-angular)

Quickstart
----------

Just put this code in gulpfile.js

```javaScript
require('zkflow')({
  'sequence': {
    task: require('zkflow-task-sequence'),
    sequence: ['some-task']
  }
}, require('gulp'), {})
```

Usage
-----

Make sure you understand [how ZKflow works](https://github.com/zaklinaczekodu/zkflow)

### Default options

```javaScript
require('zkflow')({
  'sequence': {
    task: require('zkflow-task-sequence'),
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

Sponsors
--------

[<img alt="Street Team" src="http://zaklinaczekodu.com/_assets/streetteam.svg" width="200">](http://getstreetteam.com)

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)
