import React, { useState } from "react";

function RecentTransactions() {
  const [transaction, setTransaction] = useState([
    "transaction 1",
    "transaction 2",
    "transaction 3",
    "transaction 4",
    "transaction 5",
    "transaction 6",
    "transaction 7",
    "transaction 8",
    "transaction 9",
  ]);
  return (
    <>
      <div>
        <h2>Recent Transactions</h2>
        {transaction.map((item, index) => (
          <p key={index}>{item} </p>
        ))}
      </div>
      ;
    </>
  );
}

export default RecentTransactions;
