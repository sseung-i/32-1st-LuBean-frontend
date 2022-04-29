//상수데이터
const INPUT_LIST = [
  {
    important: true,
    id: 1,
    labelName: "아이디",
    name: "idInput",
    type: "text",
    checkResult-pass: "사용가능한 아이디 입니다.",
  },
  {
    important: true,
    id: 2,
    labelName: "비밀번호",
    name: "pwInput",
    type: "password",
    checkResult: "비밀번호 형식에 맞지않습니다.-wrong",
  },
  {
    important: true,
    id: 3,
    labelName: "비밀번호 확인",
    name: "pwInputCheck",
    type: "password",
    checkResult: "비밀번호가 일치하지않습니다.-wrong",
  },
  {
    important: true,
    id: 4,
    labelName: "이름",
    name: "nameInput",
    type: "text",
    checkResult: "",
  },
  {
    important: true,
    id: 5,
    labelName: "이메일",
    name: "emailInput",
    type: "text",
    checkResult: "이메일 형식이 아닙니다.-wrong",
  },
  {
    important: true,
    id: 6,
    labelName: "휴대폰번호",
    name: "phoneInput",
    type: "text",
    checkResult: "번호가 너무 길거나 짧습니다.-wrong",
  },
];

export default INPUT_LIST;
