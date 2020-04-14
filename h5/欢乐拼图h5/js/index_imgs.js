$('.category-container .category-item').click(function () {
    $(this).addClass('selected-category-item').siblings().removeClass('selected-category-item');
    var id=$(this).data(id);
    // $.ajax({
    //     url:'',
    //     type:'',
    //     success:function (res) {
    //         $('.images-container .images-contents').empty();
    //         //循环push进入到图片库
    //         res.each({
    //
    //         })
    //     }
    // })
})

//点击图片选择图片
$('.images-contents .image-item').click(function () {
    let src=$(this).attr('src');
    sessionStorage.setItem('src',src);
    location.href='./index.html';
})