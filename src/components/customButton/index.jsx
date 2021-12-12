import "./styles.scss";

const CustomButton = ({ text, className, onClick }) => {
	return (
		<button onClick={onClick} className={`customButton ${className}`}>
			{text}
		</button>
	);
};

export default CustomButton;
