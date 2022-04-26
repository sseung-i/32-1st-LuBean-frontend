import React, { useEffect, useState, useRef } from "react";
import "./Main.scss";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);

  const ref = useRef(null);

  function handleBtnClick() {
    setCurrentIndex(currentIndex + 1);
  }

  useEffect(() => {
    ref.current.style.transform = `translate(-${currentIndex}00vw)`;
  }, [currentIndex]);

  return (
    <div className="main">
      {/* 위쪽 배너 슬라이드 */}
      <div className="topWrapper">
        <div ref={ref} className="topContainer">
          <div className="inner">
            <img className="item" alt="item1" src="./images/slides/main1.jpg" />
          </div>
          <div className="inner">
            <img className="item" alt="item2" src="./images/slides/main2.jpg" />
          </div>
          <div className="inner">
            <img className="item" alt="item3" src="./images/slides/main3.jpg" />
          </div>
          <div className="inner">
            <img className="item" alt="item4" src="./images/slides/main4.jpg" />
          </div>
          <div className="inner">
            <img className="item" alt="item5" src="./images/slides/main5.jpg" />
          </div>
        </div>
      </div>
      <button onClick={handleBtnClick} className={`btn${currentIndex}`} />
      <button onClick={handleBtnClick} className={`btn${currentIndex}`} />
      <button onClick={handleBtnClick} className={`btn${currentIndex}`} />
      <button onClick={handleBtnClick} className={`btn${currentIndex}`} />
      <button onClick={handleBtnClick} className={`btn${currentIndex}`} />

      {/* 가운데 상품 슬라이드 */}
      <div className="bottomContainer">
        <h2 className="title">인기 원두 Top 12</h2>
        <div className="carousel">
          <div className="items">
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
          </div>
        </div>
      </div>

      {/* 이벤트 페이지 그리드 */}
      <div className="girdContainer">
        <div className="itemLeft" />
        <div className="itemRightTop" />
        <div className="itemRightBottomLeft" />
        <div className="itemRightBottomRight" />
      </div>

      {/* 브랜드 설명*/}
      <div className="aboutBrand">
        <div className="text">
          <h2 className="title">발리데이션 페이셜</h2>
          <p className="description">
            발리데이션 페이셜 스파 트리트먼트'로 온몸의 감각을 깨워보세요.상의
            보드라움이 피부 위에 내려앉은 듯한 느낌. 전문가의 능숙한 손길은
            당신이 그리워하던 건강함을 되찾아줄 거예요.
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
