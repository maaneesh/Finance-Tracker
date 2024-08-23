import React, { useContext } from "react";

function Savings() {
  return (
    <div className="card card-compact m-4  bg-base-100 w-96 shadow-xl">
      <div className="card-title text-4xl font-normal">
        <h2>Savings</h2>
      </div>
      <div className="card-body font-normal">
        <span className="ms-1 text-2xl  ">
          {/* Total: {currencyFormatter.format(amount)} */}
          Total:
        </span>
      </div>
    </div>
  );
}

export default Savings;
