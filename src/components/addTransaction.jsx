import React, { useState, useContext } from "react";
import { moneyContext } from "../App";

function AddTransaction() {
  const { addTransaction } = useContext(moneyContext);
  const [transaction, setTransaction] = useState({
    type: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (transaction.amount && transaction.type) {
      addTransaction(transaction);
      setTransaction({ type: "", amount: "", description: "" });
    }
  };

  console.log(transaction);

  return (
    <>
      <h2>Add Transaction</h2>
      <form>
        <input
          type="text"
          name="type"
          value={transaction.type}
          onChange={handleChange}
          placeholder="Type"
          className="p-2 mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
        />
        <input
          type="number"
          name="amount"
          value={transaction.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="p-2 mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
        />
        <input
          type="text"
          name="description"
          value={transaction.description}
          onChange={handleChange}
          placeholder="Description"
          className="p-2 mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
        />
        <button onClick={handleAddTransaction} className="btn">
          ADD
        </button>
      </form>
    </>
  );
}

export default AddTransaction;
