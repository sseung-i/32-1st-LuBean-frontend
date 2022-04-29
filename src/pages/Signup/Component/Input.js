import React from "react";
import "./Input.scss";

function Input({
  handleInput,
  important,
  labelName,
  name,
  type,
  checkMPass,
  checkMtWrong,
}) {
  // console.log(rules);
  return (
    <>
      <div className="input">
        <div className="redPointBox">
          {important && <span className="redPoint" />}
        </div>
        <p>{labelName}</p>
        <input onChange={handleInput} name={name} type={type} />
      </div>
      <p>{}</p>
    </>
  );
}

export default Input;
