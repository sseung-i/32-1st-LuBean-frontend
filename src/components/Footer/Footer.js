import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <i className="fa-solid fa-mug-hot" />
        <i className="fa-solid fa-mug-saucer" />
        <i className="fa-solid fa-mug-hot" />
        <i className="fa-solid fa-mug-saucer" />
        <i className="fa-solid fa-mug-hot" />
        <i className="fa-solid fa-mug-saucer" />
      </div>
      <div className="info">
        <div className="infoLeft">
          <div className="logo">LuBean</div>
          <p className="leftTop">
            고객센터 1644-2357
            <br />
            <span>
              webmaster@lubean.co.kr
              <br />
              상담전화 13:00~16:00(평일)
              <br />
              상담톡 10:00~16:00(평일)
            </span>
          </p>
          <p className="leftBottom">
            기업선물 070-4713-8543
            <br />
            <span>
              order@lubean.co.kr
              <br />
              상담 전화 13:00~16:00(평일)
            </span>
          </p>
          <div className="favicons">
            <i className="fa-brands fa-facebook-f" />
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-youtube" />
            <i className="fa-brands fa-pinterest-p" />
            <i className="fa-brands fa-twitter" />
          </div>
        </div>
        <div className="infoRight">
          <ul className="menu">
            <li>
              <a>스카우트</a>
            </li>
            <li>
              <a>회사소개</a>
            </li>
            <li>
              <a className="policy">개인정보처리방침</a>
            </li>
            <li>
              <a>영상정보관리지침</a>
            </li>
            <li>
              <a>이용약관</a>
            </li>
            <li>
              <a>고객센터</a>
            </li>
          </ul>
          <form className="subscribe">
            <input
              className="subscribeInput"
              placeholder="이메일 주소를 입력해 주세요."
            />
            <button>구독하기</button>
          </form>
          <p className="description">
            매주 월요일 오후, 구독자님을 위한 제품과 브랜드 이야기를
            전해드립니다.
            <br />
            구독은 언제든지 해지하실 수 있습니다.
            <a className="preview">미리보기</a>
          </p>
          <p className="address">
            서울특별시 서초구 서운로 138(서초동이타워)6층|사이트 운영자:주식회사
            러쉬코리아|대표이사:우미령
            <br />
            사업자 등록번호:201-81-77964 사업자정보확인|통신판매업
            신고번호:2012-서울서초-0647|개인정보보호책임자:신상훈
          </p>
          <p className="copyright">
            COPYRIGHT@LUSHKOREA CO>LTD>ALLRIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
