const idRules = idInput.match(
  /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
);
const pwRules = pwInput.match(
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[?!@#$%*&])[A-Za-z\d?!@#$%*&]{8,}$/
);
const pwCheckRules = pwInput === pwInputCheck;
const nameRules = nameInput.length > 1;
const phoneNumRules = phoneInput.length === 11;

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

export default INPUT_LIST;
