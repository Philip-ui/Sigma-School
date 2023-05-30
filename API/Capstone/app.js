const catsContainer = document.querySelector('#cats_container');

const cats_count = 67;

const getCats = async (id) => {
    const url = 'https://api.thecatapi.com/v1/breeds/';
    const res = await fetch(url);
    const cats = await res.json();
    console.log(cats)
    return cats;
  };

  function createCatsElement({ name, description, reference_image_id }) {       
    let catsCards = document.createElement('div')
        catsCards.id = 'cat_card'                
        catsCards.innerHTML = `        
          <img id="cat_img" src='https://cdn2.thecatapi.com/images/${reference_image_id}.jpg' alt="${name}" onerror="this.onerror=null; this.src='missingcat.png'">
          <div id="cat_details">
            <h3 id="cat_name">${name}</h3>
            <p id="cat_description">${description}</p>
          </div>
          <div id="profile_wrap">
            <span id="cat_profile">Profile</span>
          </div>
       `
        catsContainer.appendChild(catsCards)
  }

  window.addEventListener('load', async () => {
    const cats = await getCats();
    cats.forEach((cat) => {
      createCatsElement(cat);
    })
  })