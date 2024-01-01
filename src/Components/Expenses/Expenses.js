import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpenseFiltre from "./ExpenseFiltre";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFiltre
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList item={filteredExpenses}></ExpenseList>
    </Card>
  );
};

export default Expenses;
