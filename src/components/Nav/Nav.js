import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnWrap from "./BtnWrap/BtnWrap";
import Category from "./Category/Category";
import DropMenu from "./DropMenu/DropMenu";
import { USER, CATEGORY } from "./NAV_DATA";
import "./Nav.scss";

const Nav = () => {
  const [isEnter, setIsEnter] = useState(false);
  const [nowTarget, setNowTarget] = useState(null);
  const [subMenuData, setSubMenuData] = useState([]);

  useEffect(() => {
    CATEGORY.map(menu => {
      if (nowTarget === menu.name) {
        setSubMenuData(menu.dropMenu);
      }
    });
  }, [nowTarget]);

  const onDropMenu = e => {
    const { id } = e.target;
    if (id === "products" || id === "goods") {
      setNowTarget(id);
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
          <Link to="/">
            <img alt="logo" src="/images/logo.svg" />
          </Link>
        </div>
        <div className="rightWrap">
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
