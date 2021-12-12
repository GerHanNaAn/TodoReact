import "./styles.scss";

const TodoItem = ({ todo, performTodo, removeTodo }) => {
	const setCheked = () => {
		performTodo(todo.id);
	};

	const removeItem = () => {
		removeTodo(todo.id);
	};

	return (
		<div className={`todoItem ${todo.state ? "todoItem--done" : ""}`}>
			<button
				className={`todoItem__text ${
					todo.state ? "todoItem__text--done" : ""
				}`}
				onClick={setCheked}
			>
				{todo.text}
			</button>

			<button className="todoItem__btn" onClick={removeItem}>
				╳
			</button>
		</div>
	);
};

export default TodoItem;
