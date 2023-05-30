# Breakdown Template for organizing your thoughts and sharing your video learnings 


### Links

- Zoom Recording URL: [Add solution URL here](https://www.youtube.com/watch?v=vcCX0luzLCQ)
- GitHub page URL:[Add GitHub page URL here](https://github.com/Philip-ui/Cocktail)
- Deployed GitHub page URL: [Add deployed GitHub page URL here](https://philip-ui.github.io/Cocktail/)

## [Team Express]
### 1. What parts were you in charge of?
-  Home page `[Kok Onn]`

### 2. Explain the feature you are most proud of. What techniques/methods you've used?

Share some of the key insights and lessons you gained while working on this project. 
Taking some time to write them down and provide code samples of the sections you found particularly important can be an effective way to solidify your understanding.

To see how you can add code snippets, refer below:
`[Kok Onn]`
- The feature I'm most proud of is creating div element and looping the list of ingredients for more than one cocktail names.

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

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### 3. Name one coding struggle and how you dealt with it
`[Kok Onn]`

- The one coding struggle I face is to create a 'for each' loop for ingredients to be insert into cocktailElement.innerHTML.


### 4. Name one improvement you would like to work on.

In this section, pinpoint concepts or techniques that need further development for future projects.These might include concepts that you're not yet entirely confident in or techniques that you'd like to hone and master.

`[Kok Onn]`
- One improvement which I like to work on is to search for API endpoints that can encompass all or more comprehensive the cocktail names in the world and
also display the cocktail picture for each cocktail name.

# Useful resources (include if any)

- [Example resource 1](https://rapidapi.com/apininjas/api/cocktail-by-api-ninjas) - This API helped me for getting the cocktail resources like cocktail names, ingredients and instructions.
- [Example resource 2](https://github.com/joinsigma/currency-converter-practice) - This is an amazing github codes help me in formulating the Javascript codes in my project.

---

