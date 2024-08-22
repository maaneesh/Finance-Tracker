import React from "react";
import { IncomeContext } from "../contexts/Contexts";
import { useContext } from "react";

function Income() {
  const salary = useContext(IncomeContext);
  // const taxesPaid = salary.taxes;
  // console.log(salary.income);

  return <div></div>;
}

export default Income;
