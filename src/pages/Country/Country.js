import React, { useEffect } from "react";
const Country = ({ data, countryClick, target }) => {
  const countryCount = {};

  data.filter(item =>
    countryCount[item.country_name]
      ? (countryCount[item.country_name] += 1)
      : (countryCount[item.country_name] = 1)
  );

  useEffect(() => {
    document.querySelector(".countryAll").classList.add("nowView");
  }, []);

  return (
    <ul className="country">
      <li
        data-id="all"
        className={`countryAll ${target !== "all" ? "" : "nowView"}`}
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
