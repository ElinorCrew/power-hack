/*global ko*/

var PH = this.PH || {};

(function () {
    "use strict";
    var dataViewModel = new PH.dataViewModel();

    ko.applyBindings(dataViewModel);
}());