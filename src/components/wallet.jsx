import React, { useContext } from "react";
import { moneyContext } from "../App";

function Wallet({ title }) {
  const { cash, cards } = useContext(moneyContext);

  return (
    <>
      <div className="card card-compact m-4  bg-base-100 w-96 shadow-xl">
        <div className="card-title text-4xl font-normal"></div>

        <h2>{title} Wallet</h2>
        <p>In my wallet I have:{cards} </p>
        <p>In my wallet I have:{cash} </p>
      </div>
    </>
  );
}

export default Wallet;
