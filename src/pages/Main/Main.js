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
      title: "도현님....",
      desc: "깃 살려주세요.... 헝헝 제꺼 풋터.. scss..헝헝 나만깨져 ㅠㅠ",
    },
    {
      "data-id": 1,
      className: "item",
      alt: `item1`,
      src: `./images/slides/main1.jpg`,
      title: "도현니이이임....",
      desc: "merㅏ하ge?",
    },
    {
      "data-id": 2,
      className: "item",
      alt: `item2`,
      src: `./images/slides/main2.jpg`,
      title: "멘토님 많이 븉여주세요",
      desc: "소환!!!!",
    },
    {
      "data-id": 3,
      className: "item",
      alt: `item3`,
      src: `./images/slides/main3.jpg`,
      title: "경래님!!!!! ......백엔드 파이팅 ^_^",
      desc: "우리 소듕한 뺵엔드분들 잘부탁드립니다........헿>ㅁ<",
    },
    {
      "data-id": 4,
      className: "item",
      alt: `item4`,
      src: `./images/slides/main4.jpg`,
      title: "NEW CROP 생두 출시 예정",
      desc: "따뜻하고 부드러운 바람이 내 마음을 감싸안은 듯한 평온함",
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBannerBtnNum(bannerBtnNum < 4 ? bannerBtnNum + 1 : 0);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [bannerBtnNum]);

  useEffect(() => {
    productContainer.current.style.transform = `translate(-${
      currentBtnNum * 12
    }00px)`;
    productContainer.current.style.transition = `transform 800ms`;
  }, [currentBtnNum]);

  return (
    <div className="main">
      {/* 위쪽 배너 슬라이드 */}
      <div ref={bannerContainer} className="bannerCarousel">
        {INNER__BANNER.map(({ title, desc }, index) => {
          return (
            <div
              key={index}
              className={`inner ${bannerBtnNum === index && "active"}`}
            >
              <div className="slideText">
                <h3 className={index >= 2 && "blackText"}>{title}</h3>
                <p className={index >= 2 && "blackText"}>{desc}</p>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: `url(
                        images/slides/main_slide_${index + 1}.jpg)`,
                }}
              />
              {/* <img className="item" alt={inner.alt} src={inner.src} /> */}
            </div>
          );
        })}
        <Buttons
          imgLength={INNER__BANNER.length}
          btnNum={bannerBtnNum}
          handleBtnClick={bannerBtnClick}
        />
      </div>
      {/* 

      {/* 가운데 상품 슬라이드 */}
      <div className="productContainer">
        <h2 className="title">인기 원두 Top 12</h2>
        <div className="productCarousel">
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
        <div className="item1">
          <p className="videoText">러빈의 향기</p>
          <video autoPlay muted loop alt="item1">
            <source src="./images/slides/grid1.mp4" />
          </video>
        </div>
        <div className="imgWrap item2">
          <img alt="item2" src="./images/slides/grid2(2).jpg" />
        </div>
        <div className="imgWrap item3">
          <img alt="item3" src="./images/slides/grid3(3).jpg" />
        </div>
        <div className="imgWrap item4">
          <img alt="item4" src="./images/slides/grid4.jpg" />
        </div>
      </div>

      {/* 브랜드 설명*/}
      <div className="aboutBrand">
        <div className="text">
          <h2 className="title">I LuBean YOU</h2>
          <p className="description">
            러빈에서는 온도, 일광, 강우량 등 커피 재배에
            <br />
            이상적인 기후가 나타나는 고지대에서 생산된
            <br />
            최상의 풍미를 자랑하는 아라비카 원두를
            <br />
            만나보실 수 있습니다. 오랜 세월 경험을 쌓아온
            <br />
            최고의 로스팅 기술은 예술이자 과학입니다.
            <br />
            <br />
            현재 러빈은 전 세계 50여 개국에서
            <br />
            800여 개 매장을 운영하고 있습니다.
            <br />
            러빈의 철학이 담긴 원두를 만나보세요.
            <br />
            <br />
            네, 우리는 커피에 미친 사람들입니다.
          </p>
        </div>
        <img
          className="image"
          alt="slideImage"
          src="./images/slides/brandImg.jpg"
        />
      </div>
    </div>
  );
};
export default Main;
