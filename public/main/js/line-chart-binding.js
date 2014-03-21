/*global ko, d3*/

ko.bindingHandlers.lineChart = {
    init: function(element) {
        "use strict";

        var margin = {top: 20, right: 20, bottom: 30, left: 50},
            elementWidth = parseInt(d3.select(element).style("width"), 10),
            elementHeight = parseInt(d3.select(element).style("height"), 10),
            width = elementWidth - margin.left - margin.right,
            height = elementHeight - margin.top - margin.bottom,

            svg = d3.select(element).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")");

        svg.append("g")
            .attr("class", "y axis")
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Strømforbruk (kWh)");

        svg.append("path")
            .attr("class", "area data");

        svg.append("line")
            .attr("class", "awgOldData")
            .attr("x1", 0)
            .attr("y1", height)
            .attr("x2", width)
            .attr("y2", height)
            .attr("style", "stroke: #ff7f0e; stroke-width:2")
            .attr("stroke-dasharray", "20,10,5,5,5,10");

        svg.append("line")
            .attr("class", "awgClassData")
            .attr("x1", 0)
            .attr("y1", height)
            .attr("x2", width)
            .attr("y2", height)
            .attr("style", "stroke: #2ca02c; stroke-width:2")
            .attr("stroke-dasharray", "20,10,5,5,5,10");
    },
    update: function(element, valueAccessor) {
        "use strict";

        var margin = {top: 20, right: 20, bottom: 30, left: 50},
            elementWidth = parseInt(d3.select(element).style("width"), 10),
            elementHeight = parseInt(d3.select(element).style("height"), 10),
            width = elementWidth - margin.left - margin.right,
            height = elementHeight - margin.top - margin.bottom,

            animationDuration = 750,

            data = ko.unwrap(valueAccessor()),

            x = d3.time.scale()
                .range([0, width]),

            y = d3.scale.linear()
                .range([height, 0]),

            xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom"),

            yAxis = d3.svg.axis()
                .scale(y)
                .orient("left"),

            area = d3.svg.area()
                .x(function(d) { return x(d.date); })
                .y0(height)
                .y1(function(d) { return y(d.val); }),

            baseline = d3.min(data, function(d) { return d.val; }),

            previousAwerage = 32800,
            classAwerage = 32835,

            flatArea = d3.svg.area()
                .x(function(d) { return x(d.date); })
                .y0(height)
                .y1(function() { return y(baseline); }),

            svg = d3.select(element).select("svg g");


        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain(d3.extent(data, function(d) { return d.val; }));

        svg.select("g.x.axis")
            .transition()
            .duration(animationDuration)
            .call(xAxis);

        svg.select("g.y.axis")
            .transition()
            .duration(animationDuration)
            .call(yAxis);

        svg.select("path.area.data")
            .datum(data)
            .attr("d", flatArea);

        svg.select("path.area.data")
            .datum(data)
            .transition()
            .duration(animationDuration)
            .attr("d", area);

        svg.select("line.awgOldData")
            .transition()
            .duration(animationDuration)
            .attr("y1", y(previousAwerage))
            .attr("y2", y(previousAwerage));

        svg.select("line.awgClassData")
            .transition()
            .duration(animationDuration)
            .attr("y1", y(classAwerage))
            .attr("y2", y(classAwerage));
    }
};
