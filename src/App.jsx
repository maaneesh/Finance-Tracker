import React, { createContext, useContext } from "react";
import Category from "./components/categories";
import Header from "./components/header";
import Savings from "./components/savings";
import IncomeProvider from "./contexts/incomeContext";
import Wallet from "./components/wallet";

const moneyContext = createContext({
  cash: 500,
  cards: ["Apple Card", "Chase", "Discover"],
  addToCards: () => {},
});

function App() {
  const { cash, cards } = useContext(moneyContext);

  return (
    <>
      <Header />
      <moneyContext.Provider value={{ cash, cards }}>
        <Wallet title={"Leather"} />
        <div className="flex flex-col gap-4  md:flex-row md:justify-between ">
          <Category type="Income" amount={500} />
          <Category type="Expense" amount={600} />
          <Category type="Savings" amount={600} />
        </div>
      </moneyContext.Provider>
    </>
  );
}

export default App;

export { moneyContext };
