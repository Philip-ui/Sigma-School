// import the APIKEY from config.js
import { apiKey } from "./config.js";

// DOM element set up
const cocktailSearch = document.querySelector("#cocktail");
const cocktailName = document.querySelector(".cocktail_name");
const ingredientList = document.querySelector(".ingredient_list");
const instructions = document.querySelector(".instructions");
const cocktailTitle = document.querySelector(".cocktail_title");
const cocktailResults = document.querySelector(".cocktail_results")

//const url = 'https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail?name=bloody%20mary';
const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'cocktail-by-api-ninjas.p.rapidapi.com'
  }
};

//Fetching the data that are the cocktail title/name, ingredients and instructions from the input 
async function fetchCocktail(cocktailname) {
  try {
    const response = await fetch(`https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail?name=${cocktailname}`, options);
    const data = await response.json();
    console.log("RECIEVED DATA", data);
    return data
  } catch (error) {    
    console.log(error);    
    return
  }
}

//Create the div cocktail_ingredient class and display the cocktail name, lists of ingredients and istructions 
function createCocktailElement({ name, ingredients, instructions }) {
  let cocktailElement = document.createElement('div')
  cocktailElement.classList.add("cocktail_ingredient");
  cocktailElement.innerHTML = "";
  // Create the ingredient list
  let ingredientList = "";
  ingredients.forEach((ingredient) => {
    ingredientList += `<li>${ingredient}</li>`;
  });
  cocktailElement.innerHTML = `        
        <h2 class="cocktail_name">Cocktail name: ${name}</h2>
        <span>Ingredients:</span><br />
        <ul class="ingredient_list">
            ${ingredientList}
        </ul>
        <p class="instructions">${instructions}</p> `
  //Appending child, cocktailElement to parent, cocktailResults  
  cocktailResults.appendChild(cocktailElement)
}

//Add an EventListener for input cocktail name is enter key is depressed
cocktailSearch.addEventListener('keypress', async (e) => {
  if (e.key === "Enter") {
    e.preventDefault();    
    // clear previous results before adding new ones
    cocktailResults.innerHTML = "";
    let cocktailname = cocktailSearch.value;
    const data = await fetchCocktail(cocktailname);
    console.log('List',data);
    // include an if or if-else check logic for data validation
    if (data.length === 0 || cocktailname === "" || !(isNaN(cocktailname)) || cocktailname === "#" || cocktailname === "&" ) {
      alert('No results. Please enter cocktail name again');
      return
    }
    //Loop and print each cocktail and create cocktail element  
    data.forEach((cocktailname) => {
      createCocktailElement(cocktailname);
    })
  }
})
