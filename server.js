/*jslint node: true, nomen: true, unparam: true, es5: true */

'use strict';
var express = require('express'),
url = require('url'),
_ = require('underscore'),

JsonProvider = require('./json-provider').JsonProvider,
provider = new JsonProvider(),

port = process.env.PORT || 1704,
enviroment = process.env.NODE_ENV || 'local',

app = express();

/////////////////////////////////
// General express server config

app.configure(function() {
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.cookieParser());

    app.use(express.static(__dirname + '/node_modules/underscore'));
    app.use(express.static(__dirname + '/public'));

    app.use(app.router);
});

// Serves initial html page
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/splash.html');
});

app.get('/main', function (req, res) {
    res.sendfile(__dirname + '/public/main/main.html');
});

app.get('/highscore', function (req, res) {
    res.sendfile(__dirname + '/public/highscore/highscore.html');
});

app.get('/achievements', function (req, res) {
    res.sendfile(__dirname + '/public/achievements/achievements.html');
});

app.get('/demo', function (req, res) {
    res.sendfile(__dirname + '/public/demo.html');
});


// Serves test JSON of meter readings
app.get('/json', function (req, res) {
    // Example of how to a parse url querystring
    // var q = url.parse(req.url, true).query;
    res.json(provider.meterReadings());
});

app.get('/json/february', function (req, res) {
    res.json(provider.februaryData());
});

app.get('/json/achievements', function (req, res) {
    res.json(provider.achievementData());
});

app.get('/json/highscore', function (req, res) {
    res.json(provider.highscore());
});

// Start server on given port
app.listen(port);
console.log('po\\/\\/er|-|ack started at http://localhost:' + port + '/');

