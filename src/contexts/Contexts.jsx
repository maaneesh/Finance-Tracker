import React, { createContext } from "react";

const SavingsContext = createContext({ totalSavings: 0 });

export const IncomeContext = createContext({ income: 4500, taxes: 200 });
export const ExpenseContext = createContext({
  rent: 1800,
  groceries: 600,
  entertainment: 300,
  clothes: 400,
});

export default SavingsContext;
