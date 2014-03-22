/*jslint nomen: true */
/*global ko, setInterval, console, _*/

var PH = this.PH || {};

(function (namespace) {
    "use strict";
    namespace.achievementViewModel = function(data) {
        var self = this;

        //console.error(data.achievements[0].name); // = "Earth Hour"
        self.jsonData = data.achievements;

        // set correct image path for images.
        for(var i in self.jsonData) {
            // set image path
            self.jsonData[i].img = "style/images/" + self.jsonData[i].img + ".png";

            // set rel, enables overlay
            self.jsonData[i].rel = "" + self.jsonData[i].id;
        }

    };
}(PH));
