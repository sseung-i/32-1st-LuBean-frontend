import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp_Done.scss";

function SignUp_Done() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="signUpDoneAll">
      <div className="joinText"> JOIN US </div>
      <span>정보입력 | 가입완료 </span>

      <div className="welcomeBox">
        <div className="imgCover">
          <img alt="Gift" src="/images/Signup/gift.jpg" />
        </div>
        <div className="textCover">
          <p className="welcomeM">환영합니다.</p>
          <p className="con">LuBean 회원가입을 축하드립니다.</p>
          <p className="enj">
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

export default SignUp_Done;
