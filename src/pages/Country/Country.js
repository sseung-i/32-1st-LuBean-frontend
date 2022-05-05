import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Country.scss";

const Country = ({
  countryButtonList,
  countryClick,
  countryLength,
  target,
}) => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <ul className="country">
      <li
        id="all"
        className={`countryAll ${target === "all" ? "nowView" : ""}`}
        onClick={() => {
          navigate(`/list/${params}`);
        }}
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
