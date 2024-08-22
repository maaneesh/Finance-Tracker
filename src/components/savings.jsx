import React from "react";
import { useContext } from "react";
import BudgetContext from "../contexts/Contexts";
import { IncomeContext } from "../contexts/Contexts";
import Income from "./income";

function Savings() {
  const budget = useContext(BudgetContext);
  const totalSavings = budget.value;
  return (
    <div>
      <div className="m-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        <h2> Savings </h2>

        <div className="card-title text-2xl">
          <h2>Current Balance:{totalSavings} </h2>
        </div>
        <div className="card-body text-2xl">
          <AddSavings />
          <DeductSavings />
        </div>
      </div>
    </div>
  );
}

const AddSavings = () => {
  const budget = useContext(BudgetContext);

  return (
    <div className="btn">
      <button onClick={() => budget.handleValue(budget.value + 500)}>
        Add 500
      </button>
    </div>
  );
};

const DeductSavings = () => {
  const budget = useContext(BudgetContext);

  return (
    <div className="btn">
      <button onClick={() => budget.handleValue(budget.value - 500)}>
        Reduce 500
      </button>
    </div>
  );
};

export default Savings;
