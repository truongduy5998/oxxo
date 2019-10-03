jQuery(function ($) {
    "use strict";

    const oxxo = window.oxxo || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/
    oxxo.test = function() {
        console.log('Run');
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        oxxo.test();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('scroll', function() {
    });
    $(window).on('load', function() {
    });
    $(window).on('resize', function() {
    });
});