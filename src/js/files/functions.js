// log console

export const getLog = (info, string) => {
	console.log(info, string)
}

// add padding to element offset scrollbar

export const addPadding = (htmlElem) => {
	const htmlElemPadding = parseInt(window.getComputedStyle(htmlElem).paddingRight, 10)
	const scrollBarWidth = window.innerWidth - document.body.offsetWidth
	const totalPadding = scrollBarWidth + htmlElemPadding + 'px'
	htmlElem.style.paddingRight = totalPadding
}

export const removePadding = (htmlElem, initialPadding) => {
	htmlElem.style.paddingRight = initialPadding
}

// divide string of number, example: '10000' by space result: '10 000'
export const divideIntegerBySpace = (num) => {
	const numStr = String(num)
	return numStr
		.split('')
		.reverse()
		.join('')
		.match(/.{1,3}/g)
		.join(' ')
		.split('')
		.reverse()
		.join('')
}

// get HEX color
export const getHexColor = () => {
	const hexColorArr = []

	for (let i = 0; i < 6; i++) {
		const randomNumber = Math.floor(Math.random() * 10) + 6
		const hexNumber = randomNumber.toString(16)
		hexColorArr.push(hexNumber)
	}

	return `#${hexColorArr.join('')}`
}

// get RGB color

export const getRgbColor = () => {
	const r = Math.floor(Math.random() * 256)
	const g = Math.floor(Math.random() * 256)
	const b = Math.floor(Math.random() * 256)

	return `rgb(${r}, ${g}, ${b})`
}

// counter

export const decrementCounter = (initialValue, renderValueEl) => {
	if (initialValue > 1) {
		initialValue--

	}
	renderValueEl.textContent = initialValue
	return initialValue
}

export const incrementCounter = (initialValue, renderValueEl) => {
	if (initialValue > 1) {
		initialValue--

	}
	renderValueEl.textContent = initialValue
	return initialValue
}

// generate dots in content example: product ........ 20 $
// call example: 
// window.addEventListener('load', generateDots)
// window.addEventListener('resize', generateDots)
 

export function generateDots() {
	// Получаем все контейнеры, которые нужно обработать
	const wrappers = document.querySelectorAll('.basket__order-item-wrapper, .basket__order-total-wrapper')

	wrappers.forEach((wrapper) => {
		// Находим все span элементы внутри текущего контейнера
		const spans = wrapper.querySelectorAll('span')

		// Пропускаем если нет нужного количества span элементов
		if (spans.length < 3) return

		const leftSpan = spans[0]
		const dotsSpan = spans[1]
		const rightSpan = spans[2]

		// Вычисляем доступную ширину
		const wrapperWidth = wrapper.clientWidth
		const leftWidth = leftSpan.offsetWidth
		const rightWidth = rightSpan.offsetWidth

		// Вычисляем доступное пространство для точек
		const availableWidth = wrapperWidth - leftWidth - rightWidth

		// Минимальный отступ (можно настроить)
		const minGap = 5

		if (availableWidth > minGap) {
			// Рассчитываем количество точек, которые поместятся
			const dotWidth = 5 // Примерная ширина одной точки
			const dotsCount = Math.floor(availableWidth / dotWidth)

			// Заполняем span точками
			dotsSpan.textContent = '.'.repeat(dotsCount)
		} else {
			// Если места совсем мало, оставляем минимальное количество точек
			dotsSpan.textContent = '...'
		}
	})
}

