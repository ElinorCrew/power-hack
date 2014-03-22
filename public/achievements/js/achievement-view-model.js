/*jslint nomen: true */
/*global ko, setInterval, console, _*/

var PH = this.PH || {};

(function (namespace) {
    "use strict";
    namespace.achievementViewModel = function(data) {
        var self = this;

        self.jsonData = ko.observable(_.map(data.meterReadings[0].meterReading.readings,
            function (meterReading) {
            return {
                date: Date.parse(meterReading.timeStamp),
                val: self.wattHours(meterReading) / 1000
            };
        }));

        alert("data");

    };
}(PH));
