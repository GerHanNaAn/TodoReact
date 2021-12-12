import TodoInputText from "@/components/todo/todoInputText";
import TodoItem from "@/components/todo/todoItem";
import TodoSort from "@/components/todo/todoSort";
import { useState, useEffect } from "react";
import uuid from "uuid";

import "./styles.scss";

function Todo() {
	const [todoList, setTodoList] = useState([]);

	const [sortList, setSortList] = useState([...todoList]);

	const [prevListLength, setPrevListLength] = useState(todoList.length);

	useEffect(() => {
		setSortList(todoList);
	}, [todoList]);

	const addTodo = (todoText) => {
		setTodoList((prevState) => {
			setPrevListLength(prevState.length);
		});

		setTodoList([
			{
				text: todoText,
				isDone: false,
				id: uuid(),
			},
			...todoList,
		]);
	};

	const performTodo = (elemId) => {
		setTodoList([
			...todoList.map((item) => {
				if (item.id === elemId) {
					return { ...item, isDone: !item.isDone };
				} else {
					return { ...item };
				}
			}),
		]);
	};

	const removeTodo = (elemId) => {
		setTodoList([...sortList.filter((item) => item.id !== elemId)]);
	};

	const setSort = (sortType) => {
		if (sortType === "all") {
			setSortList(todoList);
		} else {
			let filteredTotolist = [...todoList].filter(
				(item) => item.isDone === sortType
			);
			setSortList(filteredTotolist);
		}
	};

	return (
		<div className="todo">
			<div className="todo__head container">
				<TodoSort className="todo__sort" setSort={setSort} />
				<TodoInputText className="todo__input" addTodo={addTodo} />
			</div>

			<ul className="todo__list">
				{sortList.map((item, index) => (
					<li
						className={`todo__listItem ${
							index === 0 && sortList.length !== prevListLength
								? "todo__listItem--added"
								: ""
						}`}
						key={index}
					>
						<TodoItem
							performTodo={performTodo}
							removeTodo={removeTodo}
							todo={{
								text: item.text,
								state: item.isDone,
								id: item.id,
							}}
						/>
					</li>
				))}
			</ul>

			<div className="todo__info container">
				<p className="todo__text">
					Всего:
					<span className="todo__num"> {todoList.length}</span>
				</p>

				<p className="todo__text">
					Всего выполнено:
					<span className="todo__num">
						{" "}
						{todoList.filter((item) => item.isDone).length}
					</span>
				</p>

				<p className="todo__text">
					Всего не выполнено:
					<span className="todo__num">
						{" "}
						{todoList.filter((item) => !item.isDone).length}
					</span>
				</p>
			</div>
		</div>
	);
}

export default Todo;
