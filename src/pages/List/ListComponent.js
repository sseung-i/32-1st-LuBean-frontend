import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
import Country from "../Country/Country";
import ProductsList from "./ProductsList/ProductsList";

const ListComponent = ({ originalData }) => {
  const { title, title_en, desc, topImg, listItem } = originalData;
  const [options, setOptions] = useState({ target: "all", sort: "recommend" });

  const [limit, setLimit] = useState(line);
  const [nowData, setNowData] = useState(listItem);

  const WIDTH_EA = 4;
  const LINE = 3;

  useEffect(() => {
    setNowData(listItem.slice(0, WIDTH_EA * LINE));
  }, [limit]);

  // let sortedData = listItem;

  // const countryData =
  //   options.target === "all"
  //     ? originalData
  //     : originalData.filter(el => el.country_name === options.target);

  // if (options.sort === "recommend") {
  //   const bestProducts = countryData.filter(it => it.tag.includes("best"));
  //   const remainProducts = countryData.filter(it => !it.tag.includes("best"));
  //   sortedData = bestProducts.concat(remainProducts);
  // }
  // if (options.sort === "Ascending") {
  //   sortedData = countryData.sort((a, b) => a.price - b.price);
  // }
  // if (options.sort === "Descending") {
  //   sortedData = countryData.sort((a, b) => b.price - a.price);
  // }
  // if (options.sort === "Word") {
  //   sortedData = countryData.sort((a, b) => {
  //     if (a.name < b.name) return -1;
  //     if (a.name > b.name) return 1;
  //     return 0;
  //   });
  // }

  const selectValue = [
    { id: 0, value: "recommend", text: "추천순" },
    { id: 1, value: "Ascending", text: "가격낮은순" },
    { id: 2, value: "Descending", text: "가격높은순" },
    { id: 3, value: "Word", text: "가나다순" },
  ];

  useEffect(() => {
    const api_url = "";
    fetch(api_url, {
      method: "POST",
      body: JSON.stringify({
        //내용 postData
      }),
    })
      .then(res => res.json())
      .then(result => console.log(result));
  }, [options]);

  const countryClick = e => {
    const countryData = e.target.dataset.id;
    setOptions({ ...options, target: countryData });
    // pageChangeRequest(countryData);
  };

  const changeSelector = e => {
    const selectorData = e.target.value;
    setOptions({ ...options, sort: selectorData });
    // pageChangeRequest(selectorData);
  };

  const onMoreClick = e => {
    e.preventDefault();
    setLimit(curr => curr + line);
  };

  console.log(listItem.length - nowData.length);

  return (
    <div className="list">
      <section className="title" style={{ backgroundImage: `URL(${topImg})` }}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </section>
      <section className="products">
        <article className="top">
          <h3>
            {title} ({title_en})
          </h3>
          <select className="listSort" onChange={changeSelector}>
            {selectValue.map(({ id, value, text }) => (
              <option key={id} value={value}>
                {text}
              </option>
            ))}
          </select>
        </article>
        {title_en === "Single Origin" && (
          <Country
            data={listItem}
            countryClick={countryClick}
            target={options.target}
          />
        )}
        {nowData && <ProductsList data={nowData} />}
        {listItem.length - nowData.length > 0 && (
          <button className="moreBtn" onClick={onMoreClick}>
            더보기
          </button>
        )}
      </section>
    </div>
  );
};

export default ListComponent;
