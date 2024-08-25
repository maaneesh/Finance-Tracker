import React, { useContext, useState } from "react";
import { MoneyContext } from "../MoneyContext";

function SavingsView() {
  const { totalIncome, totalExpenses } = useContext(MoneyContext);
  const savings = totalIncome - totalExpenses;

  const [savingGoals, setSavingGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({ amount: "", description: "" });

  const addGoal = () => {
    if (newGoal.amount.trim() !== "" && newGoal.description.trim() !== "") {
      setSavingGoals([...savingGoals, newGoal]);
      setNewGoal({ amount: "", description: "" });
    }
  };

  return (
    <div className="card card-compact m-4 bg-base-100 w-96 shadow-xl">
      <div className="card-title text-4xl font-normal">
        <h2>Savings</h2>
      </div>
      <div className="card-body font-normal">
        <h2>Total Savings</h2>
        <p>${savings.toFixed(2)}</p>
        <h2>Saving Goals</h2>
        <ul>
          {savingGoals.map((goal, index) => (
            <li key={index}>
              {goal.description}: ${goal.amount} -{" "}
              {savings >= parseFloat(goal.amount) ? "Met" : "Not Met"}
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newGoal.description}
          onChange={(e) =>
            setNewGoal({ ...newGoal, description: e.target.value })
          }
          placeholder="Enter goal description"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          value={newGoal.amount}
          onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
          placeholder="Enter goal amount"
          className="input input-bordered w-full max-w-xs mt-2"
        />
        <button onClick={addGoal} className="btn btn-primary mt-2">
          Add Goal
        </button>
      </div>
    </div>
  );
}

export default SavingsView;
