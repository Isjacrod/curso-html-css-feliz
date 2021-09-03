// Move the history-nav items on button click

let nextButton = document.querySelector('.history-nav .arrow-button.-right');
let prevButton = document.querySelector('.history-nav .arrow-button.-left');
let historyItems = document.querySelector('.history-nav .historywrapper');

const qtd = 150;
let actualPosition = 0;

nextButton.addEventListener('click', () => {
    actualPosition += qtd;
    historyItems.style.transform = `translateX(${actualPosition}px)`
})

prevButton.addEventListener('click', () => {
    actualPosition -= qtd;
    historyItems.style.transform = `translateX(${actualPosition}px)`
})