import "@fontsource/fraunces/700.css"; //headlines
import "@fontsource/inter/400.css"; // body
import "./styles.css";
import { homePage } from "./homepage.js";
import { menuPage } from "./menupage.js";
import { aboutPage } from "./aboutpage.js";

homePage();

(() => {
	const nav = document.querySelector("nav");

	const actions = {
		"home-btn": homePage,
		"menu-btn": menuPage,
		"about-btn": aboutPage,
	};

	nav.addEventListener("click", (e) => {
		const content = document.querySelector("#content");
		if (e.target.tagName === "BUTTON" && actions[e.target.id]) {
			content.textContent = "";
			actions[e.target.id]();
		}
	});
})();
