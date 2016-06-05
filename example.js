var Project = require('hek');
var api = require("./");

var myproject = new Project({
  name: 'yolo-api',
  folder: '/tmp/yolo-api',
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
