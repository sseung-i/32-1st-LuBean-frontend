import React from "react";
import "./Input.scss";

function Input({
  handleInput,
  important,
  labelName,
  name,
  type,
  rules,
  value,
  checkMPass,
  checkMtWrong,
}) {
  return (
    <>
      <div className="input">
        <div className="redPointBox">
          {important && <span className="redPoint" />}
        </div>
        <p>{labelName}</p>
        <input onChange={handleInput} name={name} type={type} value={value} />

        {value.length >= 1 &&
          (rules ? (
            <span className="good">{checkMPass}</span>
          ) : (
            <span className="wrong">{checkMtWrong}</span>
          ))}
      </div>
    </>
  );
}

export default Input;
