/**
 * Created by kiro on 21/03/14.
 */

function toggleVisibility(inn) {
    var ele = document.getElementById(inn.getAttribute("rel"));
    var overlay = document.getElementById('overlay');
    overlay.style.opacity = .8;
    if(ele.style.display == "block") {
        ele.style.display = "none";
        overlay.style.display = "none";
    }
    else {
        ele.style.display = "block";
        overlay.style.display = "block";
    }
}

$(document).keyup(function (e) {
    var elements = document.getElementsByClassName("simple_overlay")
    var overlay = document.getElementById('overlay');
    if (e.keyCode == 27) {
        overlay.style.display = "none";
        for(var i in elements) {
            elements[i].style.display = "none";
        }
    }

});