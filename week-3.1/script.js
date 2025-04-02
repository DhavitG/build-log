let ctr = 3;

const inputElement = document.querySelector("input");
const add = document.querySelector(".add");

function deleteTodo(index) {
  const el = document.querySelector("#todo-" + index);
  el.parentElement.removeChild(el);
}

function addToDo() {
  const parentEl = document.querySelector("body");
  const divEl = document.createElement("div");
  divEl.setAttribute("id", `todo-${ctr}`);
  divEl.innerHTML = `<div> <h4>${ctr}. ${inputElement.value} </h4> <button onclick="deleteTodo(${ctr})">Delete</button></div>`;
  ctr += 1;
  parentEl.appendChild(divEl);

  inputElement.value = " ";
}
