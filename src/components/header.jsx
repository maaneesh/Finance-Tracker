import React from "react";

function Header() {
  return (
    <div className="header flex justify-between  p-4 text-5xl text-white bg-cyan-900 ">
      <div className="">
        <h1>Personal Finance Manager</h1>
      </div>
      <div className="title flex  justify-end align-center">
        <h2 className="btn text-2xl m-2">Statments</h2>
        <h2 className="btn text-2xl m-2">Settings</h2>
      </div>
    </div>
  );
}

export default Header;
