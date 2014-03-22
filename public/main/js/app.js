/*global ko, $*/

var PH = this.PH || {};

(function () {
    "use strict";
    var mainViewModel;

    $.get("/json/thisWeek", function (data) {
        mainViewModel = new PH.mainViewModel(data);
        ko.applyBindings(mainViewModel);
    });
}());