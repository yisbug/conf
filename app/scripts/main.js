'use strict';

$(document).ready(function(){
    //全屏滚动效果
    $('#fullpage').fullpage({
        anchors: ['home','sponsor','about'],
        navigation: true,
        navigationPosition: 'right',
        loopBottom: true,
        responsiveWidth: 768
    });

    //小屏幕下显示隐藏菜单
    $('#header-menu').click(function(){
        $('#header-nav').toggleClass('show');
    });

    //点击导航显示选中效果
    $('#header-nav').delegate('a','click',function(){
        $(this).siblings('a').removeClass('active');
        $(this).addClass('active');
    });
});
