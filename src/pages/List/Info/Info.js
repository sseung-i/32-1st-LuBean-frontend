import React from "react";
import "./Info.scss";

const Info = ({ id, name, country, weight, isTag, productClick }) => {
  return (
    <div
      className={`productInfo ${Boolean(isTag) && "isTag"}`}
      onClick={() => productClick(id, name)}
    >
      <p className="name">{name}</p>
      <p className="desc">
        {country} / {weight}g
      </p>
    </div>
  );
};

export default Info;
