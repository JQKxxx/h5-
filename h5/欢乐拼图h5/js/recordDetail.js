$('.record-box').hide();
$('.more-box').hide();
$('.bottom-text').hide();
$('.middle-1').hide();
$('.cha-btn').hide();
$('.big-btn-container').show();
$('.pic-box').hide();
$('.chips-overlay .chip').hide();
$('.poster-box').hide();

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

// 难度确定



var inputval;
$("#demo1").bind('input porpertychange', function() {
    if ($('#demo1').val().length == 6) {
        inputval = null;
    } else {
        if ($('#demo1').val().length == 8) {
            inputval = JSON.stringify($('#demo1').val()).substring(4, 7);
        } else {
            inputval = JSON.stringify($('#demo1').val()).substring(4, 6);

        }
    }
    sessionStorage.setItem('start_time_end', inputval);
    $('.fixed-width-end').text(inputval);

});







//弹窗js
//    点击开始出现弹窗
$('.chips-overlay').hide();
$('.challenge-button').hide();
$('.elapse-time').hide();
$('.shi-box').hide();
$('.puzzle-bottom-container').hide();
$('.end_time').show();
// console.log(inputv);
var i = 0;
var e = $('.fixed-width').text();
var e_start_time = sessionStorage.getItem('start_time');
var e_start_time_end = sessionStorage.getItem('start_time_end');

if (e_start_time_end == 'null') {
    $('.end_time').hide();
}
sessionStorage.setItem('start_time', 0);

$('.big-btn-container').click(function() {
        showWindow();
    })
    //      点击开始
function showWindow() {


    $('.puzzle-pane').show();
    $('.chips-overlay .chip').show();
    $('.elapse-time').show();
    $('.puzzle-bottom-container').show();
    $('.puzzle-tip').show();
    $('.recordDetail ').hide();
    timeJ();
    timeE();
    cuchu();
    shuchu();
    sortAll();


}
//     点击隐藏弹窗
function hideWindow() {
    console.log(2);
    $('.puzzle-pane').hide();
    $('.elapse-time').hide();
    $('.puzzle-bottom-container').hide();
    $('.challenge-button').hide();
    $('.shi-box').hide();
    $('.recordDetail ').show();
    $('.chips-container').css({
        opacity: '1'
    });
    $('.fixed-width').text(e_start_time);
    $('.fixed-width-end').text(e_start_time_end);
    clearInterval(t1);
    clearInterval(t2);

}
$('.puzzle-bottom-button.close-puzzle-button').click(function() {
    hideWindow();

});

var t1;
var timeJ = function() {
    i = 0;
    var J = setInterval(() => {
        i++;
        $('.fixed-width').text(i);
        if (i >= e_start_time_end) {
            clearInterval(J);
            $('.chips-container').css({
                opacity: '0.2'
            });
            $('.puzzle-tip').hide();
            $('.challenge-button').show();
            $('.shi-box').show();
            $('.recordDetail ').hide();
        }
    }, 1000)
    t1 = J;
};
var t2;
var timeE = function() {
    t = sessionStorage.getItem('start_time_end');
    var E = setInterval(() => {
        t--;
        $('.fixed-width-end').text(t);
        if (t <= 0) {
            clearInterval(E);
        }
    }, 1000)
    t2 = E;
}

// 9张图 原数组

var oldArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var ImgArr = new Array(9);

function cuchu() {
    ImgArr[0] = '<div class="chip" data-index="0"><img   src="./images/common/ex1.jpg" /><div class="chip_mask"></div></div>';
    ImgArr[1] = '<div class="chip" data-index="1"><img   src="./images/common/ex2.jpg" /><div class="chip_mask"></div></div>';
    ImgArr[2] = '<div class="chip" data-index="2"><img  src="./images/common/ex3.jpg" /><div class="chip_mask"></div></div>';
    ImgArr[3] = '<div class="chip" data-index="3"><img  src="./images/common/ex4.jpg" /><div class="chip_mask"></div></div>';
    ImgArr[4] = '<div class="chip" data-index="4"><img  src="./images/common/ex5.jpg" /><div class="chip_mask"></div></div>';
    ImgArr[5] = '<div class="chip" data-index="5"><img  src="./images/common/ex6.jpg" /><div class="chip_mask"></div></div>';
    ImgArr[6] = '<div class="chip" data-index="6"><img  src="./images/common/ex7.jpg" /><div class="chip_mask"></div></div>';
    ImgArr[7] = '<div class="chip" data-index="7"><img src="./images/common/ex8.jpg" /><div class="chip_mask"></div></div>';
    ImgArr[8] = '<div class="chip" data-index="8"><img   src="./images/common/ex9.jpg" /><div class="chip_mask"></div></div>';
}

function shuchu() {

    for (var i = 0; i <= 8; i++) {
        var str = str + ImgArr[i];
    }

    $('.Imgbox').html(str);
}
//乱序
function sortAll() {
    for (let i = 1; i < ImgArr.length; i++) {
        const random = Math.floor(Math.random() * (i + 1));
        [ImgArr[i], ImgArr[random]] = [ImgArr[random], ImgArr[i]];
    }
    $('.Imgbox').empty();
    for (var i = 0; i <= 8; i++) {
        $('.Imgbox').append(ImgArr[i]);
    }
}
//拼图完成标志
// $('.poster-box').show();

//点击交换位置

$(document).on('click', '.chip', function() {

        if ($('.chip').hasClass('active')) {
            var a = sessionStorage.getItem('first_img');
            var b = $(this);
            var b_prev_index = $(this).prev().data('index');
            // sessionStorage.setItem('b_prev_index',b_prev_index);
            var b_prev_prev_index = $(this).prev().prev().data('index');
            var a_prev_index = sessionStorage.getItem('first_prev_index');
            var a_next_index = sessionStorage.getItem('first_next_index');

            if (b.data('index') == a_next_index) {
                if (!b_prev_prev_index) {
                    console.log(111111);
                    var a_index = sessionStorage.getItem('a_index');
                    $(this).after(a);
                    // $('div[data-index='+a_index+']').remove();
                    $('.Imgbox').children().first().remove();
                } else {
                    console.log(11);
                    console.log(a_prev_index);
                    console.log(b_prev_index);
                    sessionStorage.setItem('end_img', b.prop("outerHTML"));
                    $('div[data-index=' + a_prev_index + ']').after(b);
                    $('.Imgbox .chip').removeClass('active');
                    $('.chip_mask').css({
                        backgroundColor: 'rgba(0,0,0,0)'
                    });
                }
            } else if (b.data('index') == a_prev_index) {
                console.log(22);
                if (b_prev_index == undefined) {

                    $('.Imgbox').prepend(a);
                    $('div[data-index=' + a_prev_index + ']').next().remove();
                } else {
                    $('div[data-index=' + b_prev_index + ']').after(a);
                    sessionStorage.setItem('end_img', b.prop("outerHTML"));
                    $('div[data-index=' + a_prev_index + ']').next().remove();
                    $('.Imgbox .chip').removeClass('active');
                    $('.chip_mask').css({
                        backgroundColor: 'rgba(0,0,0,0)'
                    });
                }
            } else if (a_prev_index == b_prev_index) {
                console.log(33);
                $('.Imgbox .chip').removeClass('active');
                $('.chip_mask').css({
                    backgroundColor: 'rgba(0,0,0,0)'
                });
            } else {


                if (a_prev_index == 'undefined' && b_prev_prev_index) {
                    console.log(1);
                    console.log(b);
                    $('div[data-index=' + sessionStorage.getItem('a_index') + ']').before(b);
                    $('div[data-index=' + b_prev_index + ']').after(a);
                    $('.Imgbox .active').remove();
                } else {
                    if (b_prev_index == undefined) {
                        $('.Imgbox').prepend(a);
                        $('div[data-index=' + a_prev_index + ']').after(b);
                        $('.Imgbox .active').remove();
                    } else {

                        $('div[data-index=' + a_prev_index + ']').after(b);
                        $('div[data-index=' + a_prev_index + ']').next().next().remove();

                        console.log(44);
                        $('div[data-index=' + b_prev_index + ']').after(a);
                        sessionStorage.setItem('end_img', b.prop("outerHTML"));
                        $('.Imgbox .chip').removeClass('active');
                        $('.chip_mask').css({
                            backgroundColor: 'rgba(0,0,0,0)'
                        });
                    }
                }


            }
            // sessionStorage.clear();
        } else {
            var a = $(this);
            var a_prev_index = $(this).prev().data('index');
            var a_next_index = $(this).next().data('index');
            var a_index = $(this).data('index');
            if (a_prev_index == undefined) {

            }
            sessionStorage.setItem('first_prev_index', a_prev_index);
            sessionStorage.setItem('first_next_index', a_next_index);
            sessionStorage.setItem('a_index', a_index);
            sessionStorage.setItem('first_img', a.prop("outerHTML"));
            $(this).siblings().removeClass('active');
            $(this).siblings().children('.chip_mask').css({
                backgroundColor: 'rgba(0,0,0,0)'
            })
            $(this).addClass('active');
            $(this).children('.chip_mask').css({
                backgroundColor: 'rgba(0,0,0,0.6)'
            })
        }
        var arr = [];
        $('.chip').each(function() {
            arr.push($(this).data('index'))
        })
        console.log(arr);
        if (oldArr.toString() == arr.toString()) {
            $('.poster-box').show();
            hideWindow();
        }
    })
    // 再试一次
$('.try-again-button').click(function() {
        hideWindow();
        setTimeout(() => {
            showWindow();
        }, 500)
    })
    // 拼图完成关闭

$('.refresh_img').click(function() {
    $('.poster-box').hide();
})