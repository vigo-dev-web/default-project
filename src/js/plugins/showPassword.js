const passwordInput = document.getElementById('input-password')
const togglePasswordButton = document.getElementById('toggle-password')
const icon = togglePasswordButton?.querySelector('img')

// Обработчик ввода в поле пароля
passwordInput?.addEventListener('input', function () {
	if (passwordInput.value.length > 0) {
		togglePasswordButton.classList.add('_active')
	} else {
		togglePasswordButton.classList.remove('_active')
	}
})

// Обработчик клика по кнопке переключения
togglePasswordButton?.addEventListener('click', function () {
	const isPassword = passwordInput.type === 'password'
	passwordInput.type = isPassword ? 'text' : 'password'
	icon.src = isPassword ? './img/icons/password-eye.svg' : './img/icons/password-eye-cross.svg'
})
