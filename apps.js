let todoListContiner = [];

const toDoValue = document.getElementById('todo');
const toDoList = document.getElementById('todo-list');

function addList(e, t) {
  e.preventDefault();
  console.log(toDoValue.value);
  const id = Date.now();
  todoListContiner.push({ id: id, value: toDoValue.value });
  toDoList.innerHTML = '';
  toDoValue.value = '';
  toDoValue.focus();
  randerTodoList();
}

function deleteList(id) {
  console.log(id);
  const list = todoListContiner.filter(function (todoList) {
    return todoList.id !== id;
  });
  todoListContiner = list;
  console.log(todoListContiner);
  toDoList.innerHTML = '';
  randerTodoList();
}

function randerTodoList() {
  todoListContiner.forEach(function (list) {
    const html = `<li style="color: #1b6392; font-size: 46px; margin-top: 20px; line-height: 39px; font-weight: 700 ; display: flex; flex-direction: column; background-color: #e0f2fe; border-radius: 16px; padding: 20px 0; border: 8px solid #7dd3fc; width: 500px; text-align: center;">${list.value} <button  style="font-size: 21px; padding: 0 20px; border: 3px solid #1e1e1e; margin: 10px auto 0; border-radius: 10px; color: black; background-color: white; line-height: 21px; margin-top: 72px;"
    onclick="deleteList(${list.id})">Delete</button> </li>`;
    toDoList.insertAdjacentHTML('beforeend', html);
  });
}
