/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

navToggle.addEventListener('click',()=>{navMenu.classList.add('show-menu')})
navClose.addEventListener('click',()=>{navMenu.classList.remove('show-menu')})

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')
const menuClick =()=>{
  navMenu.classList.remove('show-menu')
}
navLinks.forEach(navLink=>{navLink.addEventListener('click',menuClick)})

/*=============== SWIPER WACTHES ===============*/
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween:32,
  grabCursor:true,
  effect:'creative',
  creativeEffect:{
    prev:{translate:[-100, 0 ,-500],rotate:[0,0,15],opacity:0},
    next:{translate:[100,0,-500],rotate:[0,0,-15],opacity:0}
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__images',1.5,{opacity:0,y:150,delay:.1})
gsap.from('.home__content',1.8,{opacity:0,x:-100,delay:.8})
gsap.from('.home__info',1.8,{opacity:0,x:-100,delay:1})