import React from "react";
import { makeStar } from "../../../utils/makeStar";

const Star = ({ onStarChange }) => {
  return (
    <>
      {[5, 4, 3, 2, 1].map(num => (
        <label key={num} htmlFor={`star${num}`}>
          <input
            type="radio"
            id={`star${num}`}
            name="star"
            value={num}
            onClick={onStarChange}
          />
          {makeStar(num)}
          {/* {"★".repeat(num) + "☆".repeat(5 - num)} */}
        </label>
      ))}
    </>
  );
};

export default Star;
