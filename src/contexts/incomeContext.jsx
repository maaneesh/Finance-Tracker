import { createContext, useContext, useState } from "react";
import Category from "../components/categories";

export const IncomeContext = createContext();

const IncomeProvider = () => {
  const [income, setIncome] = useContext();
  return (
    <>
      <IncomeContext.Provider value={income}></IncomeContext.Provider>
    </>
  );
};

export default IncomeProvider;
