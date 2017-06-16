'use strict';

$(document).ready(function(){
    //全屏滚动效果
    $('#fullpage').fullpage({
        anchors: ['home','sponsor','about'],
        navigation: true,
        navigationPosition: 'right',
        loopBottom: true,
        responsiveWidth: 768,
        afterLoad: function(anchorLink,index){
            activeLink($('#header-nav').children().eq(index-1));
        }
    });

    //小屏幕下显示隐藏菜单
    $('#header-menu').click(function(){
        $('#header-nav').toggleClass('show');
    });

    //点击导航显示选中效果
    $('#header-nav').delegate('a','click',function(){
        activeLink($(this));
    });

    //激活导航栏链接
    function activeLink(ele){
        ele.siblings('a').removeClass('active');
        ele.addClass('active');
    }
});
