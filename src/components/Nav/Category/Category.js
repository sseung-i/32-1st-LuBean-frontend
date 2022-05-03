import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ text, name, isEnter, onDropMenu, nowTarget }) => {
  return (
    <li className="category" id={name} onMouseEnter={onDropMenu}>
      {text}
      {isEnter && name === nowTarget && <div className="dropTriangle" />}
    </li>
  );
};

export default Category;
