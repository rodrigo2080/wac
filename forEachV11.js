var todoVFList = {
  todosVF: [],
  //todos es nuestro array

  addTodoVF: function (todoVFText) {
    this.todos.push({
      todoVFText: todoVFText,
      completed: false, //boulean text true or false
    });
  },
  //addTodo agrega un elemento al array
  //push agrega un valor al final del array

  changeTodoVF: function (position, todoVFText) {
    this.todos[position].todoVFText = todoVFText;
  },
  //changeTodo cambia el valor de un elemento del array

  deleteTodoVF: function (position) {
    this.todosVF.splice(position, 1);
  },
  //deleteTodo borra un elemento del array
  //splice nos permite quitar un elemento en una ubucación determinada

  toggleCompleted: function (position) {
    var todoVF = this.todosVF[position];
    todoVF.completed = !todoVF.completed;
  },
  //Modifica el valor de la condición completed

  toggleAll: function () {
    var totalTodosVF = this.todosVF.length;
    var completedTodosVF = 0;

    //nos entrega el total de todos completados
    this.todos.forEach(function (todoVF) {
      if (todoVF.completed === true) {
        completedTodosVF++;
      }
    });
    this.todosVF.forEach(function (todoVF) {
      //todo se vuelve falso
      if (completedTodosVF === totalTodosVF) {
        todoVF.completed = false;
      } else {
        //todo se vuelve verdadero
        todoVF.completed = true;
      }
    });
  },
};

var handlers = {
  addTodoVF: function () {
    var addTodoVFTextInput = document.getElementById("addTodoVFTextInput");
    todoVFList.addTodoVF(addTodoVFTextInput.value);
    addTodoVFTextInput.value = "";
    view.displayTodosVF();
  },
  changeTodoVF: function () {
    var changeTodoVFPositionInput = document.getElementById(
      "changeTodoVFPositionInput"
    );
    var changeTodoVFTextInput = document.getElementById(
      "changeTodoVFTextInput"
    );
    todoVFList.changeTodoVF(
      changeTodoVFPositionInput.valueAsNumber,
      changeTodoVFTextInput.value
    );
    changeTodoVFPositionInput.valueAsNumber = "";
    changeTodoVFTextInput.value = "";

    view.displayTodosVF();
  },
  deleteTodoVF: function (position) {
    todoVFList.deleteTodoVF(position);
    view.displayTodosVF();
  },
  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    todoVFList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.valueAsNumber = "";

    view.displayTodosVF();
  },
  toggleAll: function () {
    todoVFList.toggleAll();
    view.displayTodosVF();
  },
};

var view = {
  displayTodosVF: function () {
    var todosVFUl = document.querySelector("ul");
    todosVFUl.innerHTML = "";

    todoVFList.todosVF.forEach(function (todoVF, position) {
      var todoVFLi = document.createElement("li");
      var todoVFTextWithCompletion = "";

      if (todoVF.completed === true) {
        todoVFTextWithCompletion = `(X) ${todoVF.todoVFText}`;
      } else {
        todoVFTextWithCompletion = `( ) ${todoVF.todoVFText}`;
      }

      todoVFLi.id = position;
      todoVFLi.textContent = todoVFTextWithCompletion;
      todoVFLi.appendChild(this.createDeleteButton());
      todosVFUl.appendChild(todoVFLi);
    }, this);
  },
  createDeleteButton: function () {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function () {
    var todosVFUl = document.querySelector("ul");

    todosVFUl.addEventListener("click", function (event) {
      //obtener el elemento al hacer click en el
      var elementClicked = event.target;

      //comprueba si elementClicked es un boton de borrado
      if (elementClicked.className === "deleteButton") {
        //corre handlers.deleteTodo(position)
        debugger;
        handlers.deleteTodoVF(parseInt(elementClicked.parentNode.id));

        console.log(elementClicked.parentNode.id);
      }
    });
  },
};

view.setUpEventListeners();
