import { moneyContext } from "../App";
import { currencyFormatter } from "../utils";
import { useContext, useState } from "react";

function Category({ title }) {
  const { transaction, addTransaction } = useContext(moneyContext);

  return (
    <div className="card card-compact m-4  bg-base-100 w-96 shadow-xl">
      <div className="card-title text-4xl font-normal">
        <h2>Category: {title}</h2>
      </div>
      <div className="card-body font-normal"></div>
      <h2>Transactions</h2>
      <p>{transaction}</p>
    </div>
  );
}

export default Category;
