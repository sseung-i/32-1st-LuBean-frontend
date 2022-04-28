import React from "react";

const SINGLE_ORIGN = [
  { id: 0, country: "A", text: "가가가가가" },
  { id: 1, country: "B", text: "나나나나나나나나나나" },
  { id: 2, country: "C", text: "다다다" },
  { id: 3, country: "D", text: "라라라라" },
  { id: 4, country: "E", text: "마마마마" },
  { id: 5, country: "F", text: "바바바바바바바바" },
  { id: 6, country: "G", text: "사사사사사사사사사" },
  { id: 7, country: "H", text: "아아아아아" },
];

const MainMenu = ({ title }) => {
  const goToPage = e => {
    // const navigate = useNavigate();
    console.log(e.target.dataset.text);
    fetch("", {
      method: "POST",
      body: JSON.stringify({
        link: e.target.dataset.text,
      }),
    })
      .then(res => res.json())
      .then(result => console.log(result))
      .catch(err => console.error(err));
  };

  return (
    <li className="mainMenu">
      <div className="title">
        <span>{title}</span>
        {title === "싱글오리진" && (
          <ul className="subMenu">
            {SINGLE_ORIGN.map(({ id, country, text }) => (
              <li key={id} data-country={country} onClick={e => goToPage(e)}>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

export default MainMenu;
