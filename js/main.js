const headerBar = document.querySelector(".js-header");
const openButton = document.querySelector(".js-open-button");
const closeButton = document.querySelector(".js-close-button");
const secondaryNav = document.querySelector(".js-secondary-nav");
const overlay = document.querySelector(".js-overlay");

// Add box shadow to navbar when scrolling down
window.addEventListener("scroll", event => {
	if (window.scrollY > 0) {
		headerBar.style.boxShadow = "0px 17px 12px -3px rgba(0,0,0,0.1)";
	} else {
		headerBar.style.boxShadow = "none";
	}
});

// Event to expand the mobile navbar
openButton.addEventListener("click", event => {
	secondaryNav.style.transform = "translateX(0)";
	secondaryNav.style.zIndex = "2";
	openButton.style.display = "none";
	closeButton.style.display = "block";
	overlay.style.display = "block";
});

// Event to close the mobile navbar
closeButton.addEventListener("click", event => {
	secondaryNav.style.transform = "translateX(300px)";
	openButton.style.display = "block";
	closeButton.style.display = "none";
	overlay.style.display = "none";
});