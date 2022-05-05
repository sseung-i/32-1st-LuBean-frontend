/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "./Component/InputBox";
import LOGIN_LIST from "./Component/LOGIN_LIST";
import "./Login.scss";

function Login() {
  const [inputValues, setInputValues] = useState({
    id: "",
    pw: "",
  });

  const navigate = useNavigate();
  const idRules = inputValues.id.includes("@") && inputValues.id.includes(".");
  const pwRules = inputValues.pw.length >= 8;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(e.target.value);
  };

  const goToSignUpIntro = () => {
    navigate("/signup_intro");
  };

  const onLoginBtnClick = e => {
    e.preventDefault();
    if (idRules && pwRules) {
      fetch("http://10.58.7.248:8000/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: inputValues.id,
          password: inputValues.pw,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === "SUCCESS") {
            alert("환영합니다!");
            navigate("/main");
          } else {
            alert("아이디와 비밀번호 확인바랍니다.");
          }
        });
    } else {
      alert("아이디와 비밀번호를 확인해주세요");
    }
  };

  return (
    <div className="loginAll">
      <div className="centerFor">
        <div className="loginText">로그인</div>
        <div className="memberText">회원</div>

        <div className="inputBoxes">
          {LOGIN_LIST.map(({ iconName, name, type, placeholder }) => (
            <InputBox
              handleInput={handleInput}
              potato={iconName}
              name={name}
              type={type}
              placeholder={placeholder}
            />
          ))}
        </div>

        <label className="laberFor" htmlFor="saveID">
          <input className="inputFor" type="checkBox" />
          아이디 저장
        </label>

        <button className="loginButton" onClick={onLoginBtnClick}>
          로그인
        </button>
        <span className="other" onClick={goToSignUpIntro}>
          회원가입
        </span>
      </div>
    </div>
  );
}

export default Login;
