'use strict'

const getFirst = async (url="https://pokeapi.co/api/v2/pokemon?offset=0&limit=151") => {
    try {
        const response = await fetch(url);
        const {results : pokemons} = await response.json();
        return pokemons;
    } catch (error) {
        console.error(error);
    }
};
const buscador = async() => {
    const {value: nombre} = document.getElementById("searchName");
    const pokemons = await getFirst();
    const pokemonInList = pokemons.find(pokemonInList => pokemonInList.name === nombre);
    // const porPantalla = `
    //     <strong>Name:</strong> ${pokemonInList.name}<br/>
    //     <strong>Type:</strong> Water<br/>
    //     <strong>Height:</strong> 2'072''<br/>
    //     <strong>Weight:</strong> 43.2 lbs.<br/><br/>
    //     <strong>The duck Pokemon</strong><br/>
    //     Uses mysterious powers to perform various attacks.
    //     `;
    // document.getElementById('stats').insertAdjacentHTML('beforeend',porPantalla);
    console.log(pokemonInList.url);
    return pokemonInList.url;
    
};
const getSecond = async(url=`"${pokemonInList.url}"`) => {
        try {
            const response = await fetch(url);
            const info = await response.json()
            return info;
        } catch (error) {
            console.error(error);
        };
    };
    const mostrar = async () => {
        console.log (info.height);
    };




