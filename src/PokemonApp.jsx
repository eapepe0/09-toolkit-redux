import { React, useEffect } from "react";
import { getPokemons } from "./store/slices/pokemon/thunks";
import { useDispatch, useSelector } from 'react-redux'

export const PokemonApp = () => {
	const dispatch = useDispatch();
	const { isLoading, pokemons, page } = useSelector(state => state.pokemon)

	useEffect(() => {
		dispatch(getPokemons(0)) // llamamos el thunks con el 0 , seria la pagina
	}, [])

	return (
		<>
			<h1>PokemonApp</h1>
			<hr />
			<span> Loading : {isLoading ? 'True' : 'False'}</span>
			<ul>
				{pokemons.map(({ name }) => <li key={name}>{name}</li>)}
			</ul>
			<button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}> Click </button>
		</>
	);
};

/**
 * linea 6 : usamos el useDispatch
 * linea 7 : extraemos el isLoading , pokemons , page del estado de pokemon
 * 
 * ejemplo del estado :
 * {
  counter: {
	counter: 10
  },
  pokemon: {
	page: 5,
	pokemons: [
	  {
		name: 'bulbasaur',
		url: 'https://pokeapi.co/api/v2/pokemon/1/'
	  }
	  ...
	],
	isLoading: false
  }
}
 linea 9 : con el useEffect se dispara el reducer , getPokemons la primera vez que se renderiza 
 */