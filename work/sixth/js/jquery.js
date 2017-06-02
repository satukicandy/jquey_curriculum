$(function() {
    $('#input').bind('keyup',function() {
        // console.log($(this).val().replace(/\s+/g,'').length)
        var maxLength = 30,
            wordLength = $(this).val().replace(/\s+/g,'').length,
            counterLength = maxLength - wordLength;
        if(counterLength < 0) {
            $('#counter').css('color','#f00');
        } else {
            $('#counter').css('color','#999');
        }
        $('#counter').text(counterLength);
    });
});