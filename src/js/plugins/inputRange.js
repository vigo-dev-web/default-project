const inputRangeArr = document.querySelectorAll('[data-room-filter]')

const inputHandler = (targetInput, element) => {
   element.textContent = targetInput.value
}

if (inputRangeArr.length > 0) {
   inputRangeArr.forEach(input => {
      input.addEventListener('input', ({ target }) => {

         const targetElement = input.previousSibling.previousSibling.firstElementChild;

         if (targetElement.hasAttribute('data-input-value')) {
            inputHandler(target, targetElement);
         }
      })
   })
}
