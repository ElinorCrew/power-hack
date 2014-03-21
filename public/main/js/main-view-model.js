/*global ko, setInterval, console*/

var PH = this.PH || {};

(function (namespace) {
    "use strict";
    namespace.mainViewModel = function(data) {
        var self = this;

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

        self.jsonData = data;

        console.log(self.jsonData);

        self.myCurrentPowerData = ko.observable(37);

        setInterval(function () {
            self.myCurrentPowerData(Math.random() * 100);
        }, 3333);
    };
}(PH));
