import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="loginAll">
      <div className="loginText">로그인</div>
      <div className="memberText">회원</div>

      <input type="text" />
      <input type="password" />
      <span className="saveID">아이디 저장</span>
      <button className="loginButton">로그인</button>
      <span>회원가입 | 아이디찾기 | 비밀번호찾기 </span>
    </div>
  );
}

export default Login;
