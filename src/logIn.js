const logInForm = document.querySelector("#logInForm");
const logInInput = logInForm.querySelector("input");
const userName = document.getElementById("userName");
const HIDDEN_CLASSNAME = "hidden";
const USERID_KEY = "userID";


function onUserIdSubmit(event){
    // event 실행 시 기본으로 가지는 값 제거 (submit 시 새로고침 되는 현상 제거)
    event.preventDefault();
    // submit 후 로그인 창은 보이지 않게 설정
    logInForm.classList.add(HIDDEN_CLASSNAME);
    // 입력한 값을 localStorage에 저장
    const userId = logInInput.value;
    localStorage.setItem(USERID_KEY, userId);
    userName.innerHTML = `${userId}'s To Do List`;
};

// localStorage에 저장된 user ID 값 savedUserID에 저장
const savedUserID = localStorage.getItem(USERID_KEY);

if(savedUserID !== null){
    userName.innerHTML = `${savedUserID}'s To Do List`;
}else{
    logInForm.classList.remove(HIDDEN_CLASSNAME);
    logInForm.addEventListener("submit",onUserIdSubmit);
}





