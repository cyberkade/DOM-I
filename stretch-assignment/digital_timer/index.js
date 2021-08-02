const second = document.querySelector('#secondOnes');
const ms = document.querySelector('#msTens');
let totalSec = 0;
let totalMS = 0;

// const countMS = setInterval(() => {
//     totalMS += 10
//     msContentScript.textContent = totalMS;
// }, 10);

const countSeconds = setInterval(() => {
    totalSec += 1;
    console.log(total);
    second.textContent = total;
    if(totalSec === 10){
        second.classList.add('redDigit');
        clearInterval(countSeconds);
    }
}, 1000);