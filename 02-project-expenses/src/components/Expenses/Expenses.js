import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2021");

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === +filteredYear
  );

  const changeFilterHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList listData={filteredExpenses} selectedYear={filteredYear} />
    </Card>
  );
};

export default Expenses;
