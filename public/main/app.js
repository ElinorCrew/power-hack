/*global ko*/

var PH = this.PH || {};

(function () {
    "use strict";
    var mainViewModel = new PH.mainViewModel();

    ko.applyBindings(mainViewModel);
}());