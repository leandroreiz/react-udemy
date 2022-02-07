import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Marshall Origin 20H",
    amount: 398.0,
    date: new Date(2023, 10, 29),
  },
  {
    id: "e2",
    title: "Ibanez Prestige Black & Gold",
    amount: 2199.49,
    date: new Date(2022, 10, 29),
  },
  {
    id: "e3",
    title: "Ampero Stomp II",
    amount: 499,
    date: new Date(2022, 2, 12),
  },
  {
    id: "W7143002",
    title: "PRS SE Custom 24 Floyd Charcoal Burst",
    amount: 1115.29,
    date: new Date(2021, 7, 20),
  },
  {
    id: "W7097991",
    title: "Guitar Tuner, Capo, Strap and Picks",
    amount: 107.96,
    date: new Date(2021, 7, 6),
  },
  {
    id: "M7091217",
    title: "Jackson DKA-R EX Snow White",
    amount: 750.1,
    date: new Date(2021, 6, 20),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
