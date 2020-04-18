$('.content-container-q').hide();
$('.content-container').show();
$('.navbar-item').click(function() {
    $('.navbar-item-q').removeClass('active');
    $(this).addClass('active');
    $('.content-container-q').hide();
    $('.content-container').fadeIn();
    // $('.content-container-q').fadeOut();
    // setTimeout(function() {
    //     $('.content-container').fadeIn();
    // }, 500);
})
$('.navbar-item-q').click(function() {
    // $('.content-container-q').
    $('.navbar-item').removeClass('active');
    $(this).addClass('active');
    $('.content-container').hide();
    $('.content-container-q').fadeIn();
    // setTimeout(function() {
    //
    // }, 500);
})