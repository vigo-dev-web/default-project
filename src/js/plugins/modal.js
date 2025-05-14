const modals = document.querySelectorAll('[data-modal]')
const modalCallBtns = document.querySelectorAll('[data-modal-link]')
const body = document.body

const openModal = (modal) => {
   const modalBody = modal.firstElementChild.firstElementChild
   modal.classList.add('_open')
   modalBody.classList.add('_open');
};

const closeModal = (modal) => {
   const modalBody = modal.firstElementChild.firstElementChild
   modal.classList.remove('_open')
   modalBody.classList.remove('_open')
}

if (modals.length > 0) {
   modalCallBtns.forEach(btn => {
      btn.addEventListener('click', () => {
         modals.forEach(modalWindow => {
            if (btn.dataset.modalLink === modalWindow.dataset.modal) {
               openModal(modalWindow)
               body.classList.add('_lock')
            }
         })
      })
   })

   modals.forEach(modalWindow => {
      modalWindow.addEventListener   ('click', (e) => {
         if (e.target.dataset.close) {
            closeModal(modalWindow)
            body.classList.remove('_lock')
         }
      })
   });
}


