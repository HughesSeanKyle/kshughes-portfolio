// Selectors
const navBar = document.querySelector('.nav-bar');
const skillsHeading = document.querySelector('.skills-heading');
const projectHeading = document.querySelector('.project-heading');
const aboutHeading = document.querySelector('.about-heading');
const contactHeading = document.querySelector('.contact-heading');
const hamburger = document.querySelector('.nav-bar .hamburger');

// ****Get the postion of an elm on the Y-axis - TEMP Code - ****Remove when done****
// const element = document.getElementById('thththt');
// const elementPosition = element.getBoundingClientRect().top + window.scrollY;

// console.log('element', element);
// console.log('elementPosition', elementPosition);

// ****Get the postion of an elm on the Y-axis END

// Event listeners
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	// mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		navBar.style.backgroundColor = '#175D60';
		navBar.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.5)';
	} else {
		navBar.style.backgroundColor = 'transparent';
		navBar.style.boxShadow = 'none';
	}

	// Scroll animation for skills heading
	if (scroll_position > 500) {
		skillsHeading.classList.add('tracking-in-expand');
	} else {
		skillsHeading.classList.remove('tracking-in-expand');
	}

	// Scroll animation for Project heading
	if (scroll_position > 4800) {
		projectHeading.classList.add('tracking-in-expand');
	} else {
		projectHeading.classList.remove('tracking-in-expand');
	}

	// Scroll animation for About heading
	if (scroll_position > 6417) {
		aboutHeading.classList.add('tracking-in-expand');
	} else {
		aboutHeading.classList.remove('tracking-in-expand');
	}

	// Scroll animation for Contact heading
	if (scroll_position > 7704) {
		contactHeading.classList.add('tracking-in-expand');
	} else {
		contactHeading.classList.remove('tracking-in-expand');
	}
});
