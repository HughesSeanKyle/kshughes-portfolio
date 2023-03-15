// Selectors
const navBar = document.querySelector('.nav-bar');

// Event listeners
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		navBar.style.backgroundColor = '#175D60';
	} else {
		navBar.style.backgroundColor = 'transparent';
	}
});
