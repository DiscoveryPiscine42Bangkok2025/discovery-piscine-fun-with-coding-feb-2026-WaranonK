const ftList = document.getElementById("ft_list");
const newBtn = document.getElementById("new");

//LOAD TODOS FROM COOKIE 
loadTodos();

//NEW TODO 
newBtn.addEventListener("click", function () {
  const text = prompt("New TO DO:");

  if (text === null || text.trim() === "")
    return;

  addTodo(text);
  saveTodos();
});

//ADD TODO
function addTodo(text) {
  const todo = document.createElement("div");
  todo.textContent = text;

  todo.addEventListener("click", function () {
    if (confirm("Do you want to remove this TO DO?")) {
      ftList.removeChild(todo);
      saveTodos();
    }
  });

  // add to TOP of list
  ftList.prepend(todo);
}

//SAVE TODOS TO COOKIE 
function saveTodos() {
  const todos = [];
  const items = ftList.children;

  for (let i = 0; i < items.length; i++) {
    todos.push(items[i].textContent);
  }

  document.cookie =
    "todos=" + encodeURIComponent(JSON.stringify(todos)) +
    "; path=/";
}

//LOAD TODOS  
function loadTodos() {
  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    if (cookie.startsWith("todos=")) {
      const value = cookie.substring(6);
      const todos = JSON.parse(decodeURIComponent(value));

      for (let i = todos.length - 1; i >= 0; i--) {
        addTodo(todos[i]);
      }
    }
  }
}
