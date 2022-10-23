const burgerMenuButton = document.querySelector(".burger-container");
let isBurgerOpen = false;

burgerMenuButton.addEventListener("click", () => {
	if (!isBurgerOpen) {
		burgerMenuButton.classList.add("expand");
		isBurgerOpen = true;
	} else {
		burgerMenuButton.classList.remove("expand");
		isBurgerOpen = false;
	}
});
