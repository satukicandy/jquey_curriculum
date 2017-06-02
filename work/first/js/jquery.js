$(function() {
    // q1
    $('#q1').css('color','red');
    // q2
    $(document).on('click','#q2',function() {
        $(this).css('background-color','cadetblue');
    });
    // q3
    $(document).on('click','#q3',function() {
        $(this).fadeOut(2000);
    });
    // q4
    $(document).on('click','#q4',function() {
        var $btnWrap = $(this).parent();
        $btnWrap.prepend('DOMの前');
        $(this).prepend('DOM中の前');
        $btnWrap.append('DOMの後ろ');
        $(this).append('DOM中の後ろ');
    });
    // q5
    $(document).on('click','#q5',function() {
        $(this).addClass('large');
    });
    // q6
    $(document).on('click','#q6',function() {
        $(this).animate({
            'margin-top': '100px',
            'margin-left': '100px'
        },2000);
    });
    // q7
        $(document).on('click','#q7 li',function() {
            var num = $('#q7 li').index(this);
            console.log(num);
            alert(num);
        });
    // q8
    $('#q8').mouseover(function () {
        $(this).addClass('large');
    }).mouseout(function() {
        $(this).removeClass('large');
    });
    // q9
    $(document).on('click','#q9',function() {
        console.log('jQuery');
    });
    // q10,11
    // var listnum = $()
    $(document).on('click','#q10 li',function() {
        var num = $('#q10 li').index(this);
        $('#q11 li').eq(num).addClass('large');
    });
});