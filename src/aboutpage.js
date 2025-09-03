import "./aboutpage.css";

export function aboutPage() {
	document.body.dataset.page = "about";
	page();
}

const page = () => {
	const paragraphs = [
		"Welcome to Crust & Craft, where pizza is more than food — it’s our passion. We set out to create a pizza experience like no other, one that combines the warmth of traditional techniques with bold, modern flavors.",
		"Every day begins with our dough, made fresh in-house and left to rise naturally for that perfect texture — crisp on the outside, airy and tender within. Our sauces are simmered with care, and we source only the freshest produce, hand-picked cheeses, and premium meats to ensure that each topping bursts with flavor.",
		"But what truly sets Crust & Craft apart is our dedication to creativity. From wood-fired classics like the Margherita to daring flavor combinations you won’t find anywhere else — think roasted pear and gorgonzola or spicy chorizo with honey drizzle — every pizza tells a story of culinary craftsmanship.",
		"Our open kitchen concept means you can watch the magic happen: the tossing of the dough, the layering of ingredients, the fiery glow of the stone oven. It’s all part of the experience — a place where food, flavor, and community come together.",
		"Whether you’re here for a casual lunch, a family dinner, or a night out with friends, Crust & Craft promises a welcoming atmosphere and pizzas worth savoring. Because for us, pizza isn’t just a meal — it’s a celebration of fresh ingredients, bold flavors, and the simple joy of sharing something delicious.",
	];

	const content = document.querySelector("#content");
	const head = document.createElement("h1");
	head.innerText = "About Us";
	content.appendChild(head);

	const container = document.createElement("div");
	const head2 = document.createElement("h2");
	head2.innerText = "Artisan Pizzas. Bold Flavors. Fresh Ingredients.";
	container.appendChild(head2);
	container.className = "para-container";

	paragraphs.forEach((text) => {
		const para = document.createElement("p");
		para.innerText = text;
		container.appendChild(para);
	});
	content.appendChild(container);
};
