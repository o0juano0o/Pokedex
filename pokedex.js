'use strict'
//Proyecto Pokedex

//Primera petición que nos devuelve un json con 2 propiedades: "name" y "url"(con los datos del pokemon nombrado)
const getList = async (url="https://pokeapi.co/api/v2/pokemon?offset=0&limit=800") => {
    try {
        const response = await fetch(url);
        const {results : pokemons} = await response.json();
        return pokemons;
    } catch (error) {
        console.error(error);
    }
};
//Segunda petición realizada a la nueva "url" del pokemon seleccionado
const getPokemon = async(url) => {
    try {
        const response = await fetch(url);
        const info = await response.json()
        return info;
    } catch (error) {
        console.error(error);
    };
};
//consultar url de species para descripcion de pokemon
const getSpecies = async (url) => {
    try {
        const response = await fetch(url);
        const  species = await response.json();
        return species;
    } catch (error) {
        console.error (error);
    }
};

let currentId = 0;

const searchType = ()=>{
   const searchType = document.getElementById("searchOpt").value
   if (searchType == "name"){
    return searchByName();
   }else if (searchType == "id"){
       return searchById();
   }
}

const searchByName = async() => {
    const {value: searchName} = document.getElementById("search");//agarro el nombre buscado
    const pokemonList = await getList();
    const pokemonSelected = pokemonList.find(pokemon => pokemon.name === searchName);
    const pokemon = await getPokemon(pokemonSelected.url);
    const species = await getSpecies(pokemon.species.url)
    console.log(pokemon)
    print(pokemon, species);    
    return currentId = pokemon.id;
};

const searchById = async() => {
    const id = document.getElementById("search").value;
    const pokemonUrl = (`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const pokemon = await getPokemon(pokemonUrl);
    const species = await getSpecies(pokemon.species.url)
    print(pokemon, species);
    console.log (pokemon);
    return currentId = pokemon.id;
};

const next = async() => {
    const id = currentId + 1;
    const pokemonUrl = (`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const pokemon = await getPokemon(pokemonUrl);
    const species = await getSpecies(pokemon.species.url)
    print(pokemon, species);
    return currentId = id;
};

const prev = async() => {
    const id = currentId - 1;
    const pokemonUrl = (`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const pokemon = await getPokemon(pokemonUrl);
    const species = await getSpecies(pokemon.species.url)
    print(pokemon, species);
    return currentId = id;
};

const print = (pokemon, species) =>{
    const tipos = pokemon.types.map(tipo => tipo.type);
    const inScreen =
    `<strong>Nombre:</strong> ${pokemon.name}<br/>
    <strong>Tipo:</strong> ${tipos.map(info => info.name)}<br/>
    <strong>Altura:</strong> ${pokemon.height}<br/>
    <strong>Peso:</strong> ${pokemon.weight}<br/><br/>
    <strong>${species.genera[7].genus}</strong><br/>
    ${species.flavor_text_entries[2].flavor_text}`;

    document.getElementById('stats').innerHTML = '';
    document.getElementById('stats').insertAdjacentHTML('beforeend',inScreen);
    document.getElementById('showId').innerHTML = '';
    document.getElementById('showId').insertAdjacentHTML('beforeend', `ID: ${pokemon.id}`);
    document.getElementById('picture').innerHTML= `<img src = ${pokemon.sprites.other['official-artwork'].front_default} alt="" height="170" />`
};

        

    
//Desestructuring de las propiedades del pokemon
    //const {name, height, weight, species:{url : speciesUrl}, sprites:{other}, types} = pokemon;
    //Species-Descripción
    //const {color, flavor_text_entries: descripcion, genera, shape} = await getSpecies(pokemon.species.url)