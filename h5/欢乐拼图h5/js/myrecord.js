$('.content-container-q').hide();
$('.content-container').show();
$('.navbar-item').click(function() {
    $('.navbar-item-q').removeClass('active');
    $(this).addClass('active');
    $('.content-container-q').fadeOut();
    setTimeout(function() {
        $('.content-container').fadeIn();
    }, 500);
})
$('.navbar-item-q').click(function() {
    $('.navbar-item').removeClass('active');
    $(this).addClass('active');
    $('.content-container').fadeOut();
    setTimeout(function() {
        $('.content-container-q').fadeIn();
    }, 500);
})