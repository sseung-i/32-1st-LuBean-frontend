import React, { useRef, useState } from "react";
import "./Footer.scss";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");
  // const [personId, setPersonId] = useState("");
  const nameText = useRef(null);
  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleBtnClick = e => {
    e.preventDefault();
    if (inputValue.includes("@")) {
      alert("구독 성공! 매주 월요일에 만나요!");
    } else if (inputValue === "") {
      alert("이메일 주소를 입력해주세요!");
    } else {
      alert("이메일 형식을 맞춰주세요!");
    }
    setInputValue("");
  };

  const handleMouseEnter = e => {
    console.log(e.target.id);
    // setPersonId(e.target.id);
    nameText.current.style.display = "block";
  };

  const handleMouseLeave = e => {
    // setPersonId(e.target.id);
    nameText.current.style.display = "none";
  };

  return (
    <div className="footer">
      <div className="icons">
        <img className="icon" src="./images/coffee-beans.png" alt="icon" />
        <div className="text">LOVE</div>
        <img className="icon" src="./images/coffee-beans.png" alt="icon" />
        <div className="text">BEANS</div>
        <img className="icon" src="./images/coffee-beans.png" alt="icon" />
      </div>
      <div className="info">
        <div className="infoLeft">
          <img className="logo" src="./images/logo.svg" alt="logo" />
          <p className="leftTop">
            고객센터 1644-4461
            <br />
            <span>
              <span className="email">service@lubean.co.kr</span>
              <br />
              상담전화 13:00~16:00(평일)
              <br />
              상담톡 10:00~19:00(평일)
            </span>
          </p>
          <p className="leftBottom">
            기업선물 070-0328-0617
            <br />
            <span>
              <span className="email">order@lubean.co.kr</span>
              <br />
              상담 전화 13:00~16:00(평일)
            </span>
          </p>
          <div className="favicons">
            {nameData.map(person => {
              return (
                <>
                  <a
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    href={person.url}
                  >
                    <i key={person.id} id={person.name} class={person.icon} />
                  </a>
                  <p ref={nameText}>{person.name}</p>
                </>
                // <div
                //   key={person.id}
                //   id={person.id}
                //   name={person.name}
                //   onMouseEnter={handleMouseEnter}
                //   onMouseLeave={handleMouseLeave}
                // >
                //   <a href={person.url} target="_blank" rel="noreferrer">
                //     <i class={person.icon} />
                //   </a>
                //   <p ref={nameText}>{person.name}</p>
                // </div>
              );
            })}
            {/* 
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="https://github.com/guiahkim"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github" />
              </a>
              <p ref={nameText}>guiah</p>
            </div>

            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="https://github.com/JaewY"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github-alt" />
              </a>
              <p ref={nameText}>jaewon</p>
            </div>

            <div>
              <a>
                <i class="fa-brands fa-github" />
              </a>
              <p>jinseop</p>
            </div>

            <div>
              <a
                href="https://github.com/hyunny123"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github-alt" />
              </a>
              <p>hyunjeong</p>
            </div>

            <div>
              <a
                href="https://github.com/imsooyeon"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github" />
              </a>
              <p>sooyoen</p>
            </div>

            <div>
              <a
                href="https://github.com/sseung-i"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github-alt" />
              </a>
              <p>sseungi</p>
            </div> */}
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
              onChange={handleInputChange}
              value={inputValue}
              className="subscribeInput"
              placeholder="이메일 주소를 입력해 주세요."
            />
            <button onClick={handleBtnClick}>구독하기</button>
          </form>
          <p className="description">
            매주 월요일 오후, 구독자님을 위한 제품과 브랜드 이야기를
            전해드립니다.
            <br />
            구독은 언제든지 해지하실 수 있습니다.
            <a className="preview">미리보기</a>
          </p>
          <p className="address">
            서울특별시 강남구 테헤란로 427(위워크) 10층 | 사이트 운영자:주식회사
            러빈코리아 | 대표이사:안도현
            <br />
            사업자 등록번호:328-06-172022 사업자정보확인 | 통신판매업
            신고번호:2022-서울강남-0506 | 개인정보보호책임자:김경래
          </p>
          <p className="copyright">
            COPYRIGHT@LUBEANKOREA CO>LTD>ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const nameData = [
  {
    id: 0,
    name: "guiah",
    url: "https://github.com/guiahkim",
    icon: "fa-brands fa-github",
  },
  {
    id: 1,
    name: "jaewon",
    url: "https://github.com/JaewY",
    icon: "fa-brands fa-github-alt",
  },
  {
    id: 2,
    name: "jinseop",
    url: "https://github.com/guiahkim",
    icon: "fa-brands fa-github",
  },
  {
    id: 3,
    name: "hyunjeong",
    url: "https://github.com/hyunny123",
    icon: "fa-brands fa-github-alt",
  },
  {
    id: 4,
    name: "sooyeon",
    url: "https://github.com/imsooyeon",
    icon: "fa-brands fa-github",
  },
  {
    id: 5,
    name: "sseungi",
    url: "https://github.com/sseung-i",
    icon: "fa-brands fa-github-alt",
  },
];
