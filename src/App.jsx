import React, { createContext, useContext, useState } from "react";
import Category from "./components/categories";
import Header from "./components/header";
import AddTransaction from "./components/addTransaction";
import IncomeView from "./components/incomeView";
import ExpenseView from "./components/expenseView";
import SavingsView from "./components/savingsView";

const moneyContext = createContext();

function App() {
  const [transactionsList, setTransactionsList] = useState([]);

  const addTransaction = (newTransaction) => {
    console.log("addTransaction called");
    setTransactionsList([...transactionsList, newTransaction]);
  };
  console.log(transactionsList);

  return (
    <>
      <Header />
      <moneyContext.Provider value={{ transactionsList, addTransaction }}>
        <div className="flex flex-col gap-4 md:flex-row md:justify-around"></div>
        <IncomeView />
        <ExpenseView />
        <SavingsView />
      </moneyContext.Provider>
    </>
  );
}

export default App;

export { moneyContext };
