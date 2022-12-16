import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./slices/apis/todosApi";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

/**
|--------------------------------------------------
| el middleware no es mas que una funcion que se ejecuta antes que otra
|--------------------------------------------------
*/
