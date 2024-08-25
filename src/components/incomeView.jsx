import React, { useContext, useState } from "react";
import { MoneyContext } from "../MoneyContext";

function IncomeView() {
  const { incomeTransactions, setIncomeTransactions } =
    useContext(MoneyContext);
  const [newTransaction, setNewTransaction] = useState({
    amount: "",
    description: "",
  });

  const addTransaction = () => {
    if (
      newTransaction.amount.trim() !== "" &&
      newTransaction.description.trim() !== ""
    ) {
      setIncomeTransactions([...incomeTransactions, newTransaction]);
      setNewTransaction({ amount: "", description: "" }); // Clear the input fields after adding the transaction
    }
  };

  return (
    <div className="card card-compact m-4 bg-base-100 w-96 shadow-xl">
      <div className="card-title text-4xl font-normal">
        <h2>Income</h2>
      </div>
      <div className="card-body font-normal">
        <h2>Transactions</h2>
        <ul>
          {incomeTransactions.map((transaction, index) => (
            <li key={index}>
              {transaction.description}: ${transaction.amount}
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newTransaction.description}
          onChange={(e) =>
            setNewTransaction({
              ...newTransaction,
              description: e.target.value,
            })
          }
          placeholder="Enter description"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          value={newTransaction.amount}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, amount: e.target.value })
          }
          placeholder="Enter amount"
          className="input input-bordered w-full max-w-xs mt-2"
        />
        <button onClick={addTransaction} className="btn btn-primary mt-2">
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default IncomeView;
