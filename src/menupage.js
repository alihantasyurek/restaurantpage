import margherita from "../img/Pizzas/Margherita.jpg";
import pepperoni from "../img/Pizzas/Pepperoni.jpg";
import chicken from "../img/Pizzas/Chicken.jpg";
import veggie from "../img/Pizzas/Veggie.jpg";
import fourcheese from "../img/Pizzas/fourcheese.jpg";
import mushroom from "../img/Pizzas/Mushroom.jpg";
import deluxe from "../img/Pizzas/Deluxe.jpg";
import bbqchicken from "../img/Pizzas/Bbqchicken.jpg";

import "./menupage.css";

export function menuPage() {
	document.body.dataset.page = "menu";
	createCard();
}

const menu = (() => {
	const items = [];

	class Pizza {
		constructor(name, price, imgUrl) {
			this.name = name;
			this.price = price;
			this.imgUrl = imgUrl;
		}
	}

	function add(name, price, imgUrl) {
		items.push(new Pizza(name, price, imgUrl));
	}
	function clear() {
		items.length = 0;
	}
	function printMenu() {
		console.log(items);
	}
	function getMenu() {
		return [...items];
	}

	return { add, printMenu, clear, getMenu };
})();

function createCard() {
	const content = document.querySelector("#content");
	const menuItems = menu.getMenu();

	menuItems.forEach((item) => {
		const card = document.createElement("div");
		const info = document.createElement("div");

		card.className = "menu-card";
		info.className = "menu-info";

		const image = document.createElement("img");
		image.src = item.imgUrl;
		image.className = "pizza-img";
		image.alt = item.name;

		const pizza = document.createElement("p");
		pizza.textContent = item.name;
		const price = document.createElement("p");
		price.textContent = `$${item.price}`;
		price.style.color = "yellow";

		info.append(pizza, price);
		card.append(image, info);

		content.appendChild(card);
	});
}

(function initialize() {
	menu.add("Margherita Pizza", 9.99, margherita);
	menu.add("Pepperoni Pizza", 11.99, pepperoni);
	menu.add("Chicken Pizza", 12.99, chicken);
	menu.add("Veggie Supreme Pizza", 10.99, veggie);
	menu.add("Four Cheese Pizza", 10.49, fourcheese);
	menu.add("Mushroom Pizza", 10.49, mushroom);
	menu.add("Deluxe Pizza", 13.49, deluxe);
	menu.add("BBQ Chicken Pizza", 13.99, bbqchicken);
})();
//create a card for each item and push them
