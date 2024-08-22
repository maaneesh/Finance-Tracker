import React from "react";
import { useState } from "react";
import ToDoList from "./toDoList";
import Header from "./components/header";
import CurrentBalance from "./currentBalance";
import RecentTransactions from "./recentTransactions";
import Categories from "./components/categories";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <CurrentBalance />
        <Categories name={"Shopping"} amount={420} max={1000} />
        <Categories name={"Entertainment"} amount={400} max={500} />
        <Categories name={"Groceries and food"} amount={600} max={1200} />
      </div>
    </>
  );
}

export default App;
