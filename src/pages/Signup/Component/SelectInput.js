import React from "react";
import "./SelectInput.scss";

function SelectInput({ handleInput, name, state, addressInput, emailInput }) {
  return (
    <>
      <div className="inputSelectPage">
        <div className="redPointBoxInSelectPage">
          <span className="redPointInSelectPage" />
        </div>
        <p className="titleInSelectPage">주소</p>
        <input className="shortInputBox" value={addressInput} />

        <select className="addressEmail" name={name} onChange={handleInput}>
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
