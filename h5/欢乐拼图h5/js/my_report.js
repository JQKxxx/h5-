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


