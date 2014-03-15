/*jslint node: true, nomen: true, unparam: true, es5: true */

'use strict';
var express = require('express'),
    url = require('url'),
    _ = require('underscore'),

    port = process.env.PORT || 1704,
    enviroment = process.env.NODE_ENV || 'local',

    app = express();

/////////////////////////////////
// General express server config

app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.cookieParser());

    app.use(express.static(__dirname + '/node_modules/underscore'));
    app.use(express.static(__dirname + '/public'));

    app.use(app.router);
});

// Serves initial html page
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

// Serves JSON for specified posts. If no tag or id is specified, an error message is returned.
app.get('/json', function (req, res) {
    //var q = url.parse(req.url, true).query;

    var json = {
        "meterReadings": [
            {
                "meterReading": {
                    "meterAsset": {
                        "mRID": "7350049083690839"
                    },
                    "readings": [
                        {
                            "timeStamp": "2013-06-04T22:00:00.000Z",
                            "value": 29961.598,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-04T23:00:00.000Z",
                            "value": 29961.75,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T00:00:00.000Z",
                            "value": 29962.518,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T01:00:00.000Z",
                            "value": 29962.667,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T02:00:00.000Z",
                            "value": 29962.794,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T03:00:00.000Z",
                            "value": 29962.918,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T04:00:00.000Z",
                            "value": 29963.024,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T05:00:00.000Z",
                            "value": 29963.754,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T06:00:00.000Z",
                            "value": 29964.55,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T07:00:00.000Z",
                            "value": 29964.68,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T08:00:00.000Z",
                            "value": 29965.328,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T09:00:00.000Z",
                            "value": 29965.452,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T10:00:00.000Z",
                            "value": 29965.581,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T11:00:00.000Z",
                            "value": 29966.072,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T12:00:00.000Z",
                            "value": 29966.335,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T13:00:00.000Z",
                            "value": 29966.439,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T14:00:00.000Z",
                            "value": 29966.577,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T15:00:00.000Z",
                            "value": 29967.265,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T16:00:00.000Z",
                            "value": 29967.397,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T17:00:00.000Z",
                            "value": 29967.639,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T18:00:00.000Z",
                            "value": 29967.782,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T19:00:00.000Z",
                            "value": 29968.538,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T20:00:00.000Z",
                            "value": 29969.648,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        },
                        {
                            "timeStamp": "2013-06-05T21:00:00.000Z",
                            "value": 29970.034,
                            "readingType": {
                                "ref": "7.12.3.1.0.12.0.0.0.3.72"
                            }
                        }
                    ],
                    "serviceDeliveryPoint": {
                        "mRID": "1033963.001.1"
                    }
                }
            }
        ]
    };

    res.json(json);
});

// Start server on given port
app.listen(port);
console.log('}|{ started at http://localhost:' + port + '/');