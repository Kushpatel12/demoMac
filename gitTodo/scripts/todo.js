let todoItems = [
  {
    items : 'Task is completed',
    dueDate : '2024-05-08'
  },
  {
    items : 'Its time to break',
    dueDate : '2024-03-03'
  }
];

const addTodos = () => {
  let todoInput = document.querySelector("#todoText");
  let todoDates = document.querySelector("#todoDate");
  
  let todoDate = todoDates.value;
  let todoTxt = todoInput.value;
  
  todoItems.push({items : todoTxt, dueDate : todoDate});
  todoInput.value = '';
  todoDates.value = '';
  todoDisplay();
}

const todoDisplay = () => {
  let display = document.querySelector("#todo_container");
  let newHtml = '';
  
  for(let i = 0; i < todoItems.length; i++){
    let {items,dueDate} = todoItems[i];
    newHtml += `
      <span>${items}</span>
      <span>${dueDate}</span>
      <button class="deleteBtn" onclick="todoItems.splice(${i},1); todoDisplay();">Delete</button>
    `;
  }

  display.innerHTML = newHtml;

  localStorage.setItem("Todoitems", JSON.stringify(todoItems));
}

todoDisplay();