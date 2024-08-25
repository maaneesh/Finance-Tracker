import React, { useState } from "react";
import Header from "./components/header";
import IncomeView from "./components/incomeView";
import ExpenseView from "./components/expenseView";
import SavingsView from "./components/savingsView";
import { MoneyProvider } from "./MoneyContext";

function App() {
  return (
    <>
      <Header />

      <MoneyProvider>
        <div className="flex flex-col gap-4 md:flex-row md:justify-around">
          <IncomeView />
          <ExpenseView />
          <SavingsView />
        </div>
      </MoneyProvider>
    </>
  );
}

export default App;
