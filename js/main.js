const openButton = document.querySelector(".js-open-button");
const closeButton = document.querySelector(".js-close-button");
const secondaryNav = document.querySelector(".js-secondary-nav");
const overlay = document.querySelector(".js-overlay");


// Event to expand the mobile navbar
openButton.addEventListener("click", event => {
	secondaryNav.style.right = "0";
	secondaryNav.style.zIndex = "2";
	openButton.style.display = "none";
	closeButton.style.display = "block";
	overlay.style.display = "block";
});

// Event to close the mobile navbar
closeButton.addEventListener("click", event => {
	secondaryNav.style.right = "-100%";
	openButton.style.display = "block";
	closeButton.style.display = "none";
	overlay.style.display = "none";
});