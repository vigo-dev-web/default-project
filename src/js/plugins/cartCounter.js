const counterComponents = document.querySelectorAll('.cart__counter')

counterComponents.forEach(counter => {
	let initNumber = 1
	counter.firstElementChild.addEventListener('click', () => {
		initNumber++
		counter.firstElementChild.nextElementSibling.textContent = initNumber
	})
	counter.lastElementChild.addEventListener('click', () => {	
		if(initNumber > 1) {
			initNumber--
			counter.lastElementChild.previousElementSibling.textContent = initNumber
		}	else return
	})
})


