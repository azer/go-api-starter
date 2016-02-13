"use strict"

var path = require("path");
var Starter = require("kik-starter");

var folder = path.join(__dirname, 'files');
var form = [
  { key: 'packageName', title: 'Go package name?', default: '{kik:variableName}' },
  { key: 'static', title: 'Any static file/folder to serve?', desc: 'e.g public, / => ./public' }
];

var render = [
  "README.md",
  "api.go",
  "Makefile",
  "src/_package_/_main_.go"
];

class GoAPIStarter extends Starter {
  constructor(project) {
    super(project);

    this.name = 'go-api';
    this.project = project;
    this.folder = folder;
    this.form = form;
    this.commands = [
      'action',
      'reducer',
      'component',
      'container',
      'route',
      'async-store'
    ];
  }

  start(callback) {
    var rename = {
      'src/_package_/_main_.go': 'src/_package_/{kik:slug}.go',
      'src/_package_': 'src/{kik:slug}'
    };

    this.setStaticEndpoints();

    this.serial()
      .run(this.copy)
      .then(this.render, [render])
      .then(this.rename, [rename])
      .done(callback);
  }

  setStaticEndpoints () {
    this.context.rootEndpoint = '/';
    this.context.staticEndpoint = '';

    var answer = this.context.static;

    if (!answer || !answer.length) return;

    var parts = answer.split('=>').map(function (el) { return el.trim(); });
    var uri = parts[0].trim();
    var folder = (parts[1] || parts[0]).trim();

    this.context.staticEndpoint = '\n	api.Static("' + uri + '", "' + folder + '")';

    if (uri == "/") {
      this.context.rootEndpoint = "/api";
    }
  }
}

module.exports = GoAPIStarter;
