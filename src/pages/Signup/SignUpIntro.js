import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpIntro.scss";

function SignUpIntro() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="all">
      <div className="join_text">JOIN US</div>
      <button className="join_button" onClick={goToSignUp}>
        쇼핑몰 회원가입
      </button>

      <p>
        이미 쇼핑몰 회원이세요? <span onClick={goToLogin}>로그인 </span>
      </p>
    </div>
  );
}

export default SignUpIntro;
