import React, { useState } from "react";
import "./SellContainer.scss";

const SellContainer = ({ feedsList, openModal, mockdata }) => {
  const {
    image_url,
    korean_name,
    english_name,
    product_weight,
    thumbnail_url,
  } = feedsList;
  const { price } = mockdata;

  // console.log(feedsList);
  // console.log(image_url);

  const [count, setCount] = useState(1);

  const goToOrder = () => {
    alert("주문성공!!");
  };

  const handleMinus = () => {
    if (count === 1) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };
  //console.log(data);
  //post
  // const openModal=()=>{

  //   fetch(, {
  //     method: "post",
  //     headers: { Authorization: token },
  //     body: JSON.stringify({
  //       product_id: product.id,
  //       product_name: korean_name,
  //       count: count,
  //     }),
  //   }).then(response => {
  //     if (response === 'SUCCESS') {
  //       alert(
  //         `주문이 성공적으로 장바구니에 담겼습니다.`
  //         );
  //       }
  //     });

  //   }
  return (
    feedsList && (
      <div className="container">
        <section className="mainPic">
          <img className="pic" src={thumbnail_url} alt="상세페이지 커피" />
        </section>
        <section className="mainContent">
          <div className="mainName">
            <h1 className="firstName">{korean_name}</h1>
            <h3 className="secondName">{english_name}</h3>
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
            <div className="weight">{product_weight} g</div>
          </div>
          <div className="itemCount">
            <span className="countContainer">
              <button className="minusBtn" onClick={handleMinus}>
                -
              </button>
              <input className="countBox" placeholder={count} type="text" />
              <button
                className="plusBtn"
                onClick={() => {
                  setCount(count => count + 1);
                }}
              >
                +
              </button>
            </span>
          </div>

          <div className="totalPrice">
            <div>총합계금액 </div>
            <div className="priceNum">{(count * 30000).toLocaleString()}원</div>
          </div>

          <div className="buttonCart">
            <button className="cartBtn" onClick={openModal}>
              장바구니
            </button>

            <button className="orderBtn" onClick={goToOrder}>
              주문하기
            </button>
          </div>
        </section>
      </div>
    )
  );
};

export default SellContainer;
