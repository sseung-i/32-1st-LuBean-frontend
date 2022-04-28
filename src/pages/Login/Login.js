import React from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "./Component/InputBox";
import LOGIN_LIST from "./Component/LOGIN_LIST";
import "./Login.scss";
import "@fortawesome/fontawesome-free/js/all.js";

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };

  return (
    <div className="loginAll">
      <div className="forCenter">
        <div className="loginText">로그인</div>
        <div className="memberText">회원</div>

        <div className="inputBoxes">
          {LOGIN_LIST.map(({ iconName, type, placeholder }) => (
            <InputBox potato={iconName} type={type} placeholder={placeholder} />
          ))}
        </div>
        <div className="saveID">
          <label htmlFor="idSave">
            <input id="idSave" type="checkBox" />
            아이디 저장
          </label>
        </div>
        <button className="loginButton" onClick={goToMain}>
          로그인
        </button>
        <span className="other">회원가입 | 아이디찾기 | 비밀번호찾기 </span>
      </div>
    </div>
  );
}

export default Login;
