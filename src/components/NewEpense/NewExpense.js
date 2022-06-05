import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
	const [show, setShow] = useState(false);

	const saveDataHandler = expenseEntered => {
		const expenseData = {
			...expenseEntered,
			id: Math.random().toString(),
		};
		props.onAddExpenseHandler(expenseData);
		setShow(false);
	};

	const clickButton = () => {
		setShow(true);
	};

	const clickCancel = () => {
		setShow(false);
	};

	return (
		<div className="new-expense">
			{!show && <button onClick={clickButton}>Add Expense</button>}
			{show && (
				<ExpenseForm
					onSaveDataHandler={saveDataHandler}
					onCancel={clickCancel}
				/>
			)}
		</div>
	);
}

export default NewExpense;
