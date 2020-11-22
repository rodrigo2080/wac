var todoList = {
  todos: [],
  //todos es nuestro array

  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false, //boulean text true or false
    });
  },
  //addTodo agrega un elemento al array
  //push agrega un valor al final del array

  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
  },
  //changeTodo cambia el valor de un elemento del array

  deleteTodo: function (position, quantity) {
    this.todos.splice(position, quantity);
  },
  //deleteTodo borra un elemento del array
  //splice nos permite quitar un elemento en una ubucación determinada

  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  //Modifica el valor de la condición completed

  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    //nos entrega el total de todos completados

    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    }
    //todo se vuelve falso
    else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  },
};

var handlers = {
  addTodo: function () {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById(
      "changeTodoPositionInput"
    );
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.valueAsNumber = "";
    changeTodoTextInput.value = "";

    view.displayTodos();
  },
  deleteTodo: function () {
    var deleteTodoPositionInput = document.getElementById(
      "deleteTodoPositionInput"
    );
    var deleteTodoQuantityInput = document.getElementById(
      "deleteTodoQuantityInput"
    );
    todoList.deleteTodo(
      deleteTodoPositionInput.valueAsNumber,
      deleteTodoQuantityInput.valueAsNumber
    );
    deleteTodoPositionInput.valueAsNumber = "";
    deleteTodoQuantityInput.valueAsNumber = "";

    view.displayTodos();
  },
  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.valueAsNumber = "";

    view.displayTodos();
  },
  toggleAll: function () {
    todoList.toggleAll();
    view.displayTodos();
  },
};

var view = {
  displayTodos: function () {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement("li");
      var todo = todoList.todos[i];
      var todoTextWithCompletion = "";

      if (todo.completed === true) {
        todoTextWithCompletion = "(X) " + todo.todoText;
      } else {
        todoTextWithCompletion = "( ) " + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  },
};
