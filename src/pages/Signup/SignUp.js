import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Component/Input";
import INPUT_LIST from "./Component/INPUT_LIST";
import "./SignUp.scss";

function SignUp() {
  const navigate = useNavigate();

  const goToSignUpDone = () => {
    navigate("/signup_done");
  };

  return (
    <div className="signupAll">
      <div className="signupText">JOIN US</div>
      <div className="location">
        <p className="info">정보입력</p>
        <p className="sideBar"> | </p>
        <p className="done"> 가입완료</p>
      </div>

      <div className="signupInfoBox">
        <div className="infoTitle">
          <p className="basicInfo">기본정보</p>
          <p className="desc">필수 항목은 반드시 입력하셔야 하는 항목입니다</p>
        </div>
        <div className="inputBox"></div>
        {INPUT_LIST.map(({ important, id, labelName, name, type }) => (
          <Input
            important={important}
            key={id}
            labelName={labelName}
            name={name}
            type={type}
          />
        ))}
      </div>
      <button className="signupbutton" onClick={goToSignUpDone}>
        회원가입
      </button>
    </div>
  );
}

export default SignUp;
