$(function () {
    /*首页下面小白杠*/
    $(".nva_ul li").click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })/*小白杠结束*/

    /*侧栏菜单隐藏与显示*/
    $('silder_btn').click(function () {
       showSlider()
    })
    $('.mask').click(function () {
        hideSlider()
    })
    function showSlider() {
        $('.mask').fadeIn()
        $('.silder').css('right',300)
    }
    function hideSlider() {
        $('.mask').fadeOut()
        $('.silder').css('right',-300)
    }
    /*小标可以在页面下面点击到开始*/
    $(window).scroll(function () {
                if($(window).scrollTop()>100){
                    $('.top').css('display','block')
                }else{
                    $('.top').css('display','none')
                }
    })
    $('.top').click(function () {
        $('body,html').animate({
            scrollTop:0
        },300)

    })/*小标结束*/

})