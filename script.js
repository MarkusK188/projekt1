let quote = document.querySelector('#quote');
let rndmButton = document.querySelector('#btn');

let randomId = 0

async function randomQuote() {
	const response = await fetch('https://api.kanye.rest');
	let data = await response.json();
	console.log(data);
	quote.textContent = data.quote;
	randomPokemon();

};

btn.addEventListener("click", randomQuote)


async function randomPokemon() {
	let randomId = Math.floor(Math.random() * 151) +1;

	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
	let data = await response.json();
	const pokemonSprite = data.sprites.front_default;
	const imgElement = document.getElementById('pokemonSprite');

	imgElement.src = pokemonSprite;
	imgElement.style.display = "block";
}
