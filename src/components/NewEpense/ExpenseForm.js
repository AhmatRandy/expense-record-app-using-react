import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = props => {

	const [form, setForm] = useState({
		title: "",
		amount: "",
		date: ""
	})

	const submitHandler = event => {
		event.preventDefault();
		props.onSaveDataHandler(form);
		setForm({
			title: "",
			amount: "",
			date: ""
		})
	};


	const handleChange = (e) => {
		console.log(e.target)
		const data = {...form}
		if(e.target.name === "date"){
			data[e.target.name] = new Date(e.target.value)
		}else{
			data[e.target.name] = e.target.value
		}
		console.log(e.target.name)
		setForm(data)
		// console.log(form)
	}

	// const titleHandler = event => {
	// 	setForm((prevState) => ({
	// 		...prevState,
	// 		title: event.target.value,
	// 	}));
	// };

	// const amountHandler = event => {
	// 	setForm((prevState) => ({
	// 		...prevState,
	// 		amount: event.target.value,
	// 	}));
	// };
	

	// const dateHandler = event => {
	// 	setForm((prevState) => ({
	// 		...prevState,
	// 		date:new Date(event.target.value)
	// 	}));
	// };
	

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input 	name="title" type="text" onChange={(e) => handleChange (e)} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						name="amount"
						type="number"
						min="0.01"
						step="0.01"
						onChange={(e) => handleChange (e)}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						name="date"
						min="2019-01-10"
						max="2022"
						onChange={(e) => handleChange (e)}
						// value={form.date}
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
