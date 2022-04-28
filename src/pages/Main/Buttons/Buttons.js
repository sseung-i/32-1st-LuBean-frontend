import React from "react";

const Buttons = ({ imgLength, imgNum, handleBtnClick }) => {
  console.log(imgNum);
  const li = Array(imgLength)
    .fill(0)
    .map((item, index) => {
      return index === imgNum ? (
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
