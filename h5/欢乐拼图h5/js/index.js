$('.chose-bottom .image-box').click(function (e) {
    $(this).addClass('select').siblings().removeClass('select');
})

$('.options-list .option-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
})
$('#moreGame').click(function () {
    $('.more-game-area').show();
})
$('.more-game-area .close-btn').click(function () {
    $(this).parents('.more-game-area').hide();
})

// console.log($('input[type=digit]').val());
// if($('input[type=digit]').val()!=''&&$('input[type=number]').val()!=''){
//     $('.pay-button-container .pay-button').removeClass(disabled-pay);
// }
$(function() {
    $("input[type=digit],input[type=number]").bind('input propertychange', function() {
        var a = $("input[type=digit]").val();
        var b = $("input[type=number]").val();
        if(a!=''&&b!=''){
            $('.pay-button-container .pay-button').removeClass('disabled-pay');
        }else {
            $('.pay-button-container .pay-button').addClass('disabled-pay');
        }
    })
    let src=sessionStorage.getItem('src');
if(src!=null&&src!=''){
    $('.chose-bottom .image-box:last').siblings().removeClass('select');
    $('.chose-bottom .image-box:last').addClass('select').children().attr('src',src);
}
})

$('.msg-r .how-to-btn').click(function () {
    $('.guide-container').show();
})

$('#toggleShowGuide').click(function () {
    $('.guide-container').hide();
})

$('.pay-button-container .pay-button').click(function () {
    if(!$(this).hasClass('disabled-pay')){
        location.href='./poster.html';
    }
})

