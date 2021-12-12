import { useState } from "react";
import "./styles.scss";

const TodoInputText = ({ className, addTodo }) => {
	const [inputText, setInputText] = useState("");

	const typeText = (e) => {
		setInputText(e.target.value);
	};

	const sendTodo = () => {
		let text = inputText.trim().replace(/ +/g, " ");
		if (text !== "" && text.length <= 10) {
			addTodo(text);
			setInputText("");
		}
	};

	return (
		<div className={`todoInputText ${className}`}>
			<input
				className="todoInputText__input"
				onChange={typeText}
				value={inputText}
				type="text"
				placeholder="Введите название задачи"
			/>
			{inputText.length >= 10 && (
				<p className="todoInputText__error">Не больше 10 знаков</p>
			)}
			<button className="todoInputText__btn" onClick={sendTodo}>
				➕
			</button>
		</div>
	);
};

export default TodoInputText;
