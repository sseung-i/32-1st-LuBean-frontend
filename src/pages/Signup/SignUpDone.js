import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpDone.scss";

function SignUpDone() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="signUpDoneAll">
      <div className="joinText"> JOIN US </div>
      <div className="location">
        <span className="info">정보입력</span>
        <span className="sideBar">|</span>
        <span className="done">가입완료</span>
      </div>

      <div className="welcomeBox">
        <div className="imgCover">
          <img
            alt="Gift"
            className="coverFor"
            src="/images/Signup/coffeeTable.jpg"
          />
        </div>
        <div className="textCover">
          <p className="welcomeM">환영합니다.</p>
          <p className="conM">LuBean 회원가입을 축하드립니다.</p>
          <p className="enjM">
            로그인 후 러빈의 다양한 서비스를 <br />
            <br />
            이용하실 수 있습니다.
          </p>
        </div>
      </div>
      <button onClick={goToLogin} className="login_button">
        로그인 하기
      </button>
    </div>
  );
}

export default SignUpDone;
