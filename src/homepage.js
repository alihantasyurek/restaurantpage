import "./homepage.css";

export function homePage() {
	const content = document.querySelector("#content");
	document.body.dataset.page = "homepage";
	const header = document.createElement("h1");
	const para = document.createElement("p");

	header.textContent = "Artisan Pizzas. Bold Flavors. Fresh Ingredients.";
	para.innerHTML =
		"Discover a pizza experience like no other at <strong>Crust & Craft</strong>. Every bite bursts with handcrafted";
	content.appendChild(header);
	content.appendChild(para);
}
