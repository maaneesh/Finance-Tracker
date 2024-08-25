import React, { useContext } from "react";
import { MoneyContext } from "../MoneyContext";

function IncomeView() {
  const { incomeTransactions, setIncomeTransactions } =
    useContext(MoneyContext);

  const addTransaction = () => {
    setIncomeTransactions([...incomeTransactions, "New Transaction"]);
  };

  console.log(incomeTransactions);

  return (
    <div className="card card-compact m-4  bg-base-100 w-96 shadow-xl">
      <div className="card-title text-4xl font-normal">
        <h2> Income</h2>
      </div>
      <div className="card-body font-normal"></div>
      <h2>Transactions</h2>
      <p>{incomeTransactions}</p>
      <button onClick={addTransaction}>Add Transaction</button>
    </div>
  );
}

export default IncomeView;
