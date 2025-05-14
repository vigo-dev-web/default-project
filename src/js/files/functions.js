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

// divide string of number '10000' by space '10 000'
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
