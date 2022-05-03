import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainMenu.scss";

const MainMenu = ({ title, title_en, subMenu }) => {
  const navigate = useNavigate();

  const goToPage = e => {
    const paramsName = e.target.id;
    console.log(paramsName);
    navigate(`/list/${paramsName}`);
  };

  return (
    <li className="mainMenu">
      <div className="title">
        <span id={title_en} onClick={goToPage}>
          {title}
        </span>
        {title === "싱글오리진" && (
          <ul className="subMenu">
            {subMenu.map(({ id, text }) => (
              <li key={id} id={id} onClick={goToPage}>
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
