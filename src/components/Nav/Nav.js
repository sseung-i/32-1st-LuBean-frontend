import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnWrap from "./BtnWrap/BtnWrap";
import Category from "./Category/Category";
import DropMenu from "./DropMenu/DropMenu";
import { USER, CATEGORY, PRODUCTS_SUBMENU, GOODS_SUBMENU } from "./NAV_DATA";
import "./Nav.scss";

const Nav = () => {
  const [isEnter, setIsEnter] = useState(false);
  const [nowTarget, setNowTarget] = useState(null);
  const [subMenuData, setSubMenuData] = useState([]);

  useEffect(() => {
    fetch("./NAV_DATA.js")
      .then(res => res.json())
      .then(data => console.log(data.USER));
  }, []);

  useEffect(() => {
    if (nowTarget === "products") {
      setSubMenuData(PRODUCTS_SUBMENU);
    } else if (nowTarget === "goods") {
      setSubMenuData(GOODS_SUBMENU);
    }
  }, [nowTarget]);

  const onDropMenu = e => {
    const { text } = e.target.dataset;
    if (text === "products" || text === "goods") {
      setNowTarget(text);
      setIsEnter(true);
    } else {
      return;
    }
  };

  const onLeaveMenu = () => {
    setIsEnter(false);
  };

  return (
    <nav onMouseLeave={onLeaveMenu}>
      <section className="navWrap">
        <div className="logoWrap">
          <Link to="/main">
            <img alt="logo" src="images/logo.svg" />
          </Link>
        </div>
        <div className="rigintWrap">
          <ul className="menuWrap">
            {CATEGORY.map(({ id, text, name }) => (
              <Category
                key={id}
                text={text}
                name={name}
                isEnter={isEnter}
                nowTarget={nowTarget}
                onDropMenu={onDropMenu}
              />
            ))}
          </ul>
          <BtnWrap cartNum={USER.cart.length} />
        </div>
      </section>
      <DropMenu
        isEnter={isEnter}
        onDropMenu={onDropMenu}
        subMenuData={subMenuData}
      />
    </nav>
  );
};

export default Nav;
