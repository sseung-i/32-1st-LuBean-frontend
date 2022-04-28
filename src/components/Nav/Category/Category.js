import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ id, title, name, isEnter, onDropMenu }) => {
  const goToPage = e => {
    // const navigate = useNavigate();
    console.log(e.target.dataset.text);
    fetch("", {
      method: "POST",
      body: JSON.stringify({
        link: e.target.dataset.text,
      }),
    })
      .then(res => res.json())
      .then(result => console.log(result))
      .catch(err => console.error(err));
  };

  return (
    <li
      key={id}
      className="category"
      data-text={name}
      onMouseEnter={e => onDropMenu(e)}
      onClick={goToPage}
    >
      {title}
      {name === "products" && isEnter && <div className="dropTriangle" />}
      {/* {name === "goods" && isEnter && <div className="dropTriangle" />} */}
    </li>
  );
};

export default Category;
