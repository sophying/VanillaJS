"use strict";

const form_data = document.querySelector("#form__data");
// const inputUserId = document.querySelector("#user__id");
// const inputUserPw = document.querySelector("#user__pw");
const login = document.querySelector("#login");
const alertMsg = document.querySelector(".alert__txt");

const user = {
  name: "sophy",
  id: "sophyWorld",
  pw: "112834",
};

login.addEventListener("click", () => {
  userCheck();
});

window.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    userCheck();
  }
});

function userCheck() {
  const user_id = form_data.user__id;
  const user_pw = form_data.user__pw;
  if (user.id === user_id.value && user.pw === user_pw.value) {
    return (location.href = "http://127.0.0.1:5500/html/portfolio.html");
  } else {
    alertMsg.innerHTML = `ID 또는 PW 입력이 잘 못되었습니다.`;
    alertMsg.classList.add("visible");
    user_id.value = "";
    user_pw.value = "";
    user_id.focus();
  }
}
