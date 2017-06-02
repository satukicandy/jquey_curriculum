$(function() {
    var flg = 0,
        lastFlg = $('#imageslist').find('li').length - 1;
    $(document).on('click','#slidebtn',function() {
        if($(this).hasClass('is_prev')) {
            flg--;
            if(flg < 0) {
                flg = lastFlg;
            }
        } else {
            flg++;
            if(flg > lastFlg) {
                flg = 0;
            }
        };
        var positionLeft = $('#imageslist').find('li').width() * -flg + 'px';
        $('#imageslist').animate({
            'left': positionLeft
        },500)
        // console.log(positionLeft)
        // console.log(flg)
    });
});