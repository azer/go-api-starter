var struct = require("new-struct");
var path = require("path");
var Starter = require("kik-starter");
var fs = require("fs");
var filesToRender = require('./to-render.json');

var folder = path.join(__dirname, 'files');
var form = [
  { key: 'packageName', title: 'Go package name?', default: '{kik:variableName}' },
  { key: 'static', title: 'Any static file/folder to serve?', desc: 'e.g public, / => ./public' }
];

var GoAPIStarter = struct(Starter, {
  start: start
});

module.exports = NewGoAPIStarter;

function NewGoAPIStarter (project) {
  return GoAPIStarter({
    name: 'go-api',
    project: project,
    folder: folder,
    form: form,
    context: {
      'rootEndpoint': '/',
      'staticEndpoint': ''
    }
  });
}

function start (starter, callback) {
  var rename = {
    'src/_package_/_main_.go': 'src/_package_/{kik:slug}.go',
    'src/_package_': 'src/{kik:slug}'
  };

  generateStaticEndpoint(starter);

  starter.serially()
    .run(starter.copy, [folder])
    .then(starter.render, [filesToRender])
    .then(starter.rename, [rename])
    .done(callback);
}

function generateStaticEndpoint (starter) {
  var answer = starter.context.static;

  if (!answer || !answer.length) return;

  var parts = answer.split('=>').map(function (el) { return el.trim(); });
  var uri = parts[0].trim();
  var folder = (parts[1] || parts[0]).trim();

  starter.context.staticEndpoint = '\n	api.Static("' + uri + '", "' + folder + '")';

  if (uri == "/") {
    starter.context.rootEndpoint = "/api";
  }
}
