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
          {/* 별이랑 리뷰 */}
          <div className="reMain">
            <div className="starRadioBtn">
              <form className="reviewForm">
                <div className="reMainStar">
                  <div className="starText">평가</div>
                  <div className="radio">
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
                <div className="reviewArea">
                  <textarea className="reviewTextArea" type="text" />
                </div>
                <div className="reviewBtn">
                  <button className="reviewButton">후기작성</button>
                </div>
              </form>
            </div>
            {/* 댓글달리는곳 */}
            <div className="reviewList">
              <div className="reviewlistContainer">
                <div className="reviewListBox">
                  <div className="reviewArticle">
                    <div className="summary">
                      <div className="star">★★★★★</div>
                      <div className="date">2022.04.26</div>
                      <div className="name">이**</div>
                    </div>
                    <div className="reviewContent">
                      <div className="content">
                        향이 너무 좋아요! 재구매 의사 있습니다!!!!!
                      </div>
                    </div>
                    <div className="reviewBtn">
                      <button className="btnDel">삭제</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 배송/교환 */}
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
            <p>
              <span> ◼︎ </span>
              <span>
                배송비 : 기본배송료는 2,500원 입니다. (도서,산간,오지 일부지역은
                배송비가 추가될 수 있습니다)
              </span>
            </p>
            <p>
              <span> ◼︎ </span>
              <span>택배사 : 우체국 택배를 이용합니다.</span>
            </p>
            <p>
              <span> ◼︎ </span>
              <span>배송가능지역 : 국내 배송 / 해외 배송은 불가 합니다.</span>
            </p>
          </div>
          <div className="adminMsgPage">
            <p>
              <span> ◼︎ </span>
              <span>홈페이지에서 구매한 경우 </span>
            </p>
          </div>

          <h3>배송안내</h3>
          <div class="adminMsg">
            <p>
              <span>
                {" "}
                러쉬코리아 홈페이지에서 구매한 제품은 홈페이지를 통해서만 교환이
                가능합니다.{" "}
              </span>
            </p>
            <p>
              <span>
                고객님의 변심에 의한 반품인 경우 상품 및 서비스를 공급 받은
                날로부터 7일 이내 가능하며, 미 개봉 제품만 가능합니다.
              </span>
            </p>
            <p>
              <span> 고객센터(1234-1234)로 반품 접수를 받고 있으며, </span>
              <span>
                지정 택배사를 이용하여 상품 회수 후 교환/반품 여부에 관한 안내가
                이루어집니다.
              </span>
            </p>
          </div>
          <div className="adminMsgPage">
            <p>
              <span>
                *고객변심으로 인한 교환시 초도 택배 비용을 포함한 반품 택배
                비용이 부과됩니다.
              </span>
            </p>
            <p>
              <span>
                *상품결함으로 인한 교환의 경우 러쉬코리아에서 택배비용을
                부담합니다.
              </span>
            </p>
            <p>
              <span>*택배 비용은 무통장 입금을 통해서만 결제 가능합니다.</span>
            </p>
            <p>
              <span>
                *교환 상품에 스마트 샘플 또는 깜짝 선물이 있는 경우, 함께
                반품하여야 교환이 진행됩니다.
              </span>
            </p>
            <p>
              <span>
                *프레쉬 마스크를 포함하여 냉장배송을 받은 제품은 교환이
                불가합니다.{" "}
              </span>
            </p>
          </div>
          <div className="adminMsgPage">
            <p>
              <span> ◼︎ </span>
              <span>휴대폰 소액 결제 시 꼭 참고해주세요.</span>
            </p>
            <p>
              <span>
                휴대폰 소액 결제는 익월 결제 취소가 불가한 통신사 정책으로 인해,
                당월 (1일~31일) 에 한한 결제 건만 취소/환불할 수 있습니다.
              </span>
            </p>
            <p>
              <span>또한 부분 결제 취소 불가하오니 주문 시 유의 바랍니다.</span>
            </p>
          </div>
          <div className="adminMsgPage">
            <p>
              <span>고객센터 1234-1234</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
