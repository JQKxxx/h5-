$('.report_cell img').hide();

$('.report_cell').click(function () {
    if($(this).children('img').css('display')=='block'){
        $(this).children('img').hide();
    }else {
        $(this).children('img').show();
    }

})

$('button[type=primary]').click(function (e) {
    e.preventDefault();
    // $.ajax({
    //     url:'',
    //     type:'',
    //     data:form.data,
    //     success:function () {
    //         $('#mask').show();
    //     }
    // })
    $('#mask').show();
})

$('#mask .content-close').click(function () {
    $('#mask').hide();
    location.href='./my_question.html';
})


