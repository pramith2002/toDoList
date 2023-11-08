const todoList = JSON.parse(localStorage.getItem('todoStores')) || [
    {
        name: '',
        date: ''
    }
];


renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, date } = todoObject;

        if (name !== '' && date !== '') {
            const html = `<div>${name}</div>
                            <div>${date}</div>
                            <button class="delete-btn" onclick="deleteTodo(${i})">Delete</button>`;
            todoListHtml += html;
        }
    }

    document.querySelector(".js-paragraph-container").innerHTML = todoListHtml;
}

function addToDo() {
    const name = document.querySelector(".js-name-input").value;
    const date = document.querySelector(".js-todo-date").value;

    todoList.push({
        name,   //name = name,
        date    //date = date
    });

    document.querySelector(".js-name-input").value = '';
    document.querySelector(".js-todo-date").value = '';

    localStorage.setItem('todoStores',JSON.stringify(todoList));

    renderTodoList();

}

function deleteTodo(i) {
    todoList.splice(i, 1);
    // Update local storage with the modified todoList
    localStorage.setItem('todoStores', JSON.stringify(todoList));
    renderTodoList();
}
