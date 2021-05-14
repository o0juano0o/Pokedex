'use strict'
//Proyecto Pokedex

//Primera petición que nos devuelve un json con 2 propiedades: "name" y "url"(con los datos del pokemon nombrado)
const getName = async (url="https://pokeapi.co/api/v2/pokemon?offset=0&limit=151") => {
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
const getSpecies = async (url) => {
    try {
        const response = await fetch(url);
        const species = await response.json();
        return species;
    } catch (error) {
        console.error (error);
    }
}

//Función asincrona que toma los valores de las 2 url y el nombre seleccionado por el usuario (aca deberia agregar otras busquedas)
const buscador = async() => {
    const {value: nombre} = document.getElementById("searchName");
    const pokemonName = await getName();
    const pokemonInList = pokemonName.find(pokemon => pokemon.name === nombre);
    const pokemon = await getPokemon(pokemonInList.url);
    //const descripcion = await getSpecies(speciesUrl.url);

    //Species-Descripción

    //Tipos
    const poketipos = (pokemon.types);
    const tipos = poketipos.map(tipo => tipo.type);
    //Sprites
 
   

    //console.log(imagen);
   
    //Imprimir en pantalla
    const porPantalla =
        `<strong>Nombre:</strong> ${pokemon.name}<br/>
        <strong>Tipo:</strong> ${tipos.map(info => info.name)}<br/>
        <strong>Altura:</strong> ${pokemon.height}<br/>
        <strong>Peso:</strong> ${pokemon.weight}<br/><br/>
        <strong>The duck Pokemon</strong><br/>
        Uses mysterious powers to perform various attacks.`;

        document.getElementById('stats').innerHTML = '';
        document.getElementById('stats').insertAdjacentHTML('beforeend',porPantalla);
       // document.getElementById('picture').innerHTML= <img src="" alt="" height="170" />
        return pokemon;
    
};





        

    
