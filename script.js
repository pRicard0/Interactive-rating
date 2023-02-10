const submit = document.querySelector('button');
const main = document.querySelector('#main');
const thxSection = document.querySelector('#thankyou');
const numbers = document.querySelectorAll('.number');
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.close-button')
let text = document.querySelector('#selected-text');
let numberClicked = false;

numbers.forEach(function (number) {
    number.addEventListener('click', function() {
        numbers.forEach(function (num) {
            num.classList.remove('number-selected');
        });
        number.classList.add('number-selected');
        text.innerHTML = `You selected ${number.value} out of 5`;
        numberClicked = true;
    });
});

submit.addEventListener('click', function() {
    if (numberClicked === true) {
        thxSection.classList.add('thx-visible');
        main.classList.remove('visible');
    }
    else {
        modal.classList.remove('hidden')
    }
});

closeButton.addEventListener('click', function() {
    modal.classList.add('hidden');
});

