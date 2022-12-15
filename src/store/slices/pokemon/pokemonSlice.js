import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon", // nombre del slice
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false, // valores iniciales
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true; // cargando en verdadero
    },
    setPokemons: (state, action) => {
      state.isLoading = false; // termino de cargar
      state.page = action.payload.page; // pagina
      state.pokemons = action.payload.pokemons; // pokemons
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

/**
|--------------------------------------------------
| linea 3  : creamos un slice con un objeto  , que tiene como estado inicia 
| linea 10 : creamos los reducers , aceptan estados , donde el isLoading es verdadero
| linea 14 : creamos un reductor que acepte una accion 
| linea 22 : exportamos los reductores
|--------------------------------------------------
*/
