import React, { useState } from "react";
import Tab from "./Tab/Tab";
import "./Detail.scss";

const Detail = () => {
  // const [clickTab, setClickTab] = useState([]);
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
              <button className="minusBtn">-</button>
              <input className="countBox" placeholder="1" type="text" />
              <button className="plusBtn">+</button>
            </span>
            <span class="total">125g/ 30,000원</span>
            <button className="totalDelBtn">x</button>
          </div>
          {/* <div className="itemPrice">
            <div className="priceText">총제품금액 </div>
            <div className="priceNum">30,000</div>
          </div> */}
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
      {/* <div className="tab">
        <div className="wrap">
          {clickTab.map(() => {})}
          <a href="#detail">상품상세정보</a>
          <a href="#reviews">상품후기</a>
          <a href="#delivery">배송 및 교환/반품안내</a>
        </div>
      </div> */}
      <Tab />

      <div className="mainContainer">
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
                  "적당한 산미와 달콤함이 혼합된 느낌으로 여운이 깊고 길게 남는
                  엘 모리또, 워시드이긴 하지만, 내추럴 못지 않는 느낌 을
                  많이주는 원두인거 같아서 제 베스트 픽입니다!!"
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
      {/* 리뷰 */}
      <div className="review">
        <div className="reContainer">
          <div className="reHeader">
            <div className="reHeaderFirst">
              <h1 className="reHeaderName">Product Reviews</h1>
              <span className="reHeaderStar">★★★★★</span>
            </div>
            <div className="reHeaderSecond">
              나만의 원두를 맛과 향을 리뷰해주세요!
            </div>
          </div>
          <div className="reMain">
            <div className="starRadioBtn">
              <form className="reviewForm">
                <div className="reMainStar">
                  <div className="starText">평가</div>
                  <div>
                    <input type="radio" id="star5" name="star" value="★★★★★" />
                    <label for="★★★★★">★★★★★</label>
                    <input type="radio" id="star4" name="star" value="★★★★☆" />
                    <label for="★★★★★">★★★★☆</label>
                    <input type="radio" id="star3" name="star" value="★★★☆☆" />
                    <label for="★★★★★">★★★☆☆</label>
                    <input type="radio" id="star2" name="star" value="★★☆☆☆" />
                    <label for="★★★★★">★★☆☆☆</label>
                    <input type="radio" id="star1" name="star" value="★☆☆☆☆" />
                    <label for="★★★★★">★☆☆☆☆</label>
                  </div>
                </div>
                <div>
                  <input type="text" className="reComment" />
                </div>
                <div>
                  <button>후기작성</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="delivery">
        <div className="deliveryWrap">
          <div>
            <a href="#detail">상품상세정보</a>
            <a href="#reviews">상품후기</a>
            <a href="#delivery">배송 및 교환/반품안내</a>
          </div>
        </div>
        <div className="inWidthWrap">
          <h3>배송안내</h3>
          <div class="adminMsg">
            <p />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
