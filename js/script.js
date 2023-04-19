const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav-links');

hamburguer.addEventListener('click',()=>{
    nav.classList.toggle('active');
});


const typed = new Typed('#leterjs', {
    strings: ['JavaScript', 'SQL', 'NodeJs'],
    typeSpeed: 80,
    loop: true,
    backSpeed: 75
});