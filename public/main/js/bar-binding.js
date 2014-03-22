/*global ko, d3*/
var red = d3.rgb('#F07C7C');
var green = d3.rgb('#d6e9c6');
var gray = d3.rgb("#f5f5f5");

ko.bindingHandlers.barChart = {
    init: function(element, valueAccessor) {
        "use strict";

        var  width = parseInt(d3.select(element).style("width"), 10),
        height = parseInt(d3.select(element).style("height"), 10),
        title = ko.unwrap(valueAccessor()[1]),

        svg = d3.select(element)
        .append("svg")
        .attr("width", width)
        .attr("height", height)

        svg.append("rect")
        .style("stroke-width", 1)
        .style("stroke", gray.darker())
        .style("fill", gray)
        .attr("width", width)
        .attr("ry", 10)
        .attr("height", height)
        .attr("class", "barBox");


        svg.append("rect")
        .attr("class" , "barRect")
        .attr("ry", 10)
        .attr("width", 0)
        .attr("height", height);

        svg.append("text")
        .attr("class" , "barValue")
        .text('0')
        .style("font-size","45px")
        .attr("fill", gray)
        .attr("x", width * 0.75)
        .attr("y", height/2.5);

        svg.append("text")
        .attr("class" , "barTitle")
        .text(title)
        .style("font-size","35px")
        .attr("fill", gray)
        .attr("text-anchor", "middle")
        .attr("x", width*0.4)
        .attr("y", height*6/7);

    },
    update: function(element, valueAccessor) {
        "use strict";

        var width = parseInt(d3.select(element).style("width"), 10),
        height = parseInt(d3.select(element).style("height"), 10),
        data = ko.unwrap(valueAccessor()[0]),
        d= Math.round(Math.abs(1-data)*10)/10,

        w  = function (value) {
            return parseInt(d * width, 10);
        },

        c  = function (value) {
            if (value <= 1) {
                return red;
            };
            return green;
        };

        d3.select(element).select("rect.barRect")
        .transition()
        .duration(750)
        .attr("width", w(data))
        .style('fill', c(data))

        d3.select(element).select("rect.barBox")
        .transition()
        .duration(750)
        .style('fill', c(data).brighter())

        d3.select(element).select("text.barValue")
        .transition()
        .duration(750)
        .attr("fill", c(data).darker())
        .attr("x", width * 0.75)
        .attr("y", height/2.5)
        .tween("text", function() {
            var i = d3.interpolate(this.textContent, d),
            prec = (d + "").split("."),
            round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

            return function(t) {
                this.textContent = Math.round(i(t) * round) / round;
            };
        });

        d3.select(element).select("text.barTitle")
        .attr("fill", c(data).darker())
        .attr("x", width*0.4)
        .attr("y", height*6/7);
    }
};
