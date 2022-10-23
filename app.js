const burgerMenuButton = document.querySelector(".burger-container");
const burgerNavigationMenu = document.querySelector(".burger-navigation-menu");
let isBurgerOpen = false;

burgerMenuButton.addEventListener("click", () => {
	if (!isBurgerOpen) {
		burgerMenuButton.classList.add("expand");

		burgerNavigationMenu.classList.add("expand");

		isBurgerOpen = true;
	} else {
		burgerMenuButton.classList.remove("expand");

		burgerNavigationMenu.classList.remove("expand");

		isBurgerOpen = false;
	}
});
