import React from "react";
import "./SelectInput.scss";

function SelectInput({ saveAddress, name, state, addressInput, emailInput }) {
  return (
    <>
      <div className="inputSelectPage">
        <div className="redPointBoxInSelectPage">
          <span className="redPointInSelectPage" />
        </div>
        <p className="titleInSelectPage">{name}</p>
        <input
          className="shortInputBox"
          value={name === "주소" ? addressInput : emailInput}
        />

        <select className="addressEmail" name={name} onChange={saveAddress}>
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
