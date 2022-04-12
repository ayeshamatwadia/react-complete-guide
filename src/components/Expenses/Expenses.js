import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={year}
          onUpdateFilter={yearUpdateHandler}
        ></ExpensesFilter>
        <ExpensesList filteredArray={filteredArray}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
