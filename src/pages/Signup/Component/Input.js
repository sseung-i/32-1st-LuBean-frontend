import React from "react";
import "./Input.scss";

function Input({ labelName, className, type }) {
  return (
    <>
      <div className="input">
        <p>{labelName}</p>
        <input className={className} type={type} />
      </div>
    </>
  );
}

export default Input;
