let wight = window.innerWidth;
if (wight < 767) {
    $('#darkfon').addClass('darkfon');
    $('.textFon').css({'color': '#d4d4d4',
    'font-size': '25px',
    'font-weight': '600'});
    $('.textFon > span').css({'color': '#ffffff',
    'font-weight': '700'});
}