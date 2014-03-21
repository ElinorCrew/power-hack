/*global ko, $*/

var PH = this.PH || {};

(function () {
    "use strict";
    var highscoreViewModel;

    $.get("/json/highscore", function (data) {
        highscoreViewModel = new PH.highscoreViewModel(data);
        ko.applyBindings(highscoreViewModel);
    });
}());