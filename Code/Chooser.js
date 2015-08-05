/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/
/*jslint node: true*/

$(document).ready(function () {
    "use strict";
    
    var menu = document.getElementById("choice"), $button = $("#apply"),
        $input = document.getElementById("input");
    
    $button.click(function () {
        var accept = $input.value;
        
        if (menu.value === "1") {
            $("body").css("background-color", accept);
        } else if (menu.value === "2") {
            $("#bigger").css("background-color", accept);
        } else if (menu.value === "3") {
            $(".content-inner").css("font-family", accept);
        } else if (menu.value === "4") {
            $("#bigbio").css("font-family", accept);
        } else if (menu.value === "5") {
            alert("add drag and drop");
        }
        
    });
});