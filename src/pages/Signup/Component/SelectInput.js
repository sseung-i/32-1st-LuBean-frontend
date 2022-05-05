import React from "react";
import SELECT_ADDRESS from "./SELECT_ADDRESS";
import "./SelectInput.scss";

function SelectInput({ name, state }) {
  return (
    <>
      <div className="inputSelectPage">
        <div className="redPointBoxInSelectPage">
          <span className="redPointInSelectPage" />
        </div>
        <p className="titleInSelectPage">{name}</p>
        <input className="shortInputBox" />

        <select className="addressEmail">
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
