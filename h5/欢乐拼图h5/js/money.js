$('.tips-box').hide();
$('.invalidHint').hide();
if ($('.money-input').val() == '') {
    $('.all-cashback-btn').click(function() {
        $('.invalidHint').show();
        $('.invalidHint').text('提现金额不能低于1元');
    })
    setTimeout(function() {
        $('.invalidHint').hide();
    }, 3000)
    $('.cashback-button').click(function() {
        $('.content-content').text('请输入有效提现金额');
        $('.tips-box').show();
    })
}
$('.money-input').bind("input propertychange", function() {

    if ($('.money-input').val() < 1) {
        $('.all-cashback-btn').click(function() {
            $('.invalidHint').show();
            $('.invalidHint').text('提现金额不能低于1元');
        })
        setTimeout(function() {
            $('.invalidHint').hide();
        }, 3000)
        $('.cashback-button').click(function() {
            $('.content-content').text('提现金额不得小于1元');
            $('.tips-box').show();
            $('.money-input').val() == '';
        })
    }
    if ($('.money-input').val() >= 1) {
        $('.cashback-button').click(function() {
            $('.tips-box').hide();
            window.location.href = 'cashsuccess.html';
        })
    }
});


$('.content-close').click(function() {
    $('.tips-box').hide();
})