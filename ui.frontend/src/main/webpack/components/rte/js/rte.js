var jQuery = require("jquery");

// Wrap bindings in anonymous namespace to prevent collisions
jQuery(function ($) {
    "use strict";
    $(document).ready(function() { 
        $('.simple-rte', this).each(function() {
            if($(this).parents('.card-container').length) {
                $(this).find('.container').removeClass('pb-4 pt-4');
                $(this).find('.container').addClass('p-0 pb-2 pt-2');
            } else {
                $(this).find('.container').removeClass('pb-4 pt-4');
                $(this).find('.container').addClass('pb-2 pt-2');
            }
        });
    });
});