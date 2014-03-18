/*jslint node: true, nomen: true, es5: true*/

////////////////////////////////////////////////////
// Utility functions for working with meter readings

'use strict';
var MeterUtil = function () {
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
};

exports.MeterUtil = MeterUtil;