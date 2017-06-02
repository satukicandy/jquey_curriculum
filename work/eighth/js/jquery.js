$(function() {
    // pagetop
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $('#pagetop').fadeIn(300);
        } else {
            $('#pagetop').fadeOut(300);
        }
    });
    $(document).on('click','#pagetop',function() {
        $('body').animate({
            scrollTop: 0
        },500);
    });
    // menu
    $('#menu ul li a').click(function() {
        var menuDataId = $(this).data('scroll-place');
        var itemOffsetTop = $('#contents').find('section[data-scroll-place="' + menuDataId + '"]').offset().top,
            bScroll = itemOffsetTop - 30;
        $('body:not(:animated)').animate({
            scrollTop: bScroll
        },500)
    });
});