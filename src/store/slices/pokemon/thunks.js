import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
// thunk es una funcion que regresa una tarea (funcion)  asincrona cuando se resuelva
// va a ejecutar los dispatch

/**
 *  linea 5 : despacha otra accion , getState obtenemos todo el estado root
 *  linea 6 : despacha la funcion startLoadingPokemons , vuelve true isLoading
 *  linea 7 : nos trae informacion de la API y espera a que se consigan los datos
 *  linea 8 : despachamos  la funcion que setea los datos en el estado y vuelve isLoading false
 */
