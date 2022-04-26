import React from "react";
import "./Detail.scss";

const Detail = () => {
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
            <div className="mainWeight">
              <h3 className="weightName">용량</h3>
              <div className="dropdown">
                <select className="dropdownContent">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
          </ul>
          <div className="buttonCart">
            <button className="cartBtn">장바구니</button>
            <button className="orderBtn">주문하기</button>
          </div>
        </section>
      </div>

      <div className="tab">
        <div className="wrap">
          <a href="#detail">상품상세정보</a>
          <a href="#reviews">상품후기</a>
          <a href="#delivery">배송 및 교환/반품안내</a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
