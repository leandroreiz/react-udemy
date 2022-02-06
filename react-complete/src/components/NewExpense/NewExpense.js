// NewExpenses.js
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const toggleIsEditing = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  };

  const newExpensesPanel = isEditing ? (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={toggleIsEditing}
      />
    </div>
  ) : (
    <div className="new-expense">
      <button onClick={toggleIsEditing}>Add New Expense</button>
    </div>
  );

  return newExpensesPanel;
};

export default NewExpense;
