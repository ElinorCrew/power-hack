/*global ko, d3*/

ko.bindingHandlers.barChart = {
    init: function(element) {
        "use strict";

        var  width = parseInt(d3.select(element).style("width"), 10),
            height = parseInt(d3.select(element).style("height"), 10),

            svg = d3.select(element)
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("class", "bar");

        svg.append("rect")
            .attr("class" , "barRect")
            .attr("width", 0)
            .attr ("x", width/2)
            .attr("height", height);

    },
    update: function(element, valueAccessor) {
        "use strict";

        var width = parseInt(d3.select(element).style("width"), 10),
            data = ko.unwrap(valueAccessor()),

            w  = function (value) {
                return parseInt((Math.abs(1-value)/2) * width, 10);
            },

            x  = function (value) {
                if (value <= 1) {
                    return width/2-w(value);
                };
                return width/2;
            },
            c  = function (value) {
                if (value <= 1) {
                    return 'red';
                };
                return 'green';
            };

        d3.select(element).select("rect.barRect")
            .transition()
            .duration(750)
            .attr("width", w(data))
            .attr("x", x(data))
            .style('fill', c(data))

    }
};
