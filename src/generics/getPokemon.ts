import axios from "axios";
import { Pokemon } from '../interfaces/Pokemon';

export const getPokemon = async( pokemonId: number ): Promise<Pokemon> => {
    const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);
    const { data } = resp;

    return data;
}