let icon = document.querySelector('.icon');
let close = document.querySelector('.close');

function showMenu() {
    const m = document.querySelector('.menu');
    m.classList.add('smenu');
}

function removeMenu() {
    const m = document.querySelector('.menu');
    m.classList.remove('smenu');
}


icon.addEventListener('click', showMenu

)

close.addEventListener('click', removeMenu)