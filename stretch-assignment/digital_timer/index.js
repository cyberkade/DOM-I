const second = document.querySelector('#secondOnes');
const secondTens = document.querySelector('#secondTens')
const msTenths = document.querySelector('#msTens');
const msHundredths = document.querySelector('#msHundreds');
const colon = document.querySelector('#colon');
const button = document.querySelector('button');
const reset = document.querySelector('.reset')
let totalSec = 0;
let totalTens = 0;
let totalTenths = 0;
let totalHundredths = 0;

button.addEventListener('click', (e)=>{
    button.disabled = true;
const countTenths = setInterval(() => {
    totalTenths += 1
    msTenths.textContent = totalTenths;
    if(totalTenths === 10){
        msTenths.textContent = 0;
        totalTenths = 0;
    }
}, 10);
const countHund = setInterval(() => {
    totalHundredths += 1
    msHundredths.textContent = totalHundredths;
    if(totalHundredths === 10){
        msHundredths.textContent = 0;
        totalHundredths = 0;
    }
}, 100);
const countSeconds = setInterval(() => {
    totalSec += 1;
    second.textContent = totalSec;
    if(totalSec === 10){
        second.textContent = 0;
        totalSec = 0;
    }
}, 1000);
const countTens = setInterval(() => {

        button.disabled = false;
        totalTens += 1;
        secondTens.textContent = totalTens;
        second.textContent = 0;
        secondTens.classList.add('redDigit');
        second.classList.add('redDigit');
        msTenths.classList.add('redDigit');
        msHundredths.classList.add('redDigit');
        colon.classList.add('redDigit');
        clearInterval(countSeconds);
        clearInterval(countTenths);
        clearInterval(countHund);
        clearInterval(countTens);
        msTenths.textContent = '0';
        msHundredths.textContent = '0';
    
}, 10000);
});

reset.addEventListener('click', ()=>{
    totalSec = 0;
    totalTens = 0;
    totalTenths = 0;
    totalHundredths = 0;
    second.textContent = '-';
    secondTens.textContent = '-';
    msTenths.textContent = '-';
    msHundredths.textContent = '-';
    secondTens.classList.remove('redDigit');
    second.classList.remove('redDigit');
    msTenths.classList.remove('redDigit');
    msHundredths.classList.remove('redDigit');
    colon.classList.remove('redDigit');
    clearInterval(countSeconds);
    clearInterval(countTenths);
    clearInterval(countHund);
    clearInterval(countTens);
});