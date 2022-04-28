import React from "react";
import "./InputBox.scss";
import "@fortawesome/fontawesome-free/js/all.js";

function InputBox({ type, placeholder, potato }) {
  return (
    <div className="idIuputBox">
      <span>
        {/* <img alt="test" src={potato} /> */}
        <i className={potato} />
      </span>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default InputBox;
