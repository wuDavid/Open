/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/
/*jslint node: true*/

$(document).ready(function () {
    "use strict";
    
    var $open = false, $button = $("#titlebar"), $body = $("#wrapper");
    
    $button.click(function () {
        if (!$open) {
            $body.slideDown("slow");
            $open = true;
        } else {
            $body.slideUp("slow");
            $open = false;
        }
    });
});