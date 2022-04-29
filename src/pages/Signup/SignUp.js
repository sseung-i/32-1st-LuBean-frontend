import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Component/Input";
// import INPUT_LIST from "./Component/INPUT_LIST";
import "./SignUp.scss";

function SignUp() {
  const [signUpValues, setSignUpValues] = useState({
    idInput: "",
    pwInput: "",
    pwInputCheck: "",
    nameInput: "",
    emailInput: "",
    phoneInput: "",
  });

  const handleInput = e => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setSignUpValues({ ...signUpValues, [name]: value });
  };

  const navigate = useNavigate();

  const idRules =
    signUpValues.idInput.includes("@") && signUpValues.idInput.includes(".");
  const pwRules = signUpValues.pwInput.length >= 8;
  const pwCheckRules = signUpValues.pwInput === signUpValues.pwInputCheck;
  const nameRules = signUpValues.idInput.length > 1;
  const emailRules =
    signUpValues.idInput.includes("@") && signUpValues.idInput.includes(".");
  const phoneNumRules = signUpValues.phoneInput.length === 11;

  const success = () => {
    idRules &&
    pwRules &&
    pwCheckRules &&
    nameRules &&
    emailRules &&
    phoneNumRules
      ? goToSignUpDone()
      : checkSignup();
  };

  const goToSignUpDone = () => {
    navigate("/signup_done");
  };

  const checkSignup = () => {
    alert("잘못된 내용이 없는지 확인바랍니다.");
  };

  const INPUT_LIST = [
    {
      important: true,
      id: 1,
      labelName: "아이디",
      name: "idInput",
      type: "text",
      rules:
        signUpValues.idInput.includes("@") &&
        signUpValues.idInput.includes("."),
      checkMPass: "사용가능한 아이디입니다.",
      checkMtWrong: "이메일 형식으로 작성 바랍니다.",
    },
    {
      important: true,
      id: 2,
      labelName: "비밀번호",
      name: "pwInput",
      type: "password",
      rules: signUpValues.pwInput.length >= 8,
      checkMPass: "사용가능한 비밀번호입니다.",
      checkMtWrong: "",
    },
    {
      important: true,
      id: 3,
      labelName: "비밀번호 확인",
      name: "pwInputCheck",
      type: "password",
      rules: signUpValues.pwInput === signUpValues.pwInputCheck,
      checkMPass: "비밀번호가 일치합니다.",
      checkMtWrong: "비밀번호가 일치하지 않습니다.",
    },
    {
      important: true,
      id: 4,
      labelName: "이름",
      name: "nameInput",
      type: "text",
      rules: signUpValues.idInput.length > 1,
      checkMPass: "사용가능한 이름입니다.",
      checkMtWrong: "",
    },
    {
      important: true,
      id: 5,
      labelName: "이메일",
      name: "emailInput",
      type: "text",
      rules:
        signUpValues.idInput.includes("@") &&
        signUpValues.idInput.includes("."),
      checkMPass: "사용가능한 이메일입니다.",
      checkMtWrong: "이메일 형식에 맞지않습니다.",
    },
    {
      important: true,
      id: 6,
      labelName: "휴대폰번호",
      name: "phoneInput",
      type: "text",
      rules: signUpValues.phoneInput.length === 11,
      checkMPass: "",
      checkMtWrong: "휴대폰번호를 다시 확인해주세요.",
    },
  ];

  return (
    <div className="signupAll">
      <div className="signupBox">
        <div className="signupText">JOIN US</div>
        <div className="location">
          <p className="info">정보입력</p>
          <p className="sideBar"> | </p>
          <p className="done"> 가입완료</p>
        </div>

        <div className="signupInfoBox">
          <div className="infoTitle">
            <p className="basicInfo">기본정보</p>
            <p className="desc">
              필수 항목은 반드시 입력하셔야 하는 항목입니다
            </p>
          </div>
          <div className="inputBox"></div>
          {INPUT_LIST.map(
            ({
              important,
              id,
              labelName,
              name,
              type,
              rules,
              checkMPass,
              checkMtWrong,
            }) => (
              <Input
                handleInput={handleInput}
                important={important}
                key={id}
                labelName={labelName}
                name={name}
                type={type}
                rules={rules}
                value={signUpValues[name]}
                checkMPass={checkMPass}
                checkMtWrong={checkMtWrong}
              />
            )
          )}
        </div>
      </div>
      <button className="signupbutton" onClick={goToSignUpDone}>
        회원가입
      </button>
    </div>
  );
}

export default SignUp;
