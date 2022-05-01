import React, { useEffect, useState, useRef } from "react";
// import { createPortal } from "react-dom";
import Buttons from "./Buttons/Buttons";
import "./Main.scss";
const Main = () => {
  const [bannerBtnNum, setBannerBtnNum] = useState(0);
  const [productBtnNum, setProductBtnNum] = useState(0);
  const [currentBtnNum, setCurrentBtnNum] = useState(0);

  const bannerContainer = useRef(null);
  const productContainer = useRef(null);

  const INNER__BANNER = [
    {
      "data-id": 0,
      className: "item",
      alt: `item0`,
      src: `./images/slides/main0.jpg`,
    },
    {
      "data-id": 1,
      className: "item",
      alt: `item1`,
      src: `./images/slides/main1.jpg`,
    },
    {
      "data-id": 2,
      className: "item",
      alt: `item2`,
      src: `./images/slides/main2.jpg`,
    },
    {
      "data-id": 3,
      className: "item",
      alt: `item3`,
      src: `./images/slides/main3.jpg`,
    },
    {
      "data-id": 4,
      className: "item",
      alt: `item4`,
      src: `./images/slides/main4.jpg`,
    },
  ];
  const INNER__PRODUCT = [
    {
      "data-id": 1,
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
      "data-id": 2,
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
      "data-id": 3,
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
      "data-id": 4,
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
      "data-id": 5,
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
      "data-id": 6,
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
      "data-id": 7,
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
      "data-id": 8,
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
      "data-id": 9,
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
      "data-id": 10,
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
      "data-id": 11,
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
    {
      "data-id": 12,
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
  ];

  function bannerBtnClick(e) {
    const { id } = e.target.dataset;
    setBannerBtnNum(Number(id));
  }
  function productBtnClick(e) {
    const { id } = e.target.dataset;
    setProductBtnNum(Number(id));
    setCurrentBtnNum(e.target.dataset.id);
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     setBannerBtnNum(bannerBtnNum < 4 ? bannerBtnNum + 1 : bannerBtnNum);
  //   }, 4000);
  // }, [bannerBtnNum]);

  useEffect(() => {
    productContainer.current.style.transform = `translate(-${
      currentBtnNum * 12
    }00px)`;
    productContainer.current.style.transition = `transform 800ms`;
  }, [currentBtnNum]);

  return (
    <div className="main">
      {/* 위쪽 배너 슬라이드 */}
      <div className="bannerContainerWrapper">
        <div className="bannerContainer">
          <div ref={bannerContainer} className="carousel">
            {INNER__BANNER.map((inner, index) => {
              return (
                <div
                  key={index}
                  className={`inner ${bannerBtnNum === index && "active"}`}
                >
                  <img className="item" alt={inner.alt} src={inner.src} />
                </div>
              );
            })}
          </div>
        </div>
        <Buttons
          imgLength={INNER__BANNER.length}
          btnNum={bannerBtnNum}
          handleBtnClick={bannerBtnClick}
        />
      </div>

      {/* 가운데 상품 슬라이드 */}
      <div className="productContainer">
        <h2 className="title">인기 원두 Top 12</h2>
        <div className="carousel">
          <ul ref={productContainer} className="productWrap">
            {INNER__PRODUCT.map(
              ({ id, name, desc, country_name, price, imgUrl }) => (
                <li key={id} data-country={country_name}>
                  <div className="thumbnail">
                    <img className="thumb" alt={name} src={imgUrl[0]} />
                    <img className="thumbHover" alt={name} src={imgUrl[1]} />
                  </div>
                  <div className="info">
                    <p className="name">{name}</p>
                    <p className="desc">{desc}</p>
                  </div>
                  <p className="cost">
                    <span>₩ </span>
                    {`${price.slice(0, price.length - 3)},${price.slice(-3)}`}
                  </p>
                </li>
              )
            )}
          </ul>
          <Buttons
            imgLength={3}
            btnNum={productBtnNum}
            handleBtnClick={productBtnClick}
          />
        </div>
      </div>

      {/* 이벤트 페이지 그리드 */}
      <div className="girdContainer">
        <img alt="item1" src="./images/slides/grid1.jpg" className="item1" />
        <img alt="item2" src="./images/slides/grid2.jpg" className="item2" />
        <img alt="item3" src="./images/slides/grid3.jpg" className="item3" />
        <img alt="item4" src="./images/slides/grid4.jpg" className="item4" />
      </div>

      {/* 브랜드 설명*/}
      <div className="aboutBrand">
        <div className="text">
          <h2 className="title">발리데이션 페이셜</h2>
          <p className="description">
            발리데이션 페이셜 스파 트리트먼트'로 온몸의 감각을 <br />
            깨워보세요. 상의 보드라움이 피부 위에 내려앉은 듯한 <br />
            느낌. 전문가의 능숙한 손길은 당신이 그리워하던 건강함 <br />을
            되찾아줄 거예요.
          </p>
        </div>
        <img
          className="image"
          alt="slideImage"
          src="./images/slides/coffee.png"
        />
      </div>
    </div>
  );
};
export default Main;
