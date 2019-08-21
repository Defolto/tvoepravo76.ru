s = 1
function anim(){
    if(s != 5){
        $(`.col-md-2:nth-child(${s})`).addClass('heartBeat');
        s++;
    }
    else{
        return;
    }
    setTimeout(anim, 700);
}
anim();