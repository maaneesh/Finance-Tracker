import React from "react";
import { useState } from "react";

function ContextProvider({ children }) {
  const [income, setIncome] = useState(0);

  return (
    <>
      <IncomeContext.Provider value={{ income: setIncome }}>
        {children}
      </IncomeContext.Provider>
    </>
  );
}

export default ContextProvider;
