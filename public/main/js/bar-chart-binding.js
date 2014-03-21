/*global ko, d3*/

ko.bindingHandlers.barTimeChart = {
    init: function(element, valueAccessor) {
        "use strict";

        var margin = {top: 20, right: 20, bottom: 30, left: 50},
            elementWidth = parseInt(d3.select(element).style("width"), 10),
            elementHeight = parseInt(d3.select(element).style("height"), 10),
            width = elementWidth - margin.left - margin.right,
            height = elementHeight - margin.top - margin.bottom,

            data = ko.unwrap(valueAccessor()),

            svg = d3.select(element)
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")");

        svg.append("g")
            .attr("class", "y axis");

        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar");
    },
    update: function(element, valueAccessor) {
        "use strict";

        var margin = {top: 20, right: 20, bottom: 30, left: 50},

            elementWidth = parseInt(d3.select(element).style("width"), 10),
            elementHeight = parseInt(d3.select(element).style("height"), 10),

            width = elementWidth - margin.left - margin.right,
            height = elementHeight - margin.top - margin.bottom,
            valuePadding = 10,
            animationDuration = 750,

            data = ko.unwrap(valueAccessor()),

            svg = d3.select(element).select("svg g"),

            x = d3.scale.ordinal()
                .rangeRoundBands([0, width], 0.1),

            xt = d3.time.scale()
                .range([0, width]),

            y = d3.scale.linear()
                .range([height, 0]),

            xAxis = d3.svg.axis()
                .scale(xt)
                .orient("bottom"),

            yAxis = d3.svg.axis()
                .scale(y)
                .orient("left")
                .ticks(10);

        x.domain(data.map(function(d) { return d.date; }));
        xt.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain([d3.min(data, function(d) { return d.val; }) - valuePadding, d3.max(data, function(d) { return d.val; }) + valuePadding]);

        svg.select("g.x.axis")
            .transition()
            .duration(animationDuration)
            .call(xAxis);

        svg.select("g.y.axis")
            .transition()
            .duration(animationDuration)
            .call(yAxis);

        svg.selectAll("rect.bar")
            .data(data)
            .transition()
            .duration(animationDuration)
            .attr("x", function(d) { return x(d.date); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.val); })
            .attr("height", function(d) { return height - y(d.val); });
    }
};