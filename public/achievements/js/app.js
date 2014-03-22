/*global ko, $*/

var PH = this.PH || {};

(function () {
    "use strict";
    var achievementViewModel;

    $.get("/json/achievements", function (data) {
        achievementViewModel = new PH.achievementViewModel(data);
        ko.applyBindings(achievementViewModel);
    });

}());