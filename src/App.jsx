import React, { createContext, useContext, useState } from "react";
import Category from "./components/categories";
import Header from "./components/header";
import AddTransaction from "./components/addTransaction";

const moneyContext = createContext();

function App() {
  const [transaction, setTransaction] = useState([]);

  const addTransaction = (newTransaction) => {
    console.log("addTransaction called");

    setTransaction([...transaction, newTransaction]);
  };

  return (
    <>
      <Header />
      <moneyContext.Provider value={{ transaction, addTransaction }}>
        {/* <Wallet title={"Leather"} /> */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-around">
          <Category title="Income" />
          <Category title="Expense" />
          <Category title="Savings" />
        </div>
        <div>
          <AddTransaction />
        </div>
      </moneyContext.Provider>
    </>
  );
}

export default App;

export { moneyContext };
