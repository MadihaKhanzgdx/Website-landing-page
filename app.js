// Select navbar and footer
const navbar = document.querySelector('.navbar');
const footer = document.querySelector('.footer');

// Get navbar background color
const navbarBg = getComputedStyle(navbar).backgroundColor;

// Apply it to footer
footer.style.backgroundColor = navbarBg;
