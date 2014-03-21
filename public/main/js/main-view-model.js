/*jslint nomen: true */
/*global ko, setInterval, console, _*/

var PH = this.PH || {};

(function (namespace) {
    "use strict";
    namespace.mainViewModel = function(data) {
        var self = this, i;

        self.readingType = function (readingType) {
            var values = readingType.ref.split('.'),
                attributes = [
                    'TimeAttribute', 'DataQualifier', 'AccumlationBehaviour', 'FlowDirection',
                    'UomCategorySubclass', 'UomCategoryIndex', 'MeasurementCategory', 'Enumeration',
                    'Phase', 'metricMultiplier', 'UnitOfMeasure'
                ],
                json = {},
                i;

            for (i = 0; i < attributes.length; i += 1) {
                json[attributes[i]] = parseInt(values[i], 10);
            }

            return json;
        };

        self.wattHours = function (meterReading) {
            var value = meterReading.value,
                readingType = self.readingType(meterReading.readingType);

            if (readingType.metricMultiplier === 3) {
                return value * 1000;
            }

            return value;
        };

        self.meterReadings = _.map(data.meterReadings[0].meterReading.readings, function (meterReading) {
            return {
                date: Date.parse(meterReading.timeStamp),
                val: self.wattHours(meterReading) / 1000
            };
        });

        self.jsonData = ko.observableArray();

        for (i = 1; i < self.meterReadings.length; i += 1) {
            self.jsonData.push({
                date: self.meterReadings[i].date,
                val: self.meterReadings[i].val - self.meterReadings[i - 1].val
            });
        }

        self.myCurrentAverageData = ko.observable(1);

        setInterval(function () {
            self.myCurrentAverageData(Math.random() * 2);
        }, 3333);
        self.myCurrentPowerData = ko.observable(1);

        setInterval(function () {
            self.myCurrentPowerData(Math.random() * 2);
        }, 3333);
    };
}(PH));
