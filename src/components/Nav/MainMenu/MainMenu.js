import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainMenu.scss";

const MainMenu = ({ title, en, subMenu }) => {
  const navigate = useNavigate();

  // 싱글오리진 레벨 메뉴 클릭 시 이동 - 패스 파람
  const goToPage = e => {
    const paramsName = e.target.dataset.id;
    navigate(`/list/${paramsName}`);
  };

  // 싱글오리진 서브메뉴(국가) 클릭 시 이동 - 쿼리 파람
  const goToFillterPage = e => {
    const paramsName = e.target.dataset.country;
    navigate(
      `/list?pageName="singleOrign" & target=${paramsName} & sort="recommend"`
    );
  };

  return (
    <li className="mainMenu">
      <div className="title" onClick={goToPage}>
        <span data-id={en}>{title}</span>
        {title === "싱글오리진" && (
          <ul className="subMenu">
            {subMenu.map(({ id, country, text }) => (
              <li key={id} data-country={country} onClick={goToFillterPage}>
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
