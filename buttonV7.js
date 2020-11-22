var todoList = {
  todos: [],
  //todos es nuestro array

  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("()", this.todos[i].todoText);
        }
      }
    }
  },
  //displayTodos es una función que nos muestra el array
  //console.log nos muestra en la pantalla el array todos

  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false, //boulean text true or false
    });
    this.displayTodos();
  },
  //addTodo agrega un elemento al array
  //push agrega un valor al final del array

  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  //changeTodo cambia el valor de un elemento del array

  deleteTodo: function (position, quantity) {
    this.todos.splice(position, quantity);
    this.displayTodos();
  },
  //deleteTodo borra un elemento del array
  //splice nos permite quitar un elemento en una ubucación determinada

  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
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

    this.displayTodos();
  },
};

//1. Tener acceso al boton de display todos
var displayTodosButton = document.getElementById("displayTodosButton");
var toggleAllButton = document.getElementById("toggleAllButton");

//2. Correr metodo displayTodos, cuando alguien
//presione el boton
displayTodosButton.addEventListener("click", function () {
  todoList.displayTodos();
});

toggleAllButton.addEventListener("click", function () {
  todoList.toggleAll();
});
