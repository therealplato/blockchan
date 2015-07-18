var path = require('path');
var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var reporters = require('jasmine-reporters');

//jasmine.loadConfigFile(path.join(__dirname, 'spec', 'support', 'jasmine.json'));
var specDir = path.relative(process.cwd(), path.join(__dirname, "spec"));
jasmine.loadConfig({
  spec_dir: specDir,
  spec_files: [
    "*.js"
  ],
  helpers:[
    //"helpers.js"
  ]
});

var terminalReporter = new reporters.TerminalReporter({
  color: true,
  verbosity: 3,
  //verbosity: 3,
  //showStack: true
})
jasmine.addReporter(terminalReporter);

console.log('Running tests...');
jasmine.execute();
