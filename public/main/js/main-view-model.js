/*jslint nomen: true */
/*global ko, setInterval,  _*/

var PH = this.PH || {};

(function (namespace) {
    "use strict";
    namespace.mainViewModel = function(data) {
        var self = this;

        self.jsonData = ko.observableArray(data);

        self.maxJsonData = ko.computed(function() {
            return d3.max(self.jsonData(), function (d) {return d.val});
        }, self);

        self.scaleBarData = function (value) {
            return value * 2 / self.maxJsonData();
        }

        self.averageGroupData = ko.computed(function() {
            return 4
        }, self);
        self.myCurrentGroupData = ko.computed(function() {
            return self.averageGroupData()-self.jsonData()[self.jsonData().length-1].val;
        }, self);
        self.myAverageCurrentPowerData = ko.observable(2);

        self.myCurrentPowerData = ko.computed(function() {
            console.log(self.jsonData()[self.jsonData().length-2].val);
            return self.myAverageCurrentPowerData()-self.jsonData()[self.jsonData().length-2].val;
        }, self);
    }
}(PH));

