import React from "react";
import { Link } from "react-router-dom";
import "./Modal.scss";

const Modal = ({ modalOpen, closeModal }, props) => {
  const orderModal = () => {
    alert("장바구니로 이동!!!!");
  };

  return (
    <div className={`modal ${modalOpen && "modal openModal"}`}>
      {modalOpen && (
        <section className="modalSection">
          <div className="modalBox">
            <header className="modalHeader">
              <button className="headerCloseBtn" onClick={closeModal}>
                &times;
              </button>
            </header>
            <main className="modalMain">
              <h1 className="mainFirstLine">상품이 장바구니에 담겼습니다.</h1>
              <p className="mainSecondLine">바로 확인하시겠습니까?</p>
            </main>
            <footer className="modalFooter">
              <Link to="/list">
                <button className="footerCartBtn" onClick={closeModal}>
                  계속 쇼핑하기
                </button>
              </Link>
              <button className="footerOrderBtn" onClick={orderModal}>
                확인하기
              </button>
            </footer>
          </div>
        </section>
      )}
    </div>
  );
};

export default Modal;
