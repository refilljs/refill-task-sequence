'use strict';

function getSequenceTask(options, gulp, mode) {

  var runSequence = require('run-sequence').use(gulp);

  function sequenceTask(next) {
    Object.assign(mode, options.mode);
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
