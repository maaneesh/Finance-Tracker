import React, { useState, useContext } from "react";
import { moneyContext } from "../App";

function AddTransaction() {
  const [type, setTransactionType] = useState("");
  const [description, setDesctiption] = useState("");
  const [amount, setAmount] = useState("");
  const [transaction, setTransaction] = useState("");

  //How do i add this transaction to the money context
  //import context
  const { transactionList, AddTransaction } = useContext(moneyContext);
  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault(); // 👈️ prevent page refresh

    // // 👇️ Access input values here
    // console.log("firstName 👉️", type);
    // console.log("lastName 👉️", description);
    // console.log("amount 👉️", amount);

    setTransaction(`${type} ${description} ${amount}`);
    console.log(transaction);

    // 👇️ Clear all input values in the form
    setTransactionType("");
    setDesctiption("");
    setAmount("");
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          id="transaction-type"
          name="description"
          type="text"
          placeholder="Type"
          onChange={(event) => setTransactionType(event.target.value)}
          value={type}
        />

        <br />
        <input
          id="description"
          name="description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDesctiption(event.target.value)}
        />
        <br />
        <input
          id="amount"
          name="amount"
          type="number"
          placeholder="$"
          value={amount}
          onChange={(event) => setAmount(parseFloat(event.target.value))}
        />

        <button className="btn p-2" type="submit">
          Submit form
        </button>
      </form>
      <h2>{transaction}</h2>
    </div>
  );
}

export default AddTransaction;
