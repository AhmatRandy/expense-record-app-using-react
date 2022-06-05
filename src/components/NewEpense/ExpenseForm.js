import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = props => {
	// state
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEntereAmount] = useState("");
	const [enteredDate, setEntereDate] = useState("");

	const submitHandler = event => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveDataHandler(expenseData);
		setEnteredTitle("");
		setEntereDate("");
		setEntereAmount("");
	};

	const titleHandler = event => {
		setEnteredTitle(event.target.value);
	};

	const amountHandler = event => {
		setEntereAmount(event.target.value);
	};

	const dateHandler = event => {
		setEntereDate(event.target.value);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleHandler} value={enteredTitle} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountHandler}
						value={enteredAmount}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-10"
						max="2022"
						onChange={dateHandler}
						value={enteredDate}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={props.onCancel} type="button">
					Cancel
				</button>
				<button type="submit">Add expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
