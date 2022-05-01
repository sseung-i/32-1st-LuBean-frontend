import React from "react";
import "./Modal.scss";

const Modal = ({ modalOpen, closeModal }, props) => {
  return (
    <div className={`modal ${modalOpen && "modal openModal"}`}>
      {modalOpen ? (
        <section className="modalSection">
          <div className="modalBox">
            <header className="modalHeader">
              <button className="headerCloseBtn" onClick={closeModal}>
                &times;
              </button>
            </header>
            <main className="modalMain">
              <h1>상품이 장바구니에 담겼습니다.</h1>
              <p>바로 확인하시겠습니까?</p>
            </main>
            <footer className="modalFooter">
              <button className="footerCartBtn" onClick={closeModal}>
                계속 쇼핑하기
              </button>
              <button className="footerOrderBtn" onClick={closeModal}>
                확인하기
              </button>
            </footer>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
