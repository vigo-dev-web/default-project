const headerBottom = document.querySelector('.header__bottom')

const scrollFixedHeader = () => {
   if (window.pageYOffset > 72) {
      headerBottom.classList.add('_scroll')
   } else {
      headerBottom.classList.remove('_scroll')
   }
}

window.addEventListener('scroll', scrollFixedHeader)