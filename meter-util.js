/*jslint node: true, nomen: true, es5: true*/

////////////////////////////////////////////////////
// Utility functions for working with meter readings

'use strict';
var MeterUtil = function () {
    var self = this;

    self.returnHello = function () {
        return 'hello';
    };

    self.wattHours = function (meterReading) {
        return 29961698;
    };
};

exports.MeterUtil = MeterUtil;