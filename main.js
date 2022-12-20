const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItem = document.querySelector('.mobile-menu-item');
const mobileMenuItem1 = document.querySelector('.mobile-menu-item1');
const mobileMenuItem2 = document.querySelector('.mobile-menu-item2');
const navbar = document.querySelector(".nav-bar")

function showMenu() {
    mobileMenu.style.display = 'block';
    closeBtn.style.display = 'block';
    navbar.style.display = 'none';
    menuBtn.style.display = 'none';
  }
  
  function hideMenu() {
    menuBtn.style.display = 'block';
    navbar.style.display = 'flex';
    mobileMenu.style.display = 'none';
    closeBtn.style.display = 'none';
  }
  
  menuBtn.addEventListener('click', showMenu);
  closeBtn.addEventListener('click', hideMenu);
  mobileMenuItem.addEventListener('click', hideMenu);
  mobileMenuItem1.addEventListener('click', hideMenu);
  mobileMenuItem2.addEventListener('click', hideMenu);