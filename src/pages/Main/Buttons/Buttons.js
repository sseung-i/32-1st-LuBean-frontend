import React from "react";

const Buttons = ({ imgLength, btnNum, handleBtnClick }) => {
  const li = Array(imgLength)
    .fill(0)
    .map((item, index) => {
      return index === btnNum ? (
        <li
          id={index}
          key={index}
          className="nowImg"
          onClick={handleBtnClick}
        />
      ) : (
        <li key={index} id={index} onClick={handleBtnClick} />
      );
    });
  return <ul className="buttons">{li}</ul>;
};

export default Buttons;
