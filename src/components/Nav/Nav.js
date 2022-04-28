import React, { useState } from "react";
import "./Nav.scss";

const CATEGORY = [
  { id: 0, title: "사이트소개", name: "lubinSite" },
  { id: 1, title: "원두", name: "products" },
  { id: 2, title: "굿즈", name: "goods" },
  { id: 3, title: "매장", name: "stores" },
  { id: 4, title: "이벤트", name: "event" },
];

const SUBMENU = [
  { id: 0, title: "싱글오리진" },
  { id: 1, title: "블렌디드" },
  { id: 2, title: "디카페인" },
];

const SINGLE_ORIGN = [""];

const Nav = () => {
  const [nowClick, setNowClick] = useState("");
  return (
    <nav>
      <section className="navWrap">
        <div className="logoWrap">
          <img alt="logo" src="images/logo_color.png" />
        </div>
        <div className="rigintWrap">
          <ul className="menuWrap">
            {CATEGORY.map(it => (
              <li key={it.id}>{it.title}</li>
            ))}
          </ul>
          <div className="btnWrap">
            <i className="fa-solid fa-xl fa-magnifying-glass" />
            <div>
              <span className="itemNum">0</span>
              <i className="fa-solid fa-xl fa-basket-shopping" />
            </div>
            <i className="fa-solid fa-xl fa-circle-user" />
          </div>
        </div>
      </section>
      {/* <section key={it.id} className="dropMenu">
        <ul>
          <li>
            <p className="">{it.title}</p>
            <ul>{it.subMenu}</ul>
          </li>
        </ul>
      </section> */}
    </nav>
  );
};

export default Nav;
