import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainMenu.scss";

const MainMenu = ({ title, subMenu }) => {
  const navigate = useNavigate();

  const api_url = ``;

  const goToPage = e => {
    fetch(api_url, {
      method: "POST",
      body: JSON.stringify({
        //
      }),
    })
      .then(res => res.json())
      .then(result => navigate(""))
      .catch(err => console.error(err));
  };

  return (
    <li className="mainMenu">
      <div className="title">
        <span>{title}</span>
        {title === "싱글오리진" && (
          <ul className="subMenu">
            {subMenu.map(({ id, country, text }) => (
              <li key={id} data-country={country} onClick={e => goToPage(e)}>
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
