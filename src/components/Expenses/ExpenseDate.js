import "./ExpenseDate.css";
export default function ExpenseDate(props) {
	const month = props.date.toLocaleString("en-US", { month: "long" });
	const day = props.date.toLocaleString("en-US", { month: "2-digit" });
	const years = props.date.getFullYear();
	console.log(props);
	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__day">{day}</div>
			<div className="expense-date__years">{years}</div>
		</div>
	);
}
