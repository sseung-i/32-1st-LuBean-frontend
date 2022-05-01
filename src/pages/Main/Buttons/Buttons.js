import React from "react";

const Buttons = ({ imgLength, btnNum, handleBtnClick }) => {
  // console.log(btnNum);
  const li = Array(imgLength)
    .fill(0)
    .map((item, index) => {
      return index === btnNum ? (
        <li
          data-id={index}
          key={index}
          className="nowImg"
          onClick={e => handleBtnClick(e)}
        />
      ) : (
        <li key={index} data-id={index} onClick={e => handleBtnClick(e)} />
      );
    });
  return <ul className="buttons">{li}</ul>;
};

export default Buttons;
