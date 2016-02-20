'use strict';

var assign = require('lodash.assign');

function getSequenceTask(options, gulp, mode) {

  var runSequence = require('run-sequence').use(gulp);

  function sequenceTask(next) {
    assign(mode, options.mode);
    runSequence.apply(null, options.sequence.concat([next]));
  }

  return sequenceTask;

}

module.exports = {
  getTask: getSequenceTask,
  defaultOptions: {
    sequence: []
  }
};
