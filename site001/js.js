const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('Active')
}

btnMobile.addEventListener('click', toggleMenu);