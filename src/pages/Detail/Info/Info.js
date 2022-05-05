import React, { useEffect, useRef, useState } from "react";
import "./Info.scss";

const Info = ({ infoList, mockdata }) => {
  const { korean_name, english_name, product_detail, image_url } = infoList;
  const { productInfo } = mockdata;

  const [btnNum, setBtnNum] = useState(0);

  const noteContainer = useRef(null);

  useEffect(() => {
    noteContainer.current.style.transform = `translateX(${-350 * btnNum}px)`;
  }, [btnNum]);

  const handleLeftClick = () => {
    if (btnNum > 0) {
      setBtnNum(btnNum => btnNum - 1);
    }
  };

  const handleRightClick = () => {
    if (btnNum < 2) {
      setBtnNum(btnNum => btnNum + 1);
    }
  };
  return (
    <div>
      <section className="sectionHeader">
        <div className="headerInner">
          <p className="headerCategory">New Crops</p>
          <h1 className="headerTitle">
            <span className="titleKr">{korean_name}</span>
            <span className="titleEn">{english_name}</span>
          </h1>
        </div>
      </section>

      <section className="sectionImg">
        <div className="titleImg">
          <div className="bgImg">
            <img alt="원두이미지" src={image_url[0]} />
          </div>
          <div className="reviewBox">
            <div className="boxInner">
              <h2 className="boxTitle">원두 구입 후기 ★ ★ ★ ★ ★</h2>
              <div className="boxContent">{productInfo.review.text}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionNote">
        <div className="innerNote">
          <div className="titleNote">
            <h1 className="titleHead"> Check Info & Note</h1>
            <span className="infoSub">✴︎ 제품상세정보</span>
            <ul className="notelist">
              {product_detail.split("\\n ").map((x, index) => (
                <li key={index}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="noteCarousel">
            <div className="noteList" ref={noteContainer}>
              {productInfo.note.map(({ img, title, desc }, index) => (
                <div key={index} className={`noteItem1 ${title}`}>
                  <div className="noteThumb">
                    <img alt={title} src={img} />
                  </div>
                  <div className="itemText">
                    <div className="itemTitle">{title}</div>
                    <div className="itemDesc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="noteCarouselBtn">
              <button onClick={handleLeftClick}>◀️</button>
              <button onClick={handleRightClick}>▶️</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
