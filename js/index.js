$(function () {
    //banner
    var timer;
    var num=0;
    function rotation() {
       clearInterval(timer);
       timer = setInterval(function () {
           num++;
           if(num>7) {
               num=0;
           }
           $('.banner ul').css('left',-num*1920+'px');
           $('.banner ol li').eq(num).addClass('ban').siblings().removeClass('ban');
       },1500)
    }
    rotation();
    $('.banner').hover(function () {
        //移入
     clearInterval(timer);
    },function () {
        rotation();
    });
    $('.banner ol li').click(function (event) {
        num=$(this).index();
        $('.banner ul').css('left',-num*1920+'px');
        $(this).addClass('ban');
        $(this).siblings().removeClass('ban');
    })
})