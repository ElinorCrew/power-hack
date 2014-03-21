/*global ko, setInterval*/

var PH = this.PH || {};

(function (namespace) {
	"use strict";
	namespace.mainViewModel = function() {
		var self = this,

		updateMyCurrentPowerData = function () {
			return self.myCurrentPowerData(Math.random() * 100);
        };
        self.myCurrentPowerData = ko.observable(37);
        setInterval(function () {
            self.myCurrentPowerData(Math.random() * 100);
        }, 3333);
    };
}(PH));
