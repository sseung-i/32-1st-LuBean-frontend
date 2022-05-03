import React, { useEffect } from "react";
import "./Country.scss";

const Country = ({ data, countryClick, target }) => {
  useEffect(() => {
    const countryCount = {};

    data.map(item =>
      countryCount[item.country_name]
        ? (countryCount[item.country_name] += 1)
        : (countryCount[item.country_name] = 1)
    );
  }, [data]);

  return (
    <ul className="country">
      <li
        data-id="all"
        className={`countryAll ${target === "all" ? "nowView" : ""}`}
        onClick={countryClick}
      >
        전체({data.length})
      </li>
      {Object.entries(countryCount).map((it, index) => (
        <li
          key={index}
          data-id={it[0]}
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
