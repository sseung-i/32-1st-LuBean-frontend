import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductsList from "./ProductsList/ProductsList";
import Country from "../Country/Country";

const ListComponent = ({ tumbnail, hoverImg, topImgUrl, originalData }) => {
  const { category_name, sub_detail } = originalData[0];
  const categorySlice = category_name.split("\\n");

  const categoryName = {
    ko: categorySlice[0],
    en: categorySlice[1],
  };

  // const { title, title_en, desc, topImg, listItem } = originalData;
  const [options, setOptions] = useState({ target: "all", sort: "recommend" });
  const [countryButtonList, setcountryButtonList] = useState({});
  const [nowData, setNowData] = useState(originalData);

  // console.log(nowData);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const WIDTH_EA = 4;
  const LINE = 3;

  const SELECT_VALUE = [
    { id: 0, value: "recommend", text: "추천순" },
    { id: 1, value: "Ascending", text: "가격낮은순" },
    { id: 2, value: "Descending", text: "가격높은순" },
    { id: 3, value: "Word", text: "가나다순" },
  ];

  const setCountryCount = () => {
    let countryCount = {};
    originalData.length &&
      originalData.map(item => {
        if (item.country_name === "") return;
        countryCount[item.country_name]
          ? (countryCount[item.country_name] += 1)
          : (countryCount[item.country_name] = 1);
      });
    setcountryButtonList(countryCount);
  };

  useEffect(() => {
    // console.log("useEffect", originalData);
    // setLimit(LINE);
    setCountryCount();
  }, []);

  // console.log("개수", WIDTH_EA * limit);

  // useEffect(() => {
  //   setNowData(listItem.slice(0, WIDTH_EA * limit));
  // }, [limit]);

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

  useEffect(() => {
    const api_url = `http://10.58.3.83:8000/products/list?country_name="${options.target}"&sort="${options.sort}"`;
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
    const countryData = e.target.id;
    setOptions({ ...options, target: countryData });
    // pageChangeRequest(countryData);
  };

  const changeSelector = e => {
    const selectorData = e.target.value;
    setOptions({ ...options, sort: selectorData });
    // pageChangeRequest(selectorData);
  };

  // const onMoreClick = () => {
  //   setLimit(curr => curr + LINE);
  // };

  // 무한 스크롤
  // useEffect(() => {
  //   fetch(`/list${location.search}`)
  //     .then(res => res.json())
  //     .then(data => setNowData(prev => prev.concat(data)));
  // }, []);

  // const getOffsetAndLimit = () => {
  //   const offset = page * 12;
  //   const limit = 12;
  //   setPage(prev => (prev += 1));
  //   navigate(`?offset=${offset}&limit=${limit}`);
  // };

  return (
    <div className="list">
      <section
        className="title"
        style={{ backgroundImage: `URL('${topImgUrl}')` }}
      >
        <h2>{categoryName.ko}</h2>
        <p className="pageDesc">{sub_detail}</p>
      </section>
      <section className="products">
        <article className="top">
          <h3>
            {categoryName.ko} ({categoryName.en})
          </h3>
          <select className="listSort" onChange={changeSelector}>
            {SELECT_VALUE.map(({ id, value, text }) => (
              <option key={id} value={value}>
                {text}
              </option>
            ))}
          </select>
        </article>
        {categoryName.ko === "싱글오리진" && (
          <Country
            countryButtonList={countryButtonList}
            countryLength={originalData.length}
            countryClick={countryClick}
            target={options.target}
          />
        )}
        {nowData && (
          <ProductsList
            hoverImg={hoverImg}
            tumbnail={tumbnail}
            data={nowData}
          />
        )}
      </section>
    </div>
  );
};

export default ListComponent;
