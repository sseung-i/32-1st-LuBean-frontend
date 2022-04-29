import React, { useState } from "react";
import Country from "../Country/Country";
import ProductsList from "./ProductsList/ProductsList";

const ListComponent = ({ originalData }) => {
  const [options, setOptions] = useState({ target: "all", sort: "recommend" });

  let sortedData;

  const countryData =
    options.target === "all"
      ? originalData
      : originalData.filter(el => el.country_name === options.target);

  if (options.sort === "recommend") {
    const bestProducts = countryData.filter(it => it.tag.includes("best"));
    const remainProducts = countryData.filter(it => !it.tag.includes("best"));
    sortedData = bestProducts.concat(remainProducts);
  }
  if (options.sort === "Ascending") {
    sortedData = countryData.sort((a, b) => a.price - b.price);
  }
  if (options.sort === "Descending") {
    sortedData = countryData.sort((a, b) => b.price - a.price);
  }
  if (options.sort === "Word") {
    sortedData = countryData.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  const selectValue = [
    { id: 0, value: "recommend", text: "추천순" },
    { id: 1, value: "Ascending", text: "가격낮은순" },
    { id: 2, value: "Descending", text: "가격높은순" },
    { id: 3, value: "Word", text: "가나다순" },
  ];

  const pageChangeRequest = postData => {
    const api_url = "";
    // fetch(api_url, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     //내용 postData
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(result => na);
  };

  const countryClick = e => {
    const countryData = e.target.dataset.id;
    pageChangeRequest(countryData);
    // setOptions({ ...options, target: e.target.dataset.id });
  };

  const changeSelector = e => {
    const selectorData = e.target.value;
    pageChangeRequest(selectorData);
    // setOptions({ ...options, sort: e.target.value });
  };

  return (
    <div className="list">
      <section className="title">
        <h2>싱글 오리진</h2>
        <p>각 생산지의 맛의 특색을 느껴보세요</p>
      </section>
      <section className="products">
        <article className="top">
          <h3>싱글 오리진 (Single Origin)</h3>
          <select className="listSort" onChange={changeSelector}>
            {selectValue.map(({ id, value, text }) => (
              <option key={id} value={value}>
                {text}
              </option>
            ))}
          </select>
        </article>
        <Country
          data={originalData}
          countryClick={countryClick}
          target={options.target}
        />
        <ProductsList data={sortedData} />
      </section>
    </div>
  );
};

export default ListComponent;
