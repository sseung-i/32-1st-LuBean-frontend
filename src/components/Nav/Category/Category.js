import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ text, name, isEnter, onDropMenu, nowTarget }) => {
  return (
    <li className="category" data-text={name} onMouseEnter={e => onDropMenu(e)}>
      {text}
      {isEnter && name === nowTarget && <div className="dropTriangle" />}
    </li>
  );
};

export default Category;
