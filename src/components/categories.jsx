import { currencyFormatter } from "../utils";

function Categories({ name, amount, max }) {
  return (
    <>
      <div className="card card-compact m-4  bg-base-100 w-96 shadow-xl">
        <div className="card-title text-4xl font-normal">
          <h2>Category: {name}</h2>
        </div>
        <div className="card-body font-normal">
          <span className="ms-1 text-2xl  ">
            Amount: {currencyFormatter.format(amount)}/ Max:
            {currencyFormatter.format(max)}
          </span>
        </div>
        <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
          <div className="h-1 bg-primary"></div>
        </div>
      </div>
    </>
  );
}

export default Categories;
