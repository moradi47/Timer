let $ = document;

let btnElem = $.querySelector('.btn');
let modalElem = $.querySelector('.modal');
let divElem = $.querySelector('.container');
let iElem = $.querySelector('#close');
console.log( iElem)

btnElem.addEventListener('click', function(){

    modalElem.style.display = 'flex';
    divElem.style.filter = 'Blur(5px)';
    console.log('open')
})

iElem.addEventListener('click', function(){

    modalElem.style.display = 'none';
    divElem.style.filter = 'Blur(0px)';

})