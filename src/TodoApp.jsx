import { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/slices/apis/todosApi"


export const TodoApp = () => {
	const [todoId, setTodoId] = useState(1) //estado en 1
	const { data: todo, isLoading } = useGetTodoQuery(todoId); // extraemos la data que llamamos todo y el isLoading lo devuelve la Api

	return (
		<>
			<h1>Todo´s - RTK Query</h1>
			<hr />

			<h4>isLoading... {isLoading ? 'True' : 'False'}</h4> {/* si esta cargando es verdadero si termina de cargar es falso */}
			<pre>{JSON.stringify(todo)}</pre>
			<pre>{/* page */}</pre>
			{/* <ul>
				{todos.map(todo => (
					<li key={todo.id}>
						<strong> {todo.completed ? 'DONE' : 'Pending'} </strong>
						{todo.title}
					</li>
				))}
			</ul> */}
			<button onClick={() => { setTodoId(todoId + 1) }}> {/* sumamos 1 al id */}
				Next Todo
			</button>
			<button onClick={() => {
				if (todoId === 1) return /* si es igual a 1 no hacemos nada */
				setTodoId(todoId - 1) /* sino restamos 1 */
			}}>
				Prev Todo
			</button>
		</>
	)
}
