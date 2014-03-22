/*jslint nomen: true */
/*global ko, setInterval,  _, d3*/

var PH = this.PH || {};

(function (namespace) {
    "use strict";
    namespace.mainViewModel = function(data) {
        var self = this;

        self.time = 100;

        self.incrementTime = function  () {
            console.log("jsonData"  +self.jsonData().length);
            console.log(self.jsonDataFull().length);
            if (self.time >0) {
                self.time = self.time -1;
                self.jsonData.push(self.jsonDataFull.pop());
            };
        }

        self.jsonDataFull = ko.observableArray(data.thisWeek.slice(data.thisWeek.length-self.time, data.thisWeek.length).reverse());

        self.jsonData = ko.observableArray(data.thisWeek.slice(0, data.thisWeek.length-self.time));


        self.maxJsonData = ko.computed(function() {
            return d3.max(self.jsonData(), function (d) { return d.val; });
        }, self);

        self.scaleBarData = function (value) {
            return value * 2 / self.maxJsonData();
        };


        self.averageGroupData = ko.observable(data.thisGroupAwg);

        self.myCurrentGroupData = ko.computed(function() {
            return self.averageGroupData() - self.jsonData()[self.jsonData().length - 1].val;
        }, self);


        self.myAverageCurrentPowerData = ko.observable(data.lastWeekAwg);

        self.myCurrentPowerData = ko.computed(function() {
            return self.myAverageCurrentPowerData() - self.jsonData()[self.jsonData().length - 2].val;
        }, self);

        self.myScore = ko.computed(function () {
            var score = parseInt(2048 + 128 * self.myCurrentPowerData(), 10);
            return score;
        }, self);

        self.quarterPowerConsumption = ko.computed(function() {
            return Math.round(data.firstQuarter);
        }, self);

        setInterval(function () {
            self.incrementTime();
        }, 5000);
    };
}(PH));

