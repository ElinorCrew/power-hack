/*jslint node: true*/

var ApiDataProvider = function () {
    'use strict';
    var self = this,
        request = require('request'),
        cheerio = require('cheerio'),
        auth = 'https://c94fe65c88c2431ab985c04d96bd37c1:4e2bd4857f65467f8a1137cbf685211d@',
        rootUri = 'api.demosteinkjer.no';

    self.getMeterReadings = function (meterKey, dateFrom, dateTo, intervalType, cb) {
        request.get(auth + rootUri, function(err, response) {
            if (err) { console.log(err); return; }

            var $ = cheerio.load(response.body),
                meterUrl = $('form').attr('name', 'meterQuery').attr('action').replace('https://', auth) + '?meterKey=' + meterKey;

            request.get(meterUrl, function (err, response) {
                if (err) { console.log(err); return; }

                var $ = cheerio.load(response.body),
                    options = {
                        headers: {'content-type': 'application/x-www-form-urlencoded'},
                        url: $('form').attr('name', 'meterReadingOrder').attr('action').replace('https://', auth),
                        body: 'dateTo=' + dateTo + '&dateFrom=' + dateFrom + '&intervalType=' + intervalType + '&seriesType=ActivePlus'
                    };

                request.post(options, function (err, response) {
                    if (err) { console.log(err); return; }

                    var options = {
                            headers: {
                                'Accept': 'application/json',
                                'Accept-Encoding': 'gzip, deflate, compress'
                            },
                            url: response.headers.location.replace('https://', auth)
                        },
                        callback =  function(err, response) {
                            if (err) { console.log(err); return; }
                            if (response.statusCode === 202) {
                                setTimeout(function () { request.get(options, callback); }, 100);
                            } else {
                                cb(JSON.parse(response.body));
                            }
                        };
                    request.get(options, callback);
                });
            });
        });
    };

    self.getDefaultReadings = function(cb) {
        var meterKey = '0024ec929321472ca0d71e0ec739d090',
            dateFrom = '2014-01-01',
            dateTo = '2014-01-02',
            intervalType = 'Hour';

        self.getMeterReadings(meterKey, dateFrom, dateTo, intervalType, cb);
    };
};

exports.ApiDataProvider = ApiDataProvider;