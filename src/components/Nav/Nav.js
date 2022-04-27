import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <section className="navWrap">
        <div className="logoWrap">
          <img alt="logo" src="images/logo_color.png" />
        </div>
        <div className="rigintWrap">
          <div className="menuWrap" />
          <div className="btnWrap" />
        </div>
      </section>
    </nav>
  );
};

export default Nav;
