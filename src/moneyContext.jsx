import { createContext, useState } from "react";

const MoneyContext = createContext();

const MoneyProvider = ({ children }) => {
  const [incomeTransactions, setIncomeTransactions] = useState([]);
  const [expenseTransactions, setExpenseTransactions] = useState([]);

  const totalIncome = incomeTransactions.reduce(
    (acc, transaction) => acc + parseFloat(transaction.amount),
    0
  );
  const totalExpenses = expenseTransactions.reduce(
    (acc, transaction) => acc + parseFloat(transaction.amount),
    0
  );

  return (
    <MoneyContext.Provider
      value={{
        incomeTransactions,
        setIncomeTransactions,
        expenseTransactions,
        setExpenseTransactions,
        totalIncome,
        totalExpenses,
      }}
    >
      {children}
    </MoneyContext.Provider>
  );
};

export { MoneyContext, MoneyProvider };
