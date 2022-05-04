import React from "react";
import "./Delivery.scss";

const Delivery = () => {
  return (
    <div>
      <div className="inWidthWrap">
        <h3>배송안내</h3>
        <div className="adminMsg">
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
        <div className="adminMsg">
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
              *고객변심으로 인한 교환시 초도 택배 비용을 포함한 반품 택배 비용이
              부과됩니다.
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
  );
};

export default Delivery;
