import { getPokemon } from "../generics/getPokemon";

getPokemon(1)
    .then( pokemon => console.log( pokemon.abilities ) )
    .catch( error => console.log( error ) )
    .finally( () => console.log('Fin del getPokemon()') );