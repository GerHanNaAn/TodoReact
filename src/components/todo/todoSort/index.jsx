import CustomButton from "@/components/customButton";

import "./styles.scss";

const TodoSort = ({ className, setSort }) => {
	const sortTodos = (arg) => {
		setSort(arg);
	};

	return (
		<div className={`todoSort ${className}`}>
			<CustomButton
				className="todoSort__btn"
				text="Все"
				onClick={() => sortTodos("all")}
			/>
			<CustomButton
				className="todoSort__btn"
				text="Выполненно"
				onClick={() => sortTodos(true)}
			/>
			<CustomButton
				className="todoSort__btn"
				text="Не выполненно"
				onClick={() => sortTodos(false)}
			/>
		</div>
	);
};

export default TodoSort;
