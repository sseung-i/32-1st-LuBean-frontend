import React from "react";
import "./Nav.scss";

const Nav = () => {
  const category = [
    { id: 0, title: "사이트소개", subMenu: [] },
    {
      id: 1,
      title: "원두",
      subMenu: [
        { id: 0, title: "싱글오리진" },
        { id: 0, title: "블렌디드" },
        { id: 0, title: "디카페인" },
      ],
    },
    { id: 2, title: "굿즈", subMenu: [] },
    { id: 3, title: "매장", subMenu: [] },
    { id: 4, title: "이벤트", subMenu: [] },
  ];
  return (
    <nav>
      <section className="navWrap">
        <div className="logoWrap">
          <img alt="logo" src="images/logo_color.png" />
        </div>
        <div className="rigintWrap">
          <ul className="menuWrap">
            {category.map(it => (
              <li key={it.id}>{it.title}</li>
            ))}
          </ul>
          <div className="btnWrap" />
        </div>
      </section>
    </nav>
  );
};

export default Nav;
