import React from "react";
import "./SignUp_Intro.scss";
import { useNavigate } from "react-router-dom";

function SignUp_Intro() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="all">
      <div className="join_text">JOIN US</div>
      <button className="join_button">쇼핑몰 회원가입</button>

      <span>이미 쇼핑몰 회원이세요? </span>
      <span onClick={goToLogin}>로그인 </span>
    </div>
  );
}

export default SignUp_Intro;
