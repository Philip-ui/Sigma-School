const poke_container = document.getElementById("poke_container");

const pokemons_number = 151;

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonElement(pokemon);
};

fetchPokemons();

function createPokemonElement(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const pokeInnerHTML = `
  <div class="img-container">
  <img src="${pokemon.sprites.front_default}" width="110" height="110" alt="${name}"
  </div>
  <div class="info">
  <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
  <h3 class="name">${name}</h3>
  </div>
  `;

  pokemonEl.innerHTML = pokeInnerHTML;

  poke_container.appendChild(pokemonEl);
}