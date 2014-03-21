/*jslint nomen: true */
/*global ko, setInterval, console, _*/

var PH = this.PH || {};

(function (namespace) {
    "use strict";
    namespace.highscoreViewModel = function(data) {
        var self = this;

        self.test = data;

        console.log(self.test);
    };
}(PH));
