import React from "react";
import "./InputBox.scss";

function InputBox({ handleInput, name, type, placeholder, potato }) {
  return (
    <div className="idIuputBox">
      <span>
        {/* <img alt="test" src={potato} /> */}
        <i className={potato} />
      </span>
      <input
        onChange={handleInput}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputBox;
