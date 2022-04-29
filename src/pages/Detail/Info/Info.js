import React from "react";
import "./Info.scss";

const Info = () => {
  return (
    <div>
      <section className="sectionHeader">
        <div className="headerInner">
          <p className="headerCategory">과테말라 New Crops</p>
          <h1 className="headerTitle">
            <span className="titleKr">과테말라 엘 모리또</span>
            <span className="titleEn">El Morito</span>
          </h1>
        </div>
      </section>

      <section className="sectionImg">
        <div className="titleImg">
          <div className="bgImg">
            <img alt="원두이미지" src="./images/products/beanimg01.png" />
          </div>
          <div className="reviewBox">
            <div className="boxInner">
              <h2 className="boxTitle">원두 구입 후기 ★ ★ ★ ★ ★</h2>
              <div className="boxContent">
                "적당한 산미와 달콤함이 혼합된 느낌으로 여운이 깊고 길게 남는 엘
                모리또, 워시드이긴 하지만, 내추럴 못지 않는 느낌 을 많이주는
                원두인거 같아서 제 베스트 픽입니다!!"
              </div>
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
              <li>농장명 / 엘 모리또 El Morito</li>
              <li>농장주 / 로베르토 몬테로소 Roberto Monterroso</li>
              <li>지역 / 오리엔테 Oriente</li>
              <li>재배고도 / 1,600m</li>
              <li>품종 / 카투라, 카투아이 Caturra, Catuai</li>
              <li>가공방식 / 워시드 washed</li>
              <li>입고일 / 22.04.01</li>
            </ul>
          </div>
          <div className="noteList">
            <div>
              <div className="noteItem1 apple">
                <div className="noteThumb">
                  <img alt="커피노트" src="./images/products/apple.png" />
                </div>
                <div className="itemText">
                  <div className="itemTitle">사과</div>
                  <div className="itemDesc">새콤하면서도 달큰함</div>
                </div>
              </div>

              <div className="noteItem1 maple">
                <div className="noteThumb">
                  <img alt="커피노트" src="./images/products/maple.png" />
                </div>
                <div className="itemText">
                  <div className="itemTitle">메이플</div>
                  <div className="itemDesc">달달한 뒷맛</div>
                </div>
              </div>
            </div>
            <div className="blacktea">
              <div className="noteThumb">
                <img alt="커피노트" src="./images/products/blacktea.png" />
              </div>
              <div className="itemText">
                <div className="itemTitle">블랙티</div>
                <div className="itemDesc">살짝 쌉사래 하면서도 깔끔함</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
