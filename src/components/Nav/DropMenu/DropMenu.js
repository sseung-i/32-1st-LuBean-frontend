import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import "./DropMenu.scss";
const SUBMENU = [
  { id: 0, title: "싱글오리진" },
  { id: 1, title: "블렌디드" },
  { id: 2, title: "디카페인" },
];

const DropMenu = ({ isEnter, onDropMenu }) => {
  return (
    <section
      data-id="dropMenu"
      className={`dropMenu ${!isEnter && "hidden"}`}
      onMouseEnter={e => onDropMenu(e)}
    >
      <ul className="menuWrap">
        {SUBMENU.map(({ id, title }) => (
          <MainMenu key={id} id={id} title={title} />
        ))}
      </ul>
    </section>
  );
};

export default DropMenu;
