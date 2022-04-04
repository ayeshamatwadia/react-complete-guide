import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const filteredArray = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  const yearUpdateHandler = (selectedYear) => {
    console.log(selectedYear);
    setYear(selectedYear);
  };

  let expensesContent = <p>No expenses found.</p>;

  if(filteredArray.length > 0 ){
      expensesContent = filteredArray.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.id}
          expenseItemDate={expenseItem.date}
          expenseItemDescription={expenseItem.title}
          expenseItemPrice={expenseItem.amount}
        ></ExpenseItem>
      ));
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={year}
          onUpdateFilter={yearUpdateHandler}
        ></ExpensesFilter>
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
