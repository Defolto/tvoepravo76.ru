var go = true;
let offers = ['Поддержка в суде', 'Помщь в октрытие бизнеса', 'Споры с жкх', "Семейные проблемы", "Юридическая консульация", "Споры с магазинами"];
let number = 0;
let position = 0;
let slovo = offers[number].split('');
let word = '';
let i = 0;
function newOffer(){
	number++;
	if(number >= offers.length){
  	number = 0;
  }
  slovo = offers[number].split('');
}
function clearWord(){
    if(position >= 0){
        word = word.substring(0, position);
    position--;
    jQuery("#slovo").text(word);
}
else{
    word = '';
    position = 0;
    newOffer();
    timer();
    return;
}
setTimeout(clearWord, 50);
}
function tire(){
		if(go){
        jQuery("#tire").text('|');
        go = false;
        i++;
    }
    else{
				jQuery("#tire").text('');
        go = true;
        i++;
    }
    // i - как долго будет после предложения мигать палочка
    if(i == 8){ 
    	jQuery("#tire").text('|');
        i = 0;
        clearWord();
        return;
    }
    setTimeout(tire, 500);
}

function timer() {
    if(position != slovo.length){
    		word += slovo[position];
        position++;
        jQuery("#slovo").text(word);
    }
    else{
        tire();
        return;
    }
    setTimeout(timer, 150);
}  
timer();

let b = 2;
$('.About > div div p').hide();
function site(){
    if(b != 5){
        $(`.About:nth-child(${b}) > div div p`).show().addClass('flipInX');
        b++;
    }
    else{
        return;
    }
    setTimeout(site, 300);
}
setTimeout(site, 500);

c = 1
function media(){
    if(c != 5){
        $(`.m${c}`).addClass('flipInX');
        c++;
    }
    else{
        return;
    }
    setTimeout(media, 350);
}
z = 1
function spectrum(){
    if(z != 5){
        $(`.spectrum:nth-child(${z})`).addClass('zoomInDown');
        z++;
    }
    else{
        return;
    }
    setTimeout(spectrum, 350);
}

var target1 = $('#target1');
var target2 = $('#target2');
var target3 = $('#target3');
var target4 = $('#target4');

var targetPos1 = target1.offset().top;
var winHeight1 = $(window).height();
var scrollToElem1 = targetPos1 - winHeight1;
var targetPos2 = target2.offset().top;
var winHeight2 = $(window).height();
var scrollToElem2 = targetPos2 - winHeight2;
var targetPos3 = target3.offset().top;
var winHeight3 = $(window).height();
var scrollToElem3 = targetPos3 - winHeight3;
var targetPos4 = target4.offset().top;
var winHeight4 = $(window).height();
var scrollToElem4 = targetPos4 - winHeight4;
var flag = true;
var flag1 = true;
$(window).scroll(function(){
    var winScrollTop1 = $(this).scrollTop();
    if(window.innerWidth > 1500){
        if(winScrollTop1 > scrollToElem1){
            $(".left").addClass('fadeInLeft');
            $(".right").addClass('fadeInRight');
        }
    }
    else{
        $(".block").css({'visibility' : 'visible'});
    }
    var winScrollTop2 = $(this).scrollTop();
    if(window.innerWidth > 1500){
        if(winScrollTop2 > scrollToElem2){
            if(flag){
                media();
                flag = !flag;
            }    
        }
    }
    else{
        $(".media").css({'visibility' : 'visible'});
    }
    var winScrollTop3 = $(this).scrollTop();
    if(window.innerWidth > 1500){
        if(winScrollTop3 > scrollToElem3){    
            $(".forma").addClass('fadeInUpBig');
        }
    }
    else{
        $(".forma").css({'visibility' : 'visible'});
    }
    
    var winScrollTop4 = $(this).scrollTop();
    if(window.innerWidth > 1500){
        if(winScrollTop4 > scrollToElem1){
            if(flag1){
                spectrum();
                flag1 = !flag1;
            }  
        }
    }
    else{
        $(".spectrum").css({'visibility' : 'visible'});
    }
});