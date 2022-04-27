import React from "react";
import "./Info.scss";

const Info = ({ name, desc, isTag }) => {
  const paddingVal = isTag ? "10px" : "40px";
  return (
    <div className="info" style={{ paddingTop: paddingVal }}>
      <p className="name">{name}</p>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default Info;
