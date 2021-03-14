import React from "react";
import { useState, useEffect } from "react";
import ExpenseManage from "./ExpenseManage";
import ExpenseViewer from "./ExpenseViewer";

let arr: any[] = new Array();
const App = () => {
  const [balance, setBalance] = useState(0);
  const cb = (data: any, amount: any, state: string, colorcls: string) => {
    arr = [
      ...arr,
      {
        expensedt: data,
        balanceamount: amount,
        expensestate: state,
        expensecolor: colorcls
      }
    ];
    setBalance(amount);
  };
  return (
    <div className="container">
      <div className="ht-o-0">
        <h2 className="ta-c">Expense Tracker - Basic</h2>
      </div>
      <section className="s-0">
        <div className="Header">
          <div className="row">
            <div className="col-md-12">
              <h3 className="ta-c">Balance : {balance} </h3>
              <ExpenseManage lastexpense={balance} callback={cb} />
            </div>
          </div>
        </div>
      </section>
      <ExpenseViewer expensedata={arr} />
    </div>
  );
};

export default App;
