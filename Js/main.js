let $ = document;

let btnElem = $.querySelector('.btn');
let modalElem = $.querySelector('.modal');
let divElem = $.querySelector('.container');
let iElem = $.querySelector('#close');

let btnStart = $.querySelector('.btn-start');
let Hour = $.querySelector('.hour');
let minutes =$.querySelector('.minutes');
let seconds =$.querySelector('.seconds');

btnElem.addEventListener('click', function(){

    modalElem.style.display = 'flex';
    divElem.style.filter = 'Blur(5px)';
})

iElem.addEventListener('click', function(){

    modalElem.style.display = 'none';
    divElem.style.filter = 'Blur(0px)';

})


btnStart.addEventListener('click', function(){
    

        let sec = seconds.value;
        let min = minutes.value;
        let hour = Hour.value;


        let timer =  setInterval(function() {

            if(sec == -1){
                min--;
                sec = 59;
            }

            if(min == -1){
                hour--;
                min = 59;
            }

            if(min == 0 && sec == 0 && hour == 0){
                clearInterval(timer);
            }


            if(hour < 10){
                if((hour.length == 1)||(hour.length == undefined)){
                    hour = "0" + hour;
                }
            }

            if(min < 10){
                if((min.length == 1) || (min.length == undefined)){
                    min = "0" + min;
                }
            }

            if(sec < 10){
                if((sec.length == 1) || (sec.length == undefined)){
                    sec = "0" + sec;
                }
            }
            seconds.value = sec;
            minutes.value = min;
            Hour.value = hour;
            sec--
        }, 1000);
})