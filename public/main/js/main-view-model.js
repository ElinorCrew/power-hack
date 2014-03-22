/*jslint nomen: true */
/*global ko, setInterval,  _*/

var PH = this.PH || {};

(function (namespace) {
    "use strict";
    namespace.mainViewModel = function(data) {
        var self = this;

        self.jsonData = ko.observableArray(data);

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
