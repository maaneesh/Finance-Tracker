import { createContext, useState } from "react";

const MoneyContext = createContext();

const MoneyProvider = ({ children }) => {
  const [incomeTransactions, setIncomeTransactions] = useState([]);

  return (
    <MoneyContext.Provider
      value={{ incomeTransactions, setIncomeTransactions }}
    >
      {children}
    </MoneyContext.Provider>
  );
};

export { MoneyContext, MoneyProvider };
