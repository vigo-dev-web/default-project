import Choices from 'choices.js';
import "choices.js/public/assets/styles/choices.css";

const selectElements = document.querySelectorAll('.filter__select')

selectElements.forEach(el => {
   const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: false,
      position: "bottom",
   })
})
