/*jslint node: true*/

var ApiDataProvider = function () {
    'use strict';
    var self = this,
        request = require('request'),
        cheerio = require('cheerio'),
        auth = 'https://c94fe65c88c2431ab985c04d96bd37c1:4e2bd4857f65467f8a1137cbf685211d@',
        rootUri = 'api.demosteinkjer.no';

    request.get(auth + rootUri, function(err, response) {
        if (err) {
            console.log(err);
            return;
        }

        var $ = cheerio.load(response.body),
            meterUrl = $('form').attr('name', 'meterQuery').attr('action').replace('https://', auth) + '?meterKey=0024ec929321472ca0d71e0ec739d090';

        request.get(meterUrl, function (err, response) {
            if (err) {
                console.log(err);
                return;
            }

            var $ = cheerio.load(response.body),
                meterUrl = $('form').attr('name', 'meterReadingOrder').attr('action').replace('https://', auth);

            request.post({
                headers: {'content-type': 'application/x-www-form-urlencoded'},
                url: 'https://c94fe65c88c2431ab985c04d96bd37c1:4e2bd4857f65467f8a1137cbf685211d@api.demosteinkjer.no/meters/0024ec929321472ca0d71e0ec739d090',
                body: 'dateTo=2014-01-02&dateFrom=2014-01-01&intervalType=Hour&seriesType=ActivePlus'
            }, function (err, response) {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log(response.headers.location);
                var options = {
                        headers: {
                            'Accept': 'application/json',
                            'Accept-Encoding': 'gzip, deflate, compress'
                        },
                        url: response.headers.location.replace('https://', auth)
                    },
                    callback =  function(err, response) {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        if (response.statusCode === 202) {
                            request.get(options, callback);
                        } else {
                            console.log(response.body);
                        }
                    };
                request.get(options, callback);
            });
        });
    });
};

exports.ApiDataProvider = ApiDataProvider;

// ApiDataProvider = require('./api-data-provider').ApiDataProvider,
var apiProvider = new ApiDataProvider();