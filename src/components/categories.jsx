import { moneyContext } from "../App";
import { currencyFormatter } from "../utils";
import { useContext, useState } from "react";

function Category({ type, amount }) {
  const { cash, cards } = useContext(moneyContext);
  return (
    <div className="card card-compact m-4  bg-base-100 w-96 shadow-xl">
      <div className="card-title text-4xl font-normal">
        <h2>Category: {type}</h2>
      </div>
      <div className="card-body font-normal">
        <span className="ms-1 text-2xl  ">
          Total: {currencyFormatter.format(amount)}
        </span>
      </div>
      <div>
        <h2>Wallet has:</h2>
        <p>{cash}</p>
        <p>{cards}</p>
      </div>
    </div>
  );
}

export default Category;
