function start() {
  console.log('Request handler "start" has been called.');
  return 'Hello Start';
};

function upload() {
  console.log('Request handler "upload" has been called');
  return 'Hello Upload';
};

exports.start = start;
exports.upload = upload;