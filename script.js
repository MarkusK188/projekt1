let quote = document.querySelector('#quote');
let rndmButton = document.querySelector('#btn');



async function randomQuote() {
	const response = await fetch('https://api.kanye.rest');
	let data = await response.json();
	console.log(data);
	quote.textContent = data.quote;
};

btn.addEventListener("click", randomQuote)



