import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./List.scss";
import ProductsList from "./ProductsList/ProductsList";

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
  const [filterData, setFilterData] = useState([]);
  const [target, setTarget] = useState("all");

  useEffect(() => {
    setOriginalData(productsData);
    setFilterData(productsData);
  }, []);

  const selectValue = [
    { id: 0, value: "recommend", text: "추천순" },
    { id: 1, value: "Ascending", text: "가격낮은순" },
    { id: 2, value: "Descending", text: "가격높은순" },
    { id: 3, value: "Word", text: "가나다순" },
  ];

  const dataFiltering = (e, copySortData) => {
    const filterData = copySortData.filter(
      it => it.country_name === e.target.dataset.id
    );
    setFilterData(filterData);
  };

  const countryClick = e => {
    setTarget(e.target.dataset.id);
    // e.target.classList.add("nowView");
    const copySortData = [...originalData];
    e.target.dataset.id === "all"
      ? setFilterData(copySortData)
      : dataFiltering(e, copySortData);
  };

  const changeSelector = e => {
    const copySortData = [...filterData];
    if (e.target.value === "recommend") {
      const bestProducts = copySortData.filter(it => it.tag.includes("best"));
      const remainProducts = copySortData.filter(
        it => !it.tag.includes("best")
      );
      return setFilterData(bestProducts.concat(remainProducts));
    }
    if (e.target.value === "Ascending") {
      const sortProducts = copySortData.sort(
        (a, b) => a.price * 1 - b.price * 1
      );
      return setFilterData(sortProducts);
    }
    if (e.target.value === "Descending") {
      const sortProducts = copySortData.sort(
        (a, b) => b.price * 1 - a.price * 1
      );
      return setFilterData(sortProducts);
    }
    if (e.target.value === "Word") {
      const sortProducts = copySortData.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      return setFilterData(sortProducts);
    }
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
          target={target}
        />
        <ProductsList data={filterData} />
      </section>
    </div>
  );
};

export default List;
