const second = document.querySelector('#secondOnes');
const secondTens = document.querySelector('#secondTens')
const msTenths = document.querySelector('#msTens');
const msHundredths = document.querySelector('#msHundreds');
const colon = document.querySelector('#colon');
let totalSec = 0;
let totalTenths = 0;
let totalHundredths = 0;


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
        secondTens.textContent = 1;
        second.textContent = 0;
        secondTens.classList.add('redDigit');
        second.classList.add('redDigit');
        msTenths.classList.add('redDigit');
        msHundredths.classList.add('redDigit');
        colon.classList.add('redDigit');
        clearInterval(countSeconds);
        clearInterval(countTenths);
        clearInterval(countHund);
        msTenths.textContent = '0';
        msHundredths.textContent = '0';
    }
}, 1000);