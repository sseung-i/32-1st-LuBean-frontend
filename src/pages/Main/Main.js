import React, { useEffect, useState, useRef } from "react";
import Buttons from "./Buttons/Buttons";
import { INNER__BANNER, INNER__PRODUCT } from "./MainData";
import "./Main.scss";

const Main = () => {
  const [bannerBtnNum, setBannerBtnNum] = useState(0);
  const [productBtnNum, setProductBtnNum] = useState(0);

  const bannerContainer = useRef(null);
  const productContainer = useRef(null);

  const bannerBtnClick = e => {
    const { id } = e.target;
    setBannerBtnNum(Number(id));
  };

  const productBtnClick = e => {
    const { id } = e.target;
    setProductBtnNum(Number(id));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBannerBtnNum(bannerBtnNum =>
        bannerBtnNum < 4 ? bannerBtnNum + 1 : 0
      );
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [bannerBtnNum]);

  useEffect(() => {
    productContainer.current.style.transform = `translate(-${
      productBtnNum * 12
    }00px)`;
    productContainer.current.style.transition = `transform 800ms`;
  }, [productBtnNum]);

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
          <img alt="item2" src="./images/slides/grid2(3).jpg" />
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
            러빈의 이름으로 만들어지는 모든 것들의
            <br />
            진가를 시작점에서부터 발견하고 우리의
            <br />
            열정과 노력으로 그 가치가 빛날 수 있도록
            <br />
            최선을 다합니다.
            <br />
            <br />
            현재 러빈은 전 세계 50여 개국에서
            <br />
            800여 개 매장을 운영하고 있습니다.
            <br />
            <br />
            오늘도 러빈과 함께하세요.
            <br />
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
