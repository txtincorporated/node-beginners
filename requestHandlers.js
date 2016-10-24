var exec = require('child_process').exec;

function start() {
  console.log('Request handler "start" has been called.');
  var content = 'empty';

  exec('ls -lah', function(error, stdout, stderr) {
    content = stdout;
  });

  return content;
};

function upload() {
  console.log('Request handler "upload" has been called');
  return 'Hello Upload';
};

exports.start = start;
exports.upload = upload;