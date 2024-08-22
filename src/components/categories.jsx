import SavingsContext, { IncomeContext } from "../contexts/Contexts";
import BudgetContext from "../contexts/Contexts";
import { currencyFormatter } from "../utils";
import { useContext } from "react";

function Categories({ name, amount, max }) {
  const budget = useContext(BudgetContext);
  const savings = useContext(SavingsContext);
  console.log({ savings });

  return (
    <>
      <div className="card card-compact m-4  bg-base-100 w-96 shadow-xl">
        <div className="card-title text-4xl font-normal">
          <h2>Category: {name}</h2>
        </div>
        <div className="card-body font-normal">
          <span className="ms-1 text-2xl  ">
            {/* Amount: {currencyFormatter.format(amount)}/ Max:
            {currencyFormatter.format(max)}
            Savings: {budget.value} */}
            Goal: {currencyFormatter.format(max)}
          </span>
          <p>{amount}</p>
        </div>
        <div className="btn font-bold">
          <AddPay />
        </div>
      </div>
    </>
  );
}

const AddPay = () => {
  //Add pay button should trigger this function
  // this should increase the income by $500
  const income = useContext(IncomeContext);
  console.log({ income });

  return (
    <>
      <button onClick={() => income.handlePay(income.pay + 500)}>Add</button>
    </>
  );
};

export default Categories;
