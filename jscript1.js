/*makeSandwichWith_____
    Get one slice of bread.
    Add _____.
    Put a slice of bread on top.*/
/*
function makeSandwichWith(filling) {
    Get one slice of bread;
    Add filling;
    Put a slice of bread on top;
}

makeSandwichWith(ham);
*/

var todos = ["item 1", "item 2", "item 3"];

//It should have a function to display todos
function displayTodos() {
  console.log("My todos: ", todos);
}

//It should have  a function to add new todos
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

//It should have a function to change a todo
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

//It should have a function to delete a todo
function deleteTodo(position, quantity) {
  todos.splice(position, quantity);
  displayTodos();
}
