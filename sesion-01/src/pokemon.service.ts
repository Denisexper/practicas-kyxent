import axios from "axios"
import { PokemonI } from "./poke.interface"

export const getAllPokemons = async () : Promise<PokemonI[]> => {

    try {

        const response = await axios.get("https://pokeapi.co/api/v2/pokemon")

        return response.data.results  //results es el objeto que de la poke api al que accedemos para que accedamos a los pokemones

        
    } catch (error) {
        
        throw new Error(`${error}`)
    }
}

const initServices = async () => {
    const pokemonList = await getAllPokemons()

    pokemonList.forEach(async (pokemon) => {
        // console.log(pokemon.name)
        // console.log(pokemon.url)

        const response = await axios.get(pokemon.url)  //accedimos a la url que esta dentro del objeto de cada pokemon

        // console.log(response.data.weight)
    })
}

initServices();

const numbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//for of: agarra una variable la cual globarmente se combierte en cada elemento del array y los va sacando uno por uno
for(let num of numbers) {

    console.log(num)
}

//este bucle ya no es muy usado
// for (let x = 0; x < 10; x++){
//     console.log(x)
// }