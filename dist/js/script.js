// navbar fixed
window.onscroll = function{
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYoffset >fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

//Hamburger
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('hidden');
  }
// const hamburger = document.querySelector('#hamburger');
// const navMenu = document.querySelector('#nav-menu'); 
// hamburger.addEventListener('click', function(){
//     hamburger.classList.toggle('hamburger-active');
//     navMenu.classList.toggle('hidden');
// });