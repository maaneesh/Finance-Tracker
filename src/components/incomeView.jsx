import React, { useContext, useState } from "react";
import { MoneyContext } from "../MoneyContext";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

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
      setNewTransaction({ amount: "", description: "" });
    }
  };

  const pieData = {
    labels: incomeTransactions.map((transaction) => transaction.description),
    datasets: [
      {
        data: incomeTransactions.map((transaction) =>
          parseFloat(transaction.amount)
        ),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
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
        <h2>Income Distribution</h2>
        <Pie data={pieData} />
      </div>
    </div>
  );
}

export default IncomeView;
