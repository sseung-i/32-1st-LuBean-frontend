import React from "react";
import "./Country.scss";

const Country = ({
  countryButtonList,
  countryClick,
  countryLength,
  target,
}) => {
  return (
    <ul className="country">
      <li
        id="all"
        className={`countryAll ${target === "all" ? "nowView" : ""}`}
        onClick={countryClick}
      >
        전체({countryLength})
      </li>
      {Object.entries(countryButtonList).map((it, index) => (
        <li
          key={index}
          id={it[0]}
          className={`${target === it[0] ? "nowView" : ""}`}
          onClick={countryClick}
        >
          {it[0]}({it[1]})
        </li>
      ))}
    </ul>
  );
};

export default Country;
