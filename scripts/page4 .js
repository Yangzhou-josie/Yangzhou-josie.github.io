
const app = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

fetch("https://www.zippia.com/advice/personality-tests/s")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
		data.forEach((movie) => {
			const card = document.createElement("div");
			card.setAttribute("class", "card");
			const h1 = document.createElement("h1");
			h1.textContent = `${movie.title} (${movie.release_date})`;
			const p = document.createElement("p");
			movie.description = movie.description.substring(0, 300);
			p.textContent = `${movie.description} ... `;
			container.appendChild(card);
			card.appendChild(h1);
			card.appendChild(p);
		});
	})
	.catch();

