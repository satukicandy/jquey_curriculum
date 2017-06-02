$(function() {
    $(document).on('click','#modal-showbtn',function() {
        $('#modal').fadeIn();
    })
    $(document).on('click','#modalclose',function() {
        $('#modal').fadeOut();
    })
});