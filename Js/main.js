let $ = document;

let btnElem = $.querySelector('.btn');
let modalElem = $.querySelector('.modal');
console.log( modalElem)

btnElem.addEventListener('click', function(){

    modalElem.style.display = 'flex';
    console.log('open')
})