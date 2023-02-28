const radioBtns = document.querySelectorAll('input[type="radio"]');
const darkBtn = document.querySelector('#dark');
const lightBtn = document.querySelector('#light');
const root = document.querySelector('html');

radioBtns.forEach((btn) => {
	btn.addEventListener('change', () => {
		darkBtn.checked ? setDarkMode() : setLightMode();
	});
});

// when dom is loaded mode specfied by last value saved in localStorage
// if no value is saved in localStorage then specfiy mode based on prefers colo scheme
document.addEventListener('DOMContentLoaded', () => {
	const mode = localStorage.getItem('mode') || getPrefersColorScheme();

	mode === 'dark' ? darkBtn.click() : lightBtn.click();
});

// when prefers color scheme changed

window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', (e) => {
		e.matches ? darkBtn.click() : lightBtn.click();
	});

function setDarkMode() {
	const root = document.querySelector('html');
	root.classList = 'dark';
	localStorage.setItem('mode', 'dark');
}

function setLightMode() {
	const root = document.querySelector('html');
	root.classList = '';
	localStorage.setItem('mode', 'light');
}

function getPrefersColorScheme() {
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}
