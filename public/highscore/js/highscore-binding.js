/*global ko, d3*/

ko.bindingHandlers.highscoreBar = {
    init: function(element) {
        "use strict";

        var padding = parseInt(d3.select(element).style("padding-right"), 10),
            width = parseInt(d3.select(element).style("width"), 10) - 2 * padding,
            height = parseInt(d3.select(element).style("height"), 10),

            svg = d3.select(element)
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("class", "background");

        svg.append("rect")
            .attr("class", "score")
            .attr("width", 0)
            .attr("height", height);

        svg.append("text")
            .attr("class", "score-text")
            .attr("y", (height / 2) + 4)
            .style("opacity", 0)
            .style("text-anchor", "end");
    },
    update: function(element, valueAccessor) {
        "use strict";

        var svg = d3.select(element),

            padding = parseInt(svg.style("padding-right"), 10),
            width = parseInt(svg.style("width"), 10) - 2 * padding,


            data = ko.unwrap(valueAccessor()),
            x = d3.scale.linear().range([0, width]);

        x.domain([0, data[1].score]);

        svg.select("rect.score")
            .transition()
            .duration(4 * x(data[0]))
            .attr("width", x(data[0]));

        svg.select("text.score-text")
            .attr("x", x(data[0]) - 10)
            .text(data[0])
            .transition()
            .delay(4 * x(data[0]))
            .duration(750)
            .style("opacity", 1);

        if (data[0] === data[1].score) {
            svg.select("rect.score")
                .transition()
                .delay(4 * x(data[0]))
                .duration(750)
                .style("fill", "#ffd700");
        }
    }
};
