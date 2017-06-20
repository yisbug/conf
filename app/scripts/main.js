'use strict';

$(document).ready(function(){
    //全屏滚动效果
    $('#fullpage').fullpage({
        anchors: ['home','schedule','lectuer','sponsor','information','about'],
        navigation: true,
        navigationPosition: 'right',
        loopBottom: true,
        afterLoad: function(anchorLink,index){
            activeLink($('#header-nav').children().eq(index-1));
        },
        scrollOverflow: true
    });

    //小屏幕下显示隐藏菜单
    $('#header-menu').click(function(){
        $('#header-nav').toggleClass('show');
    });

    //点击导航显示选中效果
    $('#header-nav').delegate('a','click',function(){
        activeLink($(this));
    });

    /*var scene=$('#scene').get(0);
    var parallax=new Parallax(scene);*/

    //激活导航栏链接
    function activeLink(ele){
        ele.siblings('a').removeClass('active');
        ele.addClass('active');
    }

    $('#place-list').delegate('li','click',function(){
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');

        var target='#'+$(this).data('target');
        $(target).siblings('.place-content').removeClass('active');
        $(target).addClass('active');
    });
});
