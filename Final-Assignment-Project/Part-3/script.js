import { apiKey } from "./config.js";

// DOM element set up
const input = document.querySelector("input");
const cocktailSearch = document.querySelector("#cocktail");
const cocktailName = document.querySelector(".cocktail_name");
const ingredientList = document.querySelector(".ingredient_list");
const instructions = document.querySelector(".instructions");
const cocktailTitle = document.querySelector(".cocktail_title");

//const url = 'https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail?name=bloody%20mary';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': 'cocktail-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchCocktail(cocktailname){
    try {
        const response = await fetch(`https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail?name=${cocktailname}`, options);
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}

function createCocktailElement({ name, ingredients, instructions }) {
    let cocktailElement = document.createElement('div')
        cocktailElement.classList.add("cocktail_ingredient");               
        cocktailElement.innerHTML = `        
        <h2 class="cocktail_name">Cocktail name: ${name}</h2>
        <span>Ingredients:</span><br />
        <ul class="ingredient_list">
          ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
        </ul>
        <p class="instructions">${instructions}</p>
       `
       cocktailTitle.appendChild(cocktailElement)
}

input.addEventListener('change',(event) => {
    cocktailElement.classList.remove("cocktail_ingredient");
})
//let cocktailname = cocktailSearch.value;

cocktailSearch.addEventListener('keypress', async (e) => {
    if (e.key === "Enter") {
    e.preventDefault();
    //cocktailElement.classList.remove("cocktail_ingredient");   
    let cocktailname = cocktailSearch.value;    
    const data = await fetchCocktail(cocktailname);
    data.forEach((cocktail) => {
        createCocktailElement(cocktail);
    })
   }
  })
