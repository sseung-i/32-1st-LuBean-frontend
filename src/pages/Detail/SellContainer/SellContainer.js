import React, { useState } from "react";
import Modal from "../Modal/Modal";

const SellContainer = ({ feedsList }) => {
  const { itemTitleImg, titleKr, titleEn, price, weight } = feedsList;

  const [count, setCount] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const goToOrder = () => {
    alert("주문성공!!");
  };

  return (
    <div className="container">
      <section className="mainPic">
        <img className="pic" src={itemTitleImg} alt="상세페이지 커피" />
      </section>
      <section className="mainContent">
        <div className="mainName">
          <h1 className="firstName">{titleKr}</h1>
          <h3 className="secondName">{titleEn}</h3>
        </div>
        <ul className="mainPrice">
          <li className="price">
            <div className="priceName">
              <strong>판매가</strong>
            </div>
            <div className="priceWon">
              {price && <strong>{price.toLocaleString()} 원</strong>}
            </div>
          </li>
        </ul>
        <div className="mainWeight">
          <h3 className="weightName">용량</h3>
          <div className="weight">{weight} g</div>
        </div>
        <div className="itemCount">
          <span className="countContainer">
            <button
              className="minusBtn"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
            <input className="countBox" placeholder={count} type="text" />
            <button
              className="plusBtn"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </span>
        </div>

        <div className="totalPrice">
          <div>총합계금액 </div>
          <div className="priceNum">{(count * 30000).toLocaleString()}</div>
        </div>

        <div className="buttonCart">
          <button className="cartBtn" onClick={openModal}>
            장바구니
          </button>

          <Modal modalOpen={modalOpen} closeModal={closeModal} />
          <button className="orderBtn" onClick={goToOrder}>
            주문하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default SellContainer;
