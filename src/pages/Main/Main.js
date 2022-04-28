import React, { useEffect, useState, useRef } from "react";
import "./Main.scss";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const container = useRef(null);
  const container2 = useRef(null);
  const button = useRef(null);
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
    {
      id: 12,
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

  function handleBtnClick(event) {
    setCurrentIndex(event.target.dataset.id);
  }

  function handleBtnClick2(event) {
    setCurrentIndex2(event.target.dataset.id);
  }
  useEffect(() => {
    container.current.style.transform = `translate(-${currentIndex}00vw)`;
    button.current.style.backgroundColor = "white";
  }, [currentIndex]);

  useEffect(() => {
    container2.current.style.transform = `translate(-${currentIndex2}00vw)`;
    container2.current.style.transition = `transform 800ms`;
  }, [currentIndex2]);

  // if (currentIndex < 5) {
  //   setCurrentIndex(currentIndex + 1);
  // }
  // function carousel() {
  //   container.current.style.transform = `translate(-${currentIndex}00vw)`;
  // }

  // useEffect(() => {
  //   setInterval(carousel, 3000);
  //   // container.current.classList.add("active");
  //   // container.current.animation =
  // }, [currentIndex]);

  return (
    <div className="main">
      {/* 위쪽 배너 슬라이드 */}
      <div className="bannerContainerWrapper">
        <div className="bannerContainer">
          <div ref={container} className="carousel">
            <div className="inner">
              <img
                className="item"
                alt="item1"
                src="./images/slides/main1.jpg"
              />
            </div>
            <div className="inner">
              <img
                className="item"
                alt="item2"
                src="./images/slides/main2.jpg"
              />
            </div>
            <div className="inner">
              <img
                className="item"
                alt="item3"
                src="./images/slides/main3.jpg"
              />
            </div>
            <div className="inner">
              <img
                className="item"
                alt="item4"
                src="./images/slides/main4.jpg"
              />
            </div>
            <div className="inner">
              <img
                className="item"
                alt="item5"
                src="./images/slides/main5.jpg"
              />
            </div>
          </div>
        </div>
        <div className="buttons">
          <button
            ref={button}
            data-id="0"
            onClick={handleBtnClick}
            className={`btn${currentIndex}`}
          />
          <button
            ref={button}
            data-id="1"
            onClick={handleBtnClick}
            className={`btn${currentIndex}`}
          />
          <button
            ref={button}
            data-id="2"
            onClick={handleBtnClick}
            className={`btn${currentIndex}`}
          />
          <button
            ref={button}
            data-id="3"
            onClick={handleBtnClick}
            className={`btn${currentIndex}`}
          />
          <button
            ref={button}
            data-id="4"
            onClick={handleBtnClick}
            className={`btn${currentIndex}`}
          />
        </div>
      </div>

      {/* 가운데 상품 슬라이드 */}
      <div className="productContainer">
        <h2 className="title">인기 원두 Top 12</h2>
        <div className="carousel">
          <ul ref={container2} className="productWrap">
            {productsData.map(
              ({ id, name, desc, country_name, price, tag, imgUrl }) => (
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
        </div>
        <div className="buttons">
          <button
            data-id="0"
            onClick={handleBtnClick2}
            className={`btn${currentIndex2}`}
          />
          <button
            data-id="1"
            onClick={handleBtnClick2}
            className={`btn${currentIndex2}`}
          />
          <button
            data-id="2"
            onClick={handleBtnClick2}
            className={`btn${currentIndex2}`}
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
