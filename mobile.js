let wight = window.innerWidth;
if(wight < 600){
    $("#block1").removeClass('px-5');
}
if (wight < 1210) {
    $('.spectrum').removeClass('col-xl-3').addClass('col-md-7');
}
if(wight < 600){
    $('#block2').removeClass('px-5');
    $('#row1').removeClass('px-5');
    $('#row2').removeClass('px-5');
}
if(wight < 1100){
    $('#block3').detach();
    $('#block2-5').removeClass('col-md-7').addClass('col-md-12');
    $('#block2-5 .row .text-center').removeClass('text-center');
    $('.whitefon').removeClass('px-5');
    $('.forma').removeClass('p-4');
}
if (wight < 950) {
    $('#fon > .row').addClass('darkfon');
}
if (wight < 780) {
    $('.right').addClass('text-center').removeClass('px-4');
    $('.left').addClass('text-center').removeClass('px-4');
    $('#padd').removeClass('px-4');
    $('.spectrum').removeClass('m-5').addClass('m-4');
}
