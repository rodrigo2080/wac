var todoList = {
  todos: [],
  //todos es nuestro array
  displayTodos: function () {
    console.log("My Todos", this.todos);
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
};
