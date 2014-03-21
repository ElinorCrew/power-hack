/*global ko, $*/

var PH = this.PH || {};

(function () {
    "use strict";
    var highscoreViewModel;

    $.get("/json/february", function (data) {
        highscoreViewModel = new PH.highscoreViewModel(data);
        ko.applyBindings(highscoreViewModel);
    });
}());