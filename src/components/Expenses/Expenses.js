import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseChart from "./ExpensesChart";

export default function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("");

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<div className="expenses">
				<ExpensesFilter onChangeFilter={filterChangeHandler} />
				<ExpenseChart expense={filteredExpenses} />
				<ExpenseList items={filteredExpenses} />
			</div>
		</div>
	);
}
