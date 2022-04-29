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
      </div>
      {rules && <p>{checkMPass}</p>}
      {!rules && value.length >= 1 && <p>{checkMtWrong}</p>}
      {/* // !true === false
      // !false === true

      a && b
      1. a가 참이다
        - b가 참이면 참
        - b가 거짓이면 거짓
        => 그러면 b를 검사해봐야겠다. b 실행.

      2. a가 거짓이다.
        - b가 뭐든간에 무조건 거짓
        => 그러면 b를 실행할 필요 없이 무조건 거짓이네? b 건너뜀. */}
    </>
  );
}

export default Input;

//
