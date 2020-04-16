$('.record-box').hide();
$('.more-box').hide();
$('.bottom-text').hide();
$('.middle').hide();
$('.nan-btn').hide();
$('.big-btn-container').show();
$('.pic-box').hide();
$('.chips-overlay .chip').hide();

function chu() {
    setTimeout(function() {
        $('.bottom-text').fadeIn();
    }, 100);
    setTimeout(function() {
        $('.bottom-text').fadeOut();
    }, 2000);
}

window.setInterval('chu()', 4000);

$('.more').click(function() {
    console.log($('#demo1').val());

    $('.more-box').show();
    $('.more-title').animate({
        right: '0.5rem'
    }, 'slow');
    $('.game-box').animate({
        right: '0'
    }, 'slow');
})
$('.more-box').click(function() {
    $('.more-box').hide();
    $('.more-title').css({
        right: '-1.5rem'
    });
    $('.game-box').css({
        right: '-2rem'
    })
})

$('.cha-btn').click(function() {
    $('.pic-box').show();
    $('.recordDetail').hide();
})
$('.pic-box').click(function() {
    $('.pic-box').hide();
    $('.recordDetail').show();
})
var area1 = new LArea();
area1.init({
    'trigger': '#demo1', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
    'valueTo': '#value1', //选择完毕后id属性输出到该位置
    'keys': {
        id: 'id',
        name: 'name'
    }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
    'type': 1, //数据源类型
    'data': LAreaData //数据源
});



//弹窗js
//    点击开始出现弹窗
$('.chips-overlay').hide();
$('.challenge-button').hide();
$('.elapse-time').hide();
$('.shi-box').hide();
$('.puzzle-bottom-container').hide();
$('.big-btn-container').click(function() {
        $('.puzzle-pane').show();
        $('.chips-overlay .chip').show();
        $('.elapse-time').show();
        $('.puzzle-bottom-container').show();
    })
    //     点击隐藏弹窗
$('.puzzle-bottom-button.close-puzzle-button').click(function() {
    $('.puzzle-pane').hide();
    $('.elapse-time').hide();
    $('.puzzle-bottom-container').hide();
})