$(function(){
    $(window).scroll(function () {
    $('.story-container div').each(function () {
    boxNum = $(this).attr("class"),
    scrollTop = $(window).scrollTop();
    areaTop = $(this).offset().top;
    if (scrollTop > areaTop) {
    $('.images-container .' + boxNum).addClass('active');
    } else{
    $('.images-container .' + boxNum).removeClass('active');
    }
    });
    });
    });