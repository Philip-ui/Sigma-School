const url = 'https://crypto-symbols-by-api-ninjas.p.rapidapi.com/v1/cryptosymbols';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'd5f2e17ac6mshec4872773bcbe7bp10a2bcjsn8778f0ef3d7c',
		'X-RapidAPI-Host': 'crypto-symbols-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}