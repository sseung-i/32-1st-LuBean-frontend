import React from "react";
import "./Info.scss";

const Info = ({ id, name, country, weight, isTag, productClick }) => {
  const paddingVal = isTag ? "10px" : "40px";
  return (
    <div
      className="info"
      style={{ paddingTop: paddingVal }}
      onClick={() => productClick(id, name)}
    >
      <p className="name">{name}</p>
      <p className="desc">
        {country} / {weight}
      </p>
    </div>
  );
};

export default Info;
