const burgerBtn = document.querySelector('#menu-burger')
const mobileMenu = document.querySelector('#mobile-menu')

burgerBtn?.addEventListener('click', () => {
   mobileMenu.classList.toggle('_open') //open mobile menu
   body.classList.toggle('_lock') //remove scrollbar
   burgerBtn.classList.toggle('_active') // change style burger-btn
})
