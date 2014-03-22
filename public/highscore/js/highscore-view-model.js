/*jslint nomen: true */
/*global ko, setInterval, console, _*/

var PH = this.PH || {};

(function (namespace) {
    "use strict";
    namespace.highscoreViewModel = function(data) {
        var self = this;

        self.best = _.max(data.friends, function (friend) {
            return friend.score;
        });

        self.friends = ko.observableArray(data.friends);
    };
}(PH));
