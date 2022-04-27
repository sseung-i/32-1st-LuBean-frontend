import { useEffect, useState } from "react";
import Country from "../Country/Country";
import ProductsList from "./ProductsList/ProductsList";
import "./List.scss";

const productsData = [
  {
    id: 1,
    name: "산 안토니오 챠기테 [강배전]",
    desc: "San Antonio Chaguite",
    country_name: "과테말라",
    weight: "200g",
    tag: ["new"],
    price: `${Math.ceil(Math.random() * 99)}000`,
    menus: "singleOrigin",
    imgUrl: [
      "/images/products/coffee_pkg_1.jpeg",
      "/images/products/coffee_pkg_2.jpeg",
    ],
  },
  {
    id: 2,
    name: "폰테 알타 내추럴",
    desc: "Ponte Alta Natural",
    country_name: "브라질",
    weight: "100g",
    tag: ["new", "best"],
    price: `${Math.ceil(Math.random() * 99)}000`,
    menus: "singleOrigin",
    imgUrl: [
      "/images/products/coffee_pkg_1.jpeg",
      "/images/products/coffee_pkg_2.jpeg",
    ],
  },
  {
    id: 3,
    name: "라 벤디시온 파카마라 내추럴",
    desc: "La Bendicion Pacamara Natural",
    country_name: "니카라과",
    weight: "100g",
    tag: ["new"],
    price: `${Math.ceil(Math.random() * 99)}000`,
    menus: "singleOrigin",
    imgUrl: [
      "/images/products/coffee_pkg_1.jpeg",
      "/images/products/coffee_pkg_2.jpeg",
    ],
  },
  {
    id: 4,
    name: "보카 [강배전]",
    desc: "파푸아뉴기니",
    country_name: "보카",
    weight: "100g",
    tag: [],
    price: `${Math.ceil(Math.random() * 99)}000`,
    menus: "singleOrigin",
    imgUrl: [
      "/images/products/coffee_pkg_1.jpeg",
      "/images/products/coffee_pkg_2.jpeg",
    ],
  },
  {
    id: 5,
    name: "배드블러드",
    desc: "La Bendicion Pacamara Natural",
    country_name: "보카",
    weight: "100g",
    tag: [],
    price: `${Math.ceil(Math.random() * 99)}000`,
    menus: "singleOrigin",
    imgUrl: [
      "/images/products/coffee_pkg_1.jpeg",
      "/images/products/coffee_pkg_2.jpeg",
    ],
  },
  {
    id: 6,
    name: "니카라과",
    desc: "파푸아뉴기니",
    country_name: "보카",
    weight: "100g",
    tag: [],
    price: `${Math.ceil(Math.random() * 99)}000`,
    menus: "singleOrigin",
    imgUrl: [
      "/images/products/coffee_pkg_1.jpeg",
      "/images/products/coffee_pkg_2.jpeg",
    ],
  },
  {
    id: 7,
    name: "보카 [강배전]",
    desc: "La Bendicion Pacamara Natural",
    country_name: "파푸아뉴기니",
    weight: "100g",
    tag: [],
    price: `${Math.ceil(Math.random() * 99)}000`,
    menus: "singleOrigin",
    imgUrl: [
      "/images/products/coffee_pkg_1.jpeg",
      "/images/products/coffee_pkg_2.jpeg",
    ],
  },
  {
    id: 8,
    name: "라스 라하스 펠라 네그라",
    desc: "과테말라",
    country_name: "파푸아뉴기니",
    weight: "100g",
    tag: ["best"],
    price: `${Math.ceil(Math.random() * 99)}000`,
    menus: "singleOrigin",
    imgUrl: [
      "/images/products/coffee_pkg_1.jpeg",
      "/images/products/coffee_pkg_2.jpeg",
    ],
  },
  {
    id: 9,
    name: "폰테 알타 내추럴",
    desc: "Ponte Alta Natural",
    country_name: "브라질",
    weight: "100g",
    tag: [],
    price: `${Math.ceil(Math.random() * 99)}000`,
    menus: "singleOrigin",
    imgUrl: [
      "/images/products/coffee_pkg_1.jpeg",
      "/images/products/coffee_pkg_2.jpeg",
    ],
  },
  {
    id: 10,
    name: "라 벤디시온 파카마라 내추럴",
    desc: "La Bendicion Pacamara Natural",
    country_name: "니카라과",
    weight: "100g",
    tag: [],
    price: `${Math.ceil(Math.random() * 99)}000`,
    menus: "singleOrigin",
    imgUrl: [
      "/images/products/coffee_pkg_1.jpeg",
      "/images/products/coffee_pkg_2.jpeg",
    ],
  },
  {
    id: 11,
    name: "누에바 루즈 파라이네마",
    desc: "파푸아뉴기니",
    country_name: "파푸아뉴기니",
    weight: "100g",
    tag: ["best"],
    price: `${Math.ceil(Math.random() * 99)}000`,
    menus: "singleOrigin",
    imgUrl: [
      "/images/products/coffee_pkg_1.jpeg",
      "/images/products/coffee_pkg_2.jpeg",
    ],
  },
];

const List = () => {
  const [originalData, setOriginalData] = useState([]);
  const [options, setOptions] = useState({ target: "all", sort: "recommend" });

  const countryData =
    options.target === "all"
      ? originalData
      : originalData.filter(el => el.country_name === options.target);

  let sortedData;

  if (options.sort === "recommend") {
    const bestProducts = countryData.filter(it => it.tag.includes("best"));
    const remainProducts = countryData.filter(it => !it.tag.includes("best"));
    sortedData = bestProducts.concat(remainProducts);
  }
  if (options.sort === "Ascending") {
    sortedData = countryData.sort((a, b) => a.price * 1 - b.price * 1);
  }
  if (options.sort === "Descending") {
    sortedData = countryData.sort((a, b) => b.price * 1 - a.price * 1);
  }
  if (options.sort === "Word") {
    sortedData = countryData.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  useEffect(() => {
    setOriginalData(productsData);
  }, []);

  const selectValue = [
    { id: 0, value: "recommend", text: "추천순" },
    { id: 1, value: "Ascending", text: "가격낮은순" },
    { id: 2, value: "Descending", text: "가격높은순" },
    { id: 3, value: "Word", text: "가나다순" },
  ];

  const countryClick = e => {
    setOptions({ ...options, target: e.target.dataset.id });
  };

  const changeSelector = e => {
    setOptions({ ...options, sort: e.target.value });
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

export default List;
