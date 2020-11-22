var todoList = {
  todos: ["item 1", "item 2", "item 3"],
  //todos es nuestro array
  displayTodos: function () {
    console.log("My Todos", this.todos);
  },
  //displayTodos es una función que nos muestra el array
  //console.log nos muestra en la pantalla el array todos
  addTodo: function (todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  //addTodo agrega un elemento al array
  //push agrega un valor al final del array
  changeTodo: function (position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  //changeTodo cambia el valor de un elemento del array
  deleteTodo: function (position, quantity) {
    this.todos.splice(position, quantity);
    this.displayTodos();
  },
  //deleteTodo borra un elemento del array
  //splice nos permite quitar un elemento en una ubucación determinada
};
