$(function() {
    $(document).on('click','#menu li',function() {
        var num = $('#menu li').index(this);
        $('#contents li').addClass('is_hidden');
        $('#contents li').eq(num).removeClass('is_hidden');
    });
});