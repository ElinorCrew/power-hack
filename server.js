/*jslint node: true, nomen: true, unparam: true, es5: true */

'use strict';
var express = require('express'),
    url = require('url'),
    _ = require('underscore'),
    JsonProvider = require('./json-provider').JsonProvider,
    // ApiDataProvider = require('./api-data-provider').ApiDataProvider,
    // apiProvider = new ApiDataProvider(),
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

    app.use(express.static(__dirname + '/node_modules'));
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

app.get('/api', function (req, res) {
    res.sendfile(__dirname + '/public/api.html');
});

// Serves test JSON of meter readings
app.get('/json/mainViewData', function (req, res) {
    res.json(provider.mainViewData());
});

app.get('/json/lastWeek', function (req, res) {
    res.json(provider.lastWeek());
});

app.get('/json/thisWeek', function (req, res) {
    res.json(provider.thisWeek());
});

app.get('/json/lastWeekAwg', function (req, res) {
    res.json(provider.lastWeekAwg());
});

app.get('/json/thisWeekAwg', function (req, res) {
    res.json(provider.thisWeekAwg());
});

app.get('/json/thisGroupAwg', function (req, res) {
    res.json(provider.thisGroupAwg());
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
console.log('Updating cashe...');