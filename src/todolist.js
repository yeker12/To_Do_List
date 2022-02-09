const todayDate = document.querySelector("#today");
const toDoList = document.querySelector("#todolist");
const toDoListInput = toDoList.querySelector("input");
const toDos = document.querySelector("#list");
const doneList = document.getElementById("doneList");
const LIST_KEY = "list";
const DONE_KEY = "done";
let toDoArray = [];
let doneArray = [];
// -> *** Why?_const로 선언할 경우, 새로고침을 해도 새로고침 전의 toDoArray가 그대로 남아있음.


// 오늘의 날짜 보여주는 함수 
function onTodayShow(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    const week = ["일","월","화","수","목","금","토"];
    todayDate.innerText = `${year}년 ${month}월 ${date}일 ${week[day]}요일`;
}

// 할 일 추가 함수
function handleToDoSubmit(event){
    event.preventDefault();
    const toDoContents = toDoListInput.value;
    const toDoObj = {
        text: toDoContents,
        id: Date.now(),
    }
    paintToDoList(toDoObj); 
    toDoListInput.value = "";
    toDoArray.push(toDoObj);
    saveList();
};

// 추가된 할 일 보여주는 함수
function paintToDoList(toDoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn_delete = document.createElement("button");
    const btn_done = document.createElement("button");
    span.innerText = toDoObj.text;
    li.id = toDoObj.id;
    btn_delete.innerText = "✖"
    btn_delete.addEventListener("click",deleteList);
    btn_done.innerText = "✔"
    btn_done.addEventListener("click", onDoneList);
    li.appendChild(span);
    li.appendChild(btn_delete);
    li.appendChild(btn_done);
    toDos.appendChild(li);
};

function paintDoneList(doneObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn_return = document.createElement("button");
    btn_return.innerText = "Back"
    btn_return.addEventListener("click", onReturn);
    span.innerText = doneObj.text;
    li.id = doneObj.id;
    li.appendChild(span);
    li.appendChild(btn_return);
    doneList.appendChild(li);
}

// 추가된 list를 localStorage에 저장
function saveList(){
  localStorage.setItem(LIST_KEY, JSON.stringify(toDoArray));
  // -> localStorage에 object를 저장할 수 없음
  // -> object -> String으로 바꿔준 후, localStorage에 저장해야 함
};

function saveDoneList(){
    localStorage.setItem(DONE_KEY, JSON.stringify(doneArray));
}

function deleteList(event){
    const li = event.target.parentElement;
    // -> event.target은 event가 발생한 요소를 반환해준다.
    li.remove();
    toDoArray = toDoArray.filter(toDoElement => toDoElement.id !== parseInt(li.id));
    // -> Arr.filter(arg => 조건)을 사용하여 조건에 true 해당하는 값만 새로운 array에 저장
    // -> li.id는 문자열이므로 비교를 위해 parseInt()를 사용하여 숫자로 변환
    saveList();
};

function onDoneList(event){
    const li = event.target.parentElement;
    const textLi = document.getElementById(`${li.id}`);
    const textSpan = textLi.querySelector("span");
    const doneObj = {
        text: textSpan.innerText,
        id: parseInt(li.id),
    };
    doneArray.push(doneObj);
    li.remove();
    toDoArray = toDoArray.filter(toDoElement => toDoElement.id !== parseInt(li.id));
    saveList();
    saveDoneList();
    paintDoneList(doneObj);
}

function onReturn(event){
    const li = event.target.parentElement;
    const textLi = document.getElementById(`${li.id}`);
    const textSpan = textLi.querySelector("span");
    const todoObj = {
        text: textSpan.innerText,
        id: parseInt(li.id),
    };
    toDoArray.push(todoObj);
    li.remove();
    doneArray = doneArray.filter(toDoElement => toDoElement.id !== parseInt(li.id));
    saveList();
    saveDoneList();
    paintToDoList(todoObj);
}

// *** <main> *** // 
onTodayShow(); //-> 현재 날짜 출력
toDoList.addEventListener("submit",handleToDoSubmit); 
// -> list 추가 버튼 클릭 시 실행

const savedToDoList = localStorage.getItem(LIST_KEY);
const savedDoneList = localStorage.getItem(DONE_KEY);


if(savedToDoList !== null){
    const parseToDo = JSON.parse(savedToDoList);
    // -> savedToDoList 문자열을 object로 변환
    toDoArray = parseToDo;
    parseToDo.forEach(paintToDoList);
    // -> 각 요소마다 한 번씩 함수 실행
}

if(savedDoneList !== null){
    const parseDone = JSON.parse(savedDoneList);
    doneArray = parseDone;
    parseDone.forEach(paintDoneList);
}

