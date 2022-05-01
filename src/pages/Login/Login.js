import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "./Component/InputBox";
import LOGIN_LIST from "./Component/LOGIN_LIST";
import "./Login.scss";
import "@fortawesome/fontawesome-free/js/all.js";

function Login() {
  const [inputValues, setInputValues] = useState({
    id: "",
    pw: "",
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const navigate = useNavigate();

  const goToMain = e => {
    navigate("/main");
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  const onLoginBtnClick = () => {
    idRules && pwRules ? goToMain() : checkLogin();
  };
  const checkLogin = () => {
    alert("아이디와 비밀번호를 확인해주세요");
  };

  const idRules = inputValues.id.includes("@") && inputValues.id.includes(".");
  const pwRules = inputValues.pw.length >= 8;

  return (
    <div className="loginAll">
      <div className="forCenter">
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

        <label htmlFor="saveID">
          <input type="checkBox" />
          아이디 저장
        </label>

        <button className="loginButton" onClick={onLoginBtnClick}>
          로그인
        </button>
        <span className="other" onClick={goToSignUp}>
          회원가입
        </span>
      </div>
    </div>
  );
}

export default Login;
