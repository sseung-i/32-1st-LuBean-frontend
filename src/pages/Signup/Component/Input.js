import React from "react";
import "./Input.scss";

function Input({ important, labelName, name, type }) {
  console.log(important);
  return (
    <>
      <div className="input">
        <div className="redPointBox">
          {important && <span className="redPoint" />}
        </div>
        <p>{labelName}</p>
        <input name={name} type={type} />
      </div>
    </>
  );
}

export default Input;
