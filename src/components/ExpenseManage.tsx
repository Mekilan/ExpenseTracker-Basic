import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import { idText } from "typescript";

interface IExpenseProps {
  lastexpense: any;
  callback: any;
}

const ExpenseManage: React.FC<IExpenseProps> = ({ lastexpense, callback }) => {
  const [amount, setAmount] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const addClick = () => {
    if (amount === null || isNaN(amount)) {
      setError("Please enter the expense amount value");
      setTimeout(() => {
        setError("");
      }, 3000);
      return false;
    }
    if (amount === 0) {
      setError("Expense amount should not be 0");
      setTimeout(() => {
        setError("");
      }, 3000);
      return false;
    }
    if(amount > 100000)
    {
        setError("Expense maximum amount Exceeds");
      setTimeout(() => {
        setError("");
      }, 3000);
      return false;
    }
    let value = "Add";
    let addcolor = "expenseadd";
    let addedvalue = lastexpense + amount;
    let datevalue = moment().format();
    let concat = datevalue + "-" + ' '+ addedvalue + ' ' + "-" + value;
    callback(concat, addedvalue, value, addcolor);
  };
  
  const removeClick = () => {
    if (amount === null || isNaN(amount)) {
      setError("Please enter the expense amount value");
      setTimeout(() => {
        setError("");
      }, 3000);
      return false;
    }
    if (amount === 0) {
        setError("Expense amount should not be 0");
        setTimeout(() => {
          setError("");
        }, 3000);
        return false;
      }
      if(amount > 100000)
      {
          setError("Expense maximum amount Exceeds");
        setTimeout(() => {
          setError("");
        }, 3000);
        return false;
      }
    if (lastexpense === 0) {
      setError("Expense Balance is 0");
      setTimeout(() => {
        setError("");
      }, 3000);
      return false;
    }
    let value = "Remove";
    let addcolor = "expenseremove";
    let removedvalue = lastexpense - amount;
    let datevalue = moment().format();
    let concat = datevalue + "-" + ' '+ removedvalue + ' ' + "-" + value;
    callback(concat, removedvalue, value, addcolor);
  };

  return (
    <React.Fragment>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          id="quantity"
          name="quantity"
          min="1"
          max="100000"
          onChange={(event) => setAmount(parseInt(event.target.value))}
          value={amount}
        />
        <div className="error">{error}</div>
      </div>
      <div className="ta-c mt-3">
        <button className="btn-primary btn-p" onClick={addClick}>
          Add
        </button>
        <button className="btn-danger btn-p" onClick={removeClick}>
          Remove
        </button>
      </div>
    </React.Fragment>
  );
};

export default ExpenseManage;
