import React from "react";
import "./Info.scss";

const Info = ({ name, desc, padding }) => {
  const style = {
    paddingTop: padding,
  };
  return (
    <div className="info" style={style}>
      <p className="name">{name}</p>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default Info;
