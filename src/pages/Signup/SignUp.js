import React from "react";
import Input from "./Component/Input";
import "./SignUp.scss";

//상수데이터
const INPUT_LIST = [
  { id: 1, labelName: "* 아이디", className: "idInput", type: "text" },
  { id: 2, labelName: "* 비밀번호", className: "pwInput", type: "password" },
  {
    id: 3,
    labelName: "* 비밀번호 확인",
    className: "pwInputCheck",
    type: "password",
  },
  { id: 4, labelName: "* 이름", className: "nameInput", type: "text" },
  { id: 5, labelName: "닉네임", className: "nickInput", type: "text" },
  { id: 6, labelName: "* 이메일", className: "emailInput", type: "text" },
  { id: 7, labelName: "* 휴대폰번호", className: "phoneInput", type: "text" },
  { id: 8, labelName: "주소", className: "addressInput", type: "text" },
];

function SignUp() {
  return (
    <div className="signupAll">
      <div className="signupText">JOIN US</div>
      <div className="location">
        <p className="info">정보입력</p>
        <p className="sideBar"> | </p>
        <p className="done"> 가입완료</p>
      </div>
      <div className="basicInfoBox">
        <p className="basicInfo">기본정보</p>
        <p className="desc">필수 항목은 반드시 입력하셔야 하는 항목입니다</p>
      </div>
      <div className="signUpInputBox"></div>
      <div className="inputBox"></div>

      {INPUT_LIST.map(({ id, labelName, className, type }) => (
        <Input
          key={id}
          labelName={labelName}
          className={className}
          // name={name}
          type={type}
        />
      ))}

      <button className="signupbutton">회원가입</button>
    </div>
  );
}

export default SignUp;
