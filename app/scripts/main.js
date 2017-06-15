'use strict';

$(document).ready(function(){
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        loopBottom: true,
        responsiveWidth: 768
    });

    $('#header-menu').click(function(){
        $('#header-nav').toggleClass('show');
    });
});
