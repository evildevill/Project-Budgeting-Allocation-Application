import React, { useContext } from "react";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  //get current global state
  const { currency, dispatch } = useContext(AppContext);

  //update global state
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  //increase allocation found
  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  //decrease allocation found
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <FaPlusCircle
          size="1.9em"
          color="#4ead5c"
          onClick={(event) => increaseAllocation(props.name)}
        ></FaPlusCircle>
      </td>
      <td>
        <FaMinusCircle
          size="1.9em"
          color="#af1e11"
          onClick={(event) => decreaseAllocation(props.name)}
        ></FaMinusCircle>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
