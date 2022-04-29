import React from "react";
import { Link } from "react-router-dom";

const BtnWrap = ({ cartNum }) => {
  return (
    <div className="btnWrap">
      <Link to="/main">
        <div className="iconBtn">
          <i className="fa-solid fa-xl fa-magnifying-glass" />
        </div>
      </Link>
      <Link to="/main">
        <div className="iconBtn">
          <span className="itemNum">{cartNum}</span>
          <i className="fa-solid fa-xl fa-basket-shopping" />
        </div>
      </Link>
      <Link to="/main">
        <div className="iconBtn">
          <i className="fa-solid fa-xl fa-circle-user" />
        </div>
      </Link>
    </div>
  );
};

export default BtnWrap;
