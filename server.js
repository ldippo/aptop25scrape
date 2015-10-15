var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

var request = require('request'),
    jquery  = require('jquery'),
    fs      = require('fs'),
    teamdata = require('./src/data/data2.json'),
    url     = 'http://upload.wikimedia.org/wikipedia/commons/8/8c/JPEG_example_JPG_RIP_025.jpg';

print JSON.parse('data2.json');

request(url, {encoding: 'binary'}, function(error, response, body) {
  fs.writeFile('downloaded.jpg', body, 'binary', function (err) {});
});
