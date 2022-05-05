import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainMenu.scss";

const MainMenu = ({ title, title_en, subMenu }) => {
  const navigate = useNavigate();

  const clickMainMenu = e => {
    const paramsName = e.target.id;
    navigate(`/list/${paramsName}`);
  };

  const clickSubMenu = e => {
    const paramsName = e.target.id;
    navigate(`/list/singleOrigin_${paramsName}`);
  };

  return (
    <li className="mainMenu">
      <div className="title">
        <span id={title_en} onClick={clickMainMenu}>
          {title}
        </span>
        {title === "싱글오리진" && (
          <ul className="subMenu">
            {subMenu.map(({ id, text }) => (
              <li key={id} id={text} onClick={clickSubMenu}>
                {text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

export default MainMenu;
