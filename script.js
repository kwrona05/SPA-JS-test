const btn = document.querySelector('.print');
const divTest = document.querySelector('.hide');
const paragraph = document.querySelector('content')
const ulList = document.querySelector('ul')

function showDiv() {
    divTest.classList.toggle('show');
    divTest.classList.toggle('hide');
    ulList.classList.toggle('show');
    ulList.classList.toggle('hide');
}

btn.addEventListener('click', showDiv)
