const menuItems = document.querySelectorAll('[data-menu-id]')
const submenuItems = document.querySelectorAll('[data-item]')
const delayTime = 300

menuItems.forEach((item) => {
   item.addEventListener('click', () => {

      setTimeout(() => {

         submenuItems.forEach((submenuItem) => {
            if (item.dataset.menuId === submenuItem.dataset.item) {
               submenuItem.classList.toggle('_open')
            }
         })
      }, delayTime)
   })
});
