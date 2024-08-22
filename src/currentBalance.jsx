import React from "react";

function CurrentBalance() {
  const currentBalance = 1230000;
  return (
    <>
      <div className="m-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <div className="card-title text-4xl">
          <h2> Current Balance: </h2>
        </div>
        <div className="card-body text-2xl">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {currentBalance}
          </p>
        </div>
      </div>
    </>
  );
}

export default CurrentBalance;
