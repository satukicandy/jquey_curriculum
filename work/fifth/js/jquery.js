$(function() {
    $('#select_fw').change(function() {
        var selectFwName = $(this).val();
        $('#list_fw').find('li').each(function() {
            var categorydata = $(this).data('category-type');
            $(this).hide();
            if(categorydata === selectFwName) {
                $(this).show();
            } else if(selectFwName === 'all') {
                $('#list_fw li').show();
            }
        });
    });
});