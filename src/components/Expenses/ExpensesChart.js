import Chart from "../Chart/Chart";

const ExpenseChart = props => {
	const chartDataPoints = [
		{ label: "Jan", value: 0 },
		{ label: "Feb", value: 0 },
		{ label: "March", value: 0 },
		{ label: "April", value: 0 },
		{ label: "Mei", value: 0 },
		{ label: "Juni", value: 0 },
		{ label: "Jul", value: 0 },
		{ label: "August", value: 0 },
		{ label: "Sept", value: 0 },
		{ label: "Okt", value: 0 },
		{ label: "Nov", value: 0 },
		{ label: "Des", value: 0 },
	];

	for (const expense of props.expense) {
		const expenseMonth = expense.date.getMonth();
		chartDataPoints[expenseMonth].value += expense.amount;
	}

	return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
