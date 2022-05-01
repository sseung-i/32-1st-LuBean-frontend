import React from "react";
import "./Info.scss";

const Info = ({ infoList }) => {
  const { titleKr, titleEn, productInfo } = infoList;
  return (
    <div>
      <section className="sectionHeader">
        <div className="headerInner">
          <p className="headerCategory">New Crops</p>
          <h1 className="headerTitle">
            <span className="titleKr">{titleKr}</span>
            <span className="titleEn">{titleEn}</span>
          </h1>
        </div>
      </section>

      <section className="sectionImg">
        <div className="titleImg">
          <div className="bgImg">
            <img alt="원두이미지" src={productInfo.review.image} />
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
              {/* <li>농장명 / 엘 모리또 El Morito</li>
              <li>농장주 / 로베르토 몬테로소 Roberto Monterroso</li>
              <li>지역 / 오리엔테 Oriente</li>
              <li>재배고도 / 1,600m</li>
              <li>품종 / 카투라, 카투아이 Caturra, Catuai</li>
              <li>가공방식 / 워시드 washed</li>
              <li>입고일 / 22.04.01</li> */}
              {productInfo.info.split("\n").map((x, index) => (
                <li key={index}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="noteList">
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
        </div>
      </section>
    </div>
  );
};

export default Info;
