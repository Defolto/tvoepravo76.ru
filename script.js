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
