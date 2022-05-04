import React from "react";
import SELECT_ADDRESS from "./SELECT_ADDRESS";
import "./SelectInput.scss";

function SelectInput({ name, state }) {
  return (
    <>
      <div className="input">
        <div className="redPointBox">
          <span className="redPoint" />
        </div>
        <p className=".shortInput">{name}</p>
        <input className="shortInputBox" />

        <select className="address">
          {state.map(addressLists => (
            <option key={addressLists.id}>{addressLists.name}</option>
          ))}
        </select>
      </div>
      <input className="longInputBox" />
    </>
  );
}

export default SelectInput;
