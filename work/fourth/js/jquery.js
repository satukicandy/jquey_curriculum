$(function() {
    $('.menu__list__childlist').hide();
    $('.menu__list li').hover(function () {
        $(this).find('ul:not(:animated)').slideDown();
    },function() {
        $(this).find('ul').slideUp();
    });
});