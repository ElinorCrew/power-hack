/*global ko, d3*/
var red = d3.rgb('#F07C7C');
var green = d3.rgb('#16A085');
var gray = d3.rgb("#f5f5f5");

ko.bindingHandlers.barChart = {
    init: function(element, valueAccessor) {
        "use strict";

        var  width = parseInt(d3.select(element).style("width"), 10)+1,
        height = parseInt(d3.select(element).style("height"), 10)+1,
        title = ko.unwrap(valueAccessor()[2]),

        svg = d3.select(element)
        .append("svg")
        .attr("width", width)
        .attr("height", height)

        svg.append("rect")
        // .style("stroke-width", 1)
        // .style("stroke", gray.darker())
        .style("fill", gray)
        .attr("width", width)
        .attr("ry", 2)
        .attr("rx", 2)
        .attr("height", height)
        .attr("class", "barBox");

        svg.append("rect")
        .attr("class" , "barRect")
        .attr("ry", 2)
        .attr("rx", 2)
        .attr("width", 0)
        .attr("height", height);


        svg.append("text")
        .attr("class" , "barValue")
        .text('0')
        .style("font-size","45px")
        .attr("fill", gray)
        .attr("x", width * 0.65-30)
        .attr("y", height/2)

        svg.append("text")
        .attr("class" , "barValueUnit")
        .text('kWh')
        .style("font-size","30px")
        .attr("fill", gray)
        .attr("x", width * 0.8)
        .attr("y", height/2);

        svg.append("text")
        .attr("class" , "barTitle")
        .text(title)
        .style("font-size","14")
        .attr("fill", gray)
        .attr("text-anchor", "middle")
        .attr("x", width*0.5)
        .attr("y", height/2-35);

    },
    update: function(element, valueAccessor) {
        "use strict";

        var width = parseInt(d3.select(element).style("width"), 10),
        height = parseInt(d3.select(element).style("height"), 10)+1,
        data = ko.unwrap(valueAccessor()[0]),
        maxValue = ko.unwrap(valueAccessor()[1]),
        d= Math.round(data*10)/10,

        w  = function (value) {
            return parseInt(Math.round(Math.abs(data)*10)/10 * width/maxValue, 10);
        },

        c  = function (value) {
            if (value < 0) {
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
        .attr("x", width * 0.65-30)
        .attr("y", height/2)
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
        .attr("x", width*0.75)
        .attr("y", height/2+35);

        d3.select(element).select("text.barValueUnit")
        .attr("fill", c(data).darker())
        .attr("x", width * 0.8)
        .attr("y", height/2);
    }
};
