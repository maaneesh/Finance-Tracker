import React, { useContext } from "react";
import { useState } from "react";
import Header from "./components/header";
import Savings from "./components/savings";
import RecentTransactions from "./recentTransactions";
import Categories from "./components/categories";
import SavingsContext from "./contexts/Contexts";
import Income from "./components/income";
import { IncomeContext } from "./contexts/Contexts";

function App() {
  const [savings, setSavings] = useState(0);

  const [expenditure, setExpenditure] = useState(5500);
  const [income, setIncome] = useState(0);
  // const [income, setIncome] = useContext(IncomeContext);

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <SavingsContext.Provider
          value={{ value: savings, handleValue: (value) => setSavings(value) }}
        >
          <IncomeContext.Provider
            value={{ pay: income, handlePay: (pay) => setIncome(pay) }}
          >
            <Savings />
            <Categories
              name={"Income"}
              amount={income}
              max={10000}
              savings={savings}
            />
            <Categories
              name={"Expense"}
              amount={5000}
              max={4200}
              savings={savings}
            />
          </IncomeContext.Provider>
        </SavingsContext.Provider>
        <SavingsContext.Provider
          value={{
            value: expenditure,
            handleValue: (value) => setExpenditure(value),
          }}
        ></SavingsContext.Provider>
        {/* <Categories name={"Expenses"} amount={400} max={500} /> */}
      </div>
    </>
  );
}

export default App;
