import React from "react";

interface ExpenseData {
  expensedata: any;
}
const ExpenseViewer: React.FC<ExpenseData> = ({ expensedata }) => {
  return (
    <section className="s-1 mt-5">
      <div className="content">
        <h3>Transactions :</h3>
      </div>
      <div className="t-list">
        <ul className="list-s">
          {expensedata.length != 0 ? (
            expensedata.map((expensedata, index) => (
              <li key={index} className={expensedata.expensecolor}>
                {expensedata.expensedt}
              </li>
            ))
          ) : (
            <li className="n-data">No Data Found</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default ExpenseViewer;
