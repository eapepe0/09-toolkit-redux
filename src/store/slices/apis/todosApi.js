import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos", // nombre
  baseQuery: fetchBaseQuery({
    // base url
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    // los llamamos mediante customhooks
    getTodos: builder.query({
      query: () => "/todos",
    }),
    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
