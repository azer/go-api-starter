var kik = require('kik');
var api = require("./");

var myproject = kik({
  name: 'yolo-api',
  folder: '/tmp/yolo-api',
  //starters: [{ module: require('./'), subfolder: 'api' }],
  starters:[require('./')],
  remote: 'azer/yolo-api',
  context: {
    github: 'azer'
  }
});

//myproject.starters[0].context.static = '/:public';

myproject.create(function (error) {
  if (error) throw error;
  console.log('done');
});
