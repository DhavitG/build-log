// let todos = [];

// function addToDo() {
//   const inputElement = document.querySelector("input");
//   const title = inputElement.value;

//   todos.push({
//     title,
//   });
//   const pos = todos.length;
//   render(pos, todos[pos - 1].title);

//   inputElement.value = "";
// }

// function deleteToDo() {}

// function render(pos, title) {
//   const newEl = document.createElement("div");
//   newEl.innerHTML = `<div>${pos}. ${title} <button onclick="deleteToDo()">Delete</button></div>`;

//   document.body.appendChild(newEl);
//   // newEl.parentElement.appendChild(newEl); newEl not yet attached to dom so this wont work
// }

let todos = [];

function addToDo() {
  const inputElement = document.querySelector("input");
  const title = inputElement.value;

  todos.push({
    title,
  });
  render();

  inputElement.value = "";
}

function deleteToDo(i) {
  todos.splice(i, 1);
  render();
}

function createToDoComponent(i, todo) {
  const newEl = document.createElement("div");
  const h1 = document.createElement("h1");
  const button = document.createElement("button");
  button.innerHTML = "Delete";

  button.onclick = () => deleteToDo(i);
  h1.innerHTML = `${i + 1}. ${todo.title}`;

  newEl.append(h1);
  newEl.append(button);
  return newEl;
}

function render() {
  document.querySelector("#todos").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const element = createToDoComponent(i, todos[i]);
    document.querySelector("#todos").appendChild(element);
  }
}
