$(function () {

    loadTodos();
  
    $('#new').click(function () {
      const text = prompt('New TO DO:');
      if (!text || text.trim() === '') return;
  
      addTodo(text);
      saveTodos();
    });
  
    function addTodo(text) {
      const todo = $('<div></div>').text(text);
  
      todo.click(function () {
        if (confirm('Do you want to remove this TO DO?')) {
          $(this).remove();
          saveTodos();
        }
      });
  
      $('#ft_list').prepend(todo);
    }
  
    function saveTodos() {
      const todos = [];
      $('#ft_list div').each(function () {
        todos.push($(this).text());
      });
  
      document.cookie =
        "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
    }
  
    function loadTodos() {
      const cookies = document.cookie.split('; ');
      for (let c of cookies) {
        if (c.startsWith('todos=')) {
          const todos = JSON.parse(decodeURIComponent(c.substring(6)));
          for (let i = todos.length - 1; i >= 0; i--) {
            addTodo(todos[i]);
          }
        }
      }
    }
  });
  