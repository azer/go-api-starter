var Project = require("kik");
var GoAPIStarter = require("./");

var yolo = new Project({
  name: 'yolo-api',
  folder: '/tmp/yolo',
  starters: [GoAPIStarter],
  remote: 'azer/yolo',
  context: {
    github: 'azer'
  }
});

yolo.starters[0].context = {
  packageName: 'yolo',
  'static': './public'
};

yolo.create(function (error) {
  if (error) throw error;
  console.log('done');
});
