const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('#close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItem1 = document.querySelector('.mobile-menu-item1');
const mobileMenuItem2 = document.querySelector('.mobile-menu-item2');
const mobileMenuItem3 = document.querySelector('.mobile-menu-item3');
const navbar = document.querySelector(".nav-bar")

function showMenu(e) {
    e.preventDefault();
    mobileMenu.style.display = 'block';
    navbar.style.display = 'none';
  }
  
  function hideMenu() {
    mobileMenu.style.display = 'none';
  }
  
  menuBtn.addEventListener('click', showMenu);
  closeBtn.addEventListener('click', hideMenu);
  mobileMenuItem1.addEventListener('click', hideMenu);
  mobileMenuItem2.addEventListener('click', hideMenu);
  mobileMenuItem3.addEventListener('click', hideMenu);