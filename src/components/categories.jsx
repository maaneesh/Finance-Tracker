import { currencyFormatter } from "../utils";

function Categories({ name, amount, max }) {
  return (
    <>
      <div className="card card-compact m-4  bg-base-100 w-96 shadow-xl">
        <div className="card-title">
          <h2>Category: {name}</h2>
        </div>
        <div className="card-body">
          <h3>Current usage: {currencyFormatter.format(amount)} </h3>
          <h3>Max: {currencyFormatter.format(max)} </h3>
        </div>
      </div>
    </>
  );
}

export default Categories;
