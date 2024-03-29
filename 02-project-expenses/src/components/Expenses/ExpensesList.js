import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.listData.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        Found no expenses in {props.selectedYear}!
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.listData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
