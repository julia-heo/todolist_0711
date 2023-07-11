const form = document.querySelector(".todo-form");

const btn = document.querySelector("#popup-btn");

const init = () => {
  //form.addEventListener("submit", addTodoItem);
  btn.addEventListener("click", displayForm);
};

//입력창 팝업 함수
const displayForm = () => {
  if (form.style.display === "none") {
    form.style.display = "block";
    document.getElementById("popup-btn").innerText = "입력창 다시닫기";
  } else {
    form.style.display = "none";
    document.getElementById("popup-btn").innerText = "입력창 불러오기";
  }
};

// //submit 시 새로고침 방지, 입력한 텍스트를 todoContent 변수로 받아옴
// const addTodoItem = () => {
//   event.preventDefault();
//   const todoContent = document.querySelector(".todo-input").value;
//   if (todoContent) printTodoItem(todoContent);
// };

//  // list에 todo 항목 추가하는 함수
// const printTodoItem = (text) => {
//   const todoItem = document.createElement("li");
//   const todoBtn = document.createElement("button");
//   const todoText = document.createElement("span");
//   const todoDel = document.createElement("button");

//   //img 태그 추가 >> src 설정 >> Btn에 자식 노드로 추가
//   const todoBtn_img = document.createElement("img");
//   const todoDel_img = document.createElement("img");
//   todoBtn_img.setAttribute("src", imageUrl_emptycheck);
//   todoDel_img.setAttribute("src", imageUrl_close);
//   todoBtn.appendChild(todoBtn_img);
//   todoDel.appendChild(todoDel_img);

//   //todo 목록 내용 추가
//   todoText.innerText = text;
//   todoText.setAttribute("id", "todo-text");

//   //버튼에 id 추가
//   todoBtn.setAttribute("id", "todo-click");
//   todoDel.setAttribute("id", "del");

//   //todo 목록의 내용을 done으로 이동시키기
//   todoBtn.addEventListener("click", toggleTodoToDone);

//   //todo 목록 삭제 버튼
//   todoDel.addEventListener("click", deleteTodoItem);

//   //li에 item(button, span, button) 추가한 후 ul에 li appendChild하기
//   todoItem.className = "todo-list-item";
//   todoItem.appendChild(todoBtn);
//   todoItem.appendChild(todoText);
//   todoItem.appendChild(todoDel);
//   document.querySelector(".todo-list").appendChild(todoItem);

//   //todo 목록 추가 후 input창 초기화
//   document.querySelector(".todo-input").value = "";
// };

// //todo 목록 삭제하기 >> todoDel의 부모인 todoItem 삭제
// const deleteTodoItem = (e) => {
//   const target = e.target.parentNode.parentNode;
//   document.querySelector(".todo-list").removeChild(target);
// };

// //todo 목록의 할 일을 완수했다면 >> todo 목록에서 삭제한 후 text를 done 목록에 집어넣기
// const toggleTodoToDone = (e) => {
//   const target = document.getElementById("todo-text").innerHTML;
//   deleteTodoItem(e);
//   printDoneItem(target);
// };

// //Done 목록에 todo 항목 추가하는 함수
// const printDoneItem = (text) => {
//   const doneItem = document.createElement("li");
//   const doneBtn = document.createElement("button");
//   const doneText = document.createElement("span");
//   const doneUp = document.createElement("button");
//   const doneDel = document.createElement("button");

//   //img 태그 추가 >> src 설정 >> Btn에 자식 노드로 추가
//   const doneBtn_img = document.createElement("img");
//   const doneUp_img = document.createElement("img");
//   const doneDel_img = document.createElement("img");
//   doneBtn_img.setAttribute("src", imageUrl_fullcheck);
//   doneUp_img.setAttribute("src", imageUrl_up);
//   doneDel_img.setAttribute("src", imageUrl_close);
//   doneBtn.appendChild(doneBtn_img);
//   doneUp.appendChild(doneUp_img);
//   doneDel.appendChild(doneDel_img);

//   //done 목록 내용
//   doneText.innerText = text;
//   doneText.setAttribute("id", "done-text");

//   //done 목록의 내용을 todo로 이동시키기
//   doneUp.setAttribute("id", "up");
//   doneUp.addEventListener("click", toggleDoneTodo);

//   //done 목록 삭제 버튼
//   doneDel.setAttribute("id", "del");
//   doneDel.addEventListener("click", deleteDoneItem);

//   //li에 item(button, span, button) 추가한 후 ul에 li appendChild하기
//   doneItem.className = "done-list-item";
//   doneItem.appendChild(doneBtn);
//   doneItem.appendChild(doneText);
//   doneItem.appendChild(doneUp);
//   doneItem.appendChild(doneDel);
//   document.querySelector(".done-list").appendChild(doneItem);
// };

// //done 목록 삭제하기 >> doneDel의 부모인 doneItem 삭제
// const deleteDoneItem = (e) => {
//   const target = e.target.parentNode.parentNode;
//   document.querySelector(".done-list").removeChild(target);
// };

// //버튼 누르면 done 목록에서 삭제한 후 todo 목록에 집어넣기
// const toggleDoneTodo = (e) => {
//   const target = document.getElementById("done-text").innerText;
//   deleteDoneItem(e);
//   printTodoItem(target);
// };

init();
