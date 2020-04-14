$('.oneDate .cell').click(function () {
    $(this).css('opacity','0.45').siblings().show();
    $(this).parent().siblings().children('.content').hide();
    $(this).parent().siblings().children('.cell').css('opacity','1');
})