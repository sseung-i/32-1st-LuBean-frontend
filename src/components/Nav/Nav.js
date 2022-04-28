import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category/Category";
import DropMenu from "./DropMenu/DropMenu";
import "./Nav.scss";

const Nav = () => {
  const [category, setCategory] = useState([]);
  const [isEnter, setIsEnter] = useState(false);
  const [cartNum, setCartNum] = useState(0);

  useEffect(() => {
    fetch("data/CATEGORY.json")
      .then(res => res.json())
      .then(data => setCategory(data));
    setCartNum(0);
  }, []);

  const onDropMenu = e => {
    e.target.dataset.text === "products" && setIsEnter(true);
  };

  const onLeaveMenu = () => {
    setIsEnter(false);
  };

  return (
    <nav onMouseLeave={onLeaveMenu}>
      <section className="navWrap">
        <div className="logoWrap">
          <Link to="/main">
            <img alt="logo" src="images/logo_color.png" />
          </Link>
        </div>
        <div className="rigintWrap">
          <ul className="menuWrap">
            {category.map(({ id, title, name }) => (
              <Category
                key={id}
                id={id}
                title={title}
                name={name}
                isEnter={isEnter}
                setIsEnter={setIsEnter}
                onDropMenu={onDropMenu}
              />
            ))}
          </ul>
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
        </div>
      </section>
      <DropMenu isEnter={isEnter} onDropMenu={onDropMenu} />
    </nav>
  );
};

export default Nav;
