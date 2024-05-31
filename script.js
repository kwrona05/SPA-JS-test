const btn = document.querySelector('.print');
const divTest = document.querySelector('.hide');
const paragraph = document.querySelector('content')

function showDiv() {
    divTest.classList.toggle('show');
    divTest.classList.toggle('hide');
}

btn.addEventListener('click', showDiv)
