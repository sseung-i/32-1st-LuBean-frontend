import React, { useState } from "react";
import Tab from "./Tab/Tab";
import ReviewList from "./ReviewList/ReviewList";
import Info from "./Info/Info";
import Delivery from "./Delivery/Delivery";
import "./Detail.scss";

const Detail = () => {
  // const [clickTab, setClickTab] = useState([]);
  const [value, setValue] = useState(0);
  return (
    //디테일 윗부분
    <div className="detail">
      <div className="container">
        <section className="mainPic">
          <img
            className="pic"
            src="../../../images/products/detailmain.png"
            alt="상세페이지 커피"
          />
        </section>
        {/* 오른쪽 부분 */}
        <section className="mainContent">
          <div className="mainName">
            <h1 className="firstName">과테말라 엘 모리또</h1>
            <h3 className="secondName">El Morito</h3>
          </div>
          <ul className="mainPrice">
            <li className="price">
              <div className="priceName">
                <strong>판매가</strong>
              </div>
              <div className="priceWon">
                <strong>30000원</strong>
              </div>
            </li>
          </ul>
          <div className="mainWeight">
            <h3 className="weightName">용량</h3>
            <div className="weight">100g</div>
          </div>
          <div className="itemCount">
            <span className="countContainer">
              <button
                className="minusBtn"
                onClick={() => {
                  setValue(value - 1);
                }}
              >
                -
              </button>
              <input className="countBox" placeholder={value} type="text" />
              <button
                className="plusBtn"
                onClick={() => {
                  setValue(value + 1);
                }}
              >
                +
              </button>
            </span>
            <span class="total">125g/ 30,000원</span>
            <button className="totalDelBtn">x</button>
          </div>

          <div className="totalPrice">
            <div>총합계금액 </div>
            <div className="priceNum">30,000</div>
          </div>

          <div className="buttonCart">
            <button className="cartBtn">장바구니</button>
            <button className="orderBtn">주문하기</button>
          </div>
        </section>
      </div>
      {/* tab */}

      <div id="tab01">
        <Tab />
      </div>
      <div className="mainContainer">
        <Info />
      </div>

      {/* 리뷰 */}

      <div className="review">
        <div id="tab02">
          <Tab />
        </div>
        <ReviewList />
      </div>
      {/* 배송/교환 */}
      <div className="delivery">
        <div id="tab03">
          <Tab />
        </div>
        <Delivery />
      </div>
    </div>
  );
};

export default Detail;
