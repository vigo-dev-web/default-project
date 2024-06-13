const scrollBtn = document.querySelector('#scroll-btn')
const windowHeight = document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
   let currentScroll = scrollY;
   if (currentScroll > windowHeight*1.2) {
      scrollBtn.classList.add('visible')
   } else {
      scrollBtn.classList.remove('visible')
   }
})

scrollBtn.addEventListener('click', () => {
   window.scrollTo({top: 0, left: 0, behavior: "smooth"})
})

console.log('Scrollbar has been connected...')
