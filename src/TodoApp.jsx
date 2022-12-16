import { useGetTodosQuery } from "./store/slices/apis/todosApi"

export const TodoApp = () => {
	const { data: todos = [], isLoading } = useGetTodosQuery();
	console.log(todos)
	return (
		<>
			<h1>Todo´s - RTK Query</h1>
			<hr />

			<h4>isLoading... {isLoading ? 'True' : 'False'}</h4>
			<pre>...</pre>
			<ul>
				{todos.map(todo => (
					<li key={todo.id}>
						<strong> {todo.completed ? 'DONE' : 'Pending'} </strong>
						{todo.title}
					</li>
				))}
			</ul>
			<button>
				Next Todo
			</button>
		</>
	)
}