import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

//define max budget
const BUDGET_MAX_VALUE = 20000;

const Budget = () => {
  //get global state from redux state
  const { budget, expenses, currency, dispatch } = useContext(AppContext);

  //get total expenses
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  //handle increase or decrease budget
  const onChangeBudgetHandler = (event) => {
    //convert input into number type
    const enteredValue = Number(event.target.value);

    // check if the entered value is a number
    if (Number.isNaN(enteredValue)) {
      alert("Please enter a valid number.");
      return;
    }

    // check if the entered value is an integer number
    if (!Number.isInteger(enteredValue)) {
      alert("Please enter an integer number.");
      return;
    }

    // check if the budget value < total expenses
    if (enteredValue < totalExpenses) {
      alert(
        "The value of the buget can't be lower than the expenses value " +
          currency +
          totalExpenses
      );
    } else {
      if (enteredValue > BUDGET_MAX_VALUE) {
        alert("Please enter a value less that " + BUDGET_MAX_VALUE);
        return;
      }
      //action dispatch function, sent type and payload to reducer
      dispatch({
        type: "SET_BUDGET",
        payload: enteredValue,
      });
    }
  };

  return (
    <div
      className="alert alert-secondary"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <label htmlFor="budget"> Budget:</label>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>{currency}</span>
        <input
          required="required"
          type="number"
          id="budget"
          value={budget}
          step="10"
          onChange={onChangeBudgetHandler}
        ></input>
      </div>
    </div>
  );
};

export default Budget;
