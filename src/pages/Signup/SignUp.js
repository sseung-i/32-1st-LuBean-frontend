/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Component/Input";
import SelectInput from "./Component/SelectInput";
import SELECT_ADDRESSnEMAil from "./Component/SELECT_ADDRESSnEMAil";
import INPUT_LIST from "./Component/INPUT_LIST.JS";

import "./SignUp.scss";

function SignUp() {
  //test 삭제시 렌더링 아예 안됨.
  const [signUpValues, setSignUpValues] = useState({
    idInput: "",
    pwInput: "",
    pwInputCheck: "",
    nameInput: "",
    phoneInput: "",
    addressInput: "",
    emailInput: "",
  });
  const {
    idInput,
    pwInput,
    pwInputCheck,
    nameInput,
    phoneInput,
    addressInput,
    emailInput,
  } = signUpValues;

  const navigate = useNavigate();

  const idRules = idInput.match(
    /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
  );
  const pwRules = pwInput.match(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[?!@#$%*&])[A-Za-z\d?!@#$%*&]{8,}$/
  );
  const pwCheckRules = pwInput === pwInputCheck;
  const nameRules = nameInput.length > 1;
  const emailRules = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const phoneNumRules = phoneInput.length === 11;

  const handleInput = e => {
    const { name, value } = e.target;
    setSignUpValues({ ...signUpValues, [name]: value });
  };

  const saveAddress = e => {
    const { name, value } = e.target;

    if (name === "주소") {
      setSignUpValues({ ...signUpValues, ["addressInput"]: value });
    } else if (name === "메일") {
      setSignUpValues({ ...signUpValues, ["emailInput"]: value });
    }
  };

  const checkSignup = () => {
    const signUpCondition =
      idRules &&
      pwRules &&
      pwCheckRules &&
      nameRules &&
      emailRules &&
      phoneNumRules;

    if (signUpCondition) {
      fetch("http://10.58.3.83:8000/users/signup", {
        method: "POST",
        body: JSON.stringify({
          email: idInput,
          password: pwInput,
          username: nameInput,
          phone_number: phoneInput,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === "SUCCESS") {
            navigate("/signup_done", { replace: false });
          }
        });
    } else {
      alert("잘못된 내용이 없는지 확인바랍니다.");
    }
  };

  const INPUT_LIST = [
    {
      important: true,
      id: 1,
      labelName: "아이디",
      name: "idInput",
      type: "text",
      rules: idRules,
      checkMPass: "사용가능한 아이디입니다.",
      checkMtWrong: "이메일 형식으로 작성 바랍니다.",
    },
    {
      important: true,
      id: 2,
      labelName: "비밀번호",
      name: "pwInput",
      type: "password",
      rules: pwRules,
      checkMPass: "안전한 비밀번호입니다..",
      checkMtWrong: "(영문+숫자+특수문자) 8글자가 필요합니다.  ",
    },
    {
      important: true,
      id: 3,
      labelName: "비밀번호 확인",
      name: "pwInputCheck",
      type: "password",
      rules: pwCheckRules,
      checkMPass: "비밀번호가 일치합니다.",
      checkMtWrong: "비밀번호가 일치하지 않습니다.",
    },
    {
      important: false,
      id: 4,
      labelName: "이름",
      name: "nameInput",
      type: "text",
      rules: nameRules > 1,
      checkMPass: "사용가능한 이름입니다.",
      checkMtWrong: "",
    },
    {
      important: true,
      id: 6,
      labelName: "휴대폰번호",
      name: "phoneInput",
      type: "text",
      rules: phoneNumRules,
      checkMPass: "",
      checkMtWrong: "휴대폰번호를 다시 확인해주세요.",
    },
  ];

  const SELECT_ADDRESSnEMAil = [
    {
      id: 1,
      name: "주소",
      state: [
        {
          id: 1,
          name: "서울특별시",
        },
        {
          id: 2,
          name: "부산광역시",
        },
        {
          id: 3,
          name: "대구광역시",
        },
        {
          id: 4,
          name: "인천광역시",
        },
        {
          id: 5,
          name: "광주광역시",
        },
        {
          id: 6,
          name: "대전광역시",
        },
        {
          id: 7,
          name: "울산광역시",
        },
        {
          id: 8,
          name: "세종특별자치시",
        },
        {
          id: 9,
          name: "경기도",
        },
        {
          id: 10,
          name: "강원도",
        },
        {
          id: 11,
          name: "충청북도",
        },
        {
          id: 12,
          name: "충청남도",
        },
        {
          id: 13,
          name: "전라북도",
        },
        {
          id: 14,
          name: "전라남도",
        },
        {
          id: 15,
          name: "경상북도",
        },
        {
          id: 16,
          name: "경상남도",
        },
        {
          id: 17,
          name: "제주도",
        },
      ],
    },
    {
      id: 2,
      name: "메일",
      state: [
        { id: 1, name: "gmail.com" },
        { id: 2, name: "naver.com" },
        { id: 3, name: "hanmail.net" },
        { id: 4, name: "daum.net" },
        { id: 5, name: "hotmail.com" },
        { id: 6, name: "nate.com" },
        { id: 7, name: "iclould.com" },
      ],
    },
    // {
    //   state: [{ id: 1 }, { id: 2 }],
    // },
  ];

  return (
    <div className="signupAll">
      <div className="signupBox">
        <div className="signupText">JOIN US</div>
        <div className="location">
          <span className="info">정보입력</span>
          <span className="sideBar">|</span>
          <span className="done">가입완료</span>
        </div>
        <div className="signupInfoBox">
          <div className="infoTitle">
            <p className="basicInfo">기본정보</p>
            <div className="descBox">
              <span className="redPoint"></span>
              <p className="desc">
                필수 항목은 반드시 입력하셔야 하는 항목입니다
              </p>
            </div>
          </div>
          <div className="inputBox">
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
          <div className="selectInputBox">
            {SELECT_ADDRESSnEMAil.map(addressAndEmail => {
              return (
                <SelectInput
                  saveAddress={saveAddress}
                  key={addressAndEmail.id}
                  name={addressAndEmail.name}
                  state={addressAndEmail.state}
                  addressInput={addressInput}
                  emailInput={emailInput}
                />
              );
            })}
          </div>
        </div>
      </div>
      <button className="signupbutton" onClick={checkSignup}>
        회원가입
      </button>
    </div>
  );
}

export default SignUp;
