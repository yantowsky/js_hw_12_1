const btnEntertPage = document.getElementById('enterPage');
const btnGoToPage = document.getElementById('goToPage');

let htmlPage;

btnEntertPage.addEventListener('click', () => {
    htmlPage = prompt('Enter the page address', 'https://ithillel.ua/');
    console.log(htmlPage);
});

btnGoToPage.addEventListener('click', () => {
    window.location.href = htmlPage;
});