import React, { useEffect, useState } from "react";
import "./List.scss";
import ProductsList from "./ProductsList/ProductsList";

const productData = [
  {
    id: 1,
    name: "산 안토니오 챠기테 [강배전]",
    desc: "San Antonio Chaguite",
    country_name: "Guatemala",
    weight: "200g",
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
    country_name: "brazil",
    weight: "100g",
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
    country_name: "Nicaragua",
    weight: "100g",
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
    desc: "Papua New Guinea",
    country_name: "Boka",
    weight: "100g",
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
    country_name: "Boka",
    weight: "100g",
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
    desc: "Papua New Guinea",
    country_name: "Boka",
    weight: "100g",
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
    country_name: "Boka",
    weight: "100g",
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
    desc: "Guatemala",
    country_name: "Boka",
    weight: "100g",
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
    country_name: "brazil",
    weight: "100g",
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
    country_name: "Nicaragua",
    weight: "100g",
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
    desc: "Papua New Guinea",
    country_name: "Boka",
    weight: "100g",
    price: `${Math.ceil(Math.random() * 99)}000`,
    menus: "singleOrigin",
    imgUrl: [
      "/images/products/coffee_pkg_1.jpeg",
      "/images/products/coffee_pkg_2.jpeg",
    ],
  },
];

const List = () => {
  const countryCount = {};
  productData.filter(item =>
    countryCount[item.country_name]
      ? (countryCount[item.country_name] += 1)
      : (countryCount[item.country_name] = 1)
  );

  // console.log(countryCount);
  return (
    <div className="list">
      <section className="title">
        <h2>싱글 오리진</h2>
        <p>각 생산지의 맛의 특색을 느껴보세요</p>
      </section>
      <section className="products">
        <article className="top">
          <h3>싱글 오리진 (Single Origin)</h3>
          <select className="listSort">
            <option>추천순</option>
            <option>가격낮은순</option>
            <option>가격높은순</option>
            <option>이름순</option>
          </select>
        </article>
        <ul className="country">
          <li className="nowView">
            전체<span>({0})</span>
          </li>
          <li>
            과테말라<span>({0})</span>
          </li>
          <li>
            브라질<span>({0})</span>
          </li>
          <li>
            니카라과<span>({0})</span>
          </li>
          <li>
            파푸아뉴기니<span>({0})</span>
          </li>
        </ul>
        <ProductsList productData={productData} />
      </section>
    </div>
  );
};

export default List;
