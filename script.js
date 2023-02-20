const input = document.querySelector('.text-input')
const btn = document.querySelector('.add-btn')
const list = document.querySelector('.list')

input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        addNew()
    }
})

btn.addEventListener('click', () => {
    addNew()
})

function addNew() {
    if (input.value !== "") {
        const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        const newList = `<li class="list-group-item d-flex justify-content-between align-items-center">
<span class="off d-flex justify-content-between align-items-center">
<input type="checkbox" class="checkbox mx-2">
${input.value}
</span>
<p class="p m-1">
${time}
</p>
<button class="del-btn btn btn-danger">delete</button>
</li>`
        list.innerHTML += newList
    }
}

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('del-btn')) {
        e.target.parentNode.remove()
    }
    if (e.target.classList.contains('checkbox')) {
        if (!e.target.parentNode.classList.contains('line')) {
            e.target.parentNode.classList.add("line")
        } else {
            e.target.parentNode.classList.remove('line')
        }
    }
})

















// let todoItems = []
// const todoInput = document.querySelector(".todo-input")
// const completedTodosDiv = document.querySelector(".completed-todos")
// const uncompletedTodosDiv = document.querySelector(".uncompleted-todos")
// const audio = new Audio('sound.mp3')
//
//
// window.onload = () =>{
//     let storageTodoItems =localStorage.getItem('todoItems')
//     if (storageTodoItems !== null){
//         todoItems = JSON.parse(storageTodoItems)
//     }
//     render()
// }
//
// todoInput.onkeyup = ((e) =>{
//     let value = e.target.value.replace(/^\s+/,"")
//     if (value &&e.keyCode ===13){
//         addTodo(value)
//
//         todoInput.value =''
//         todoInput.focus()
//     }
// })
//
// function addTodo(text){
//     todoItems.push({
//         id:Date.now(),
//         text,
//         completed:false
//     })
//     saveAndRender()
// }
//
// function save(){
//     localStorage.setItem('todoItems',JSON.stringify(todoItems))
// }
//
// function saveAndRender(){
//     save()
//     render()
// }
//
// function render(){
//     let unCompletedTodos = todoItems.filter(item => !item.completed)
//     let completedTodos = todoItems.filter(item => item.completed)
//
//     completedTodosDiv.innerHTML = ""
//     uncompletedTodosDiv.innerHTML = ""
//
//     if (unCompletedTodos.length > 0){
//         unCompletedTodos.forEach(todo =>{
//             uncompletedTodosDiv.append(createTodoElement(todo))
//         })
//     }else {
//         uncompletedTodosDiv.innerHTML = `<div class = 'empty'>No uncompleted mission</div>`
//     }
//     if (completedTodos.length > 0){
//         completedTodosDiv.innerHTML = `<div class="completed-title">Completed (${completedTodos.length} / ${todoItems.length})</div>`
//         completedTodos.forEach(todo =>{
//             completedTodosDiv.append(createTodoElement(todo))
//         })
//     }
// }
//
// function removeTodo(id){
//     todoItems = todoItems.filter(todo => todo.id !== Number(id))
//     saveAndRender()
// }
//
// function createTodoElement(todo){
//     const todoDiv = document.createElement('div')
//     todoDiv.setAttribute ='data-id, todo.id'
//     todoDiv.className = 'todo-item'
//
//     const todoTextSpan = document.createElement('span')
//     todoTextSpan.innerHTML =todo.text
//
//     const todoInputCheckbox = document.createElement('input')
//     todoInputCheckbox.type ='checkbox'
//     todoInputCheckbox.checked = todo.completed
//     todoInputCheckbox.onclick = (e) =>{
//         let id = e.target.closest('.todo-item').dataset.id
//         e.target.checked ? makAsCompleted(id) : makAsUncompleted(id)
//     }
//     const todoRemoveBtn = document.createElement('a')
//     todoRemoveBtn.href = '#'
//     todoRemoveBtn.innerHTML = "<a href=\"#\"><ion-icon name=\"close-outline\"></ion-icon></a>\n"
//
//     todoRemoveBtn.onclick = (e) => {
//         let id = e.target.closest('.todo-item').dataset.id
//         removeTodo(id)
//     }
//     todoRemoveBtn.prepend(todoInputCheckbox)
//     todoDiv.appendChild(todoTextSpan)
//     todoDiv.appendChild(todoRemoveBtn)
//
//     return todoDiv
// }
//
// function makAsCompleted(id){
//     todoItems =todoItems.filter(todo =>{
//         if (todo.id === Number(id)){
//             todo.completed = true
//         }
//         return todo
//     })
//     audio.play()
//     saveAndRender()
// }
// function makAsUncompleted(id){
//     todoItems =todoItems.filter(todo =>{
//         if (todo.id === Number(id)){
//             todo.completed = false
//
//         }
//         return todo
//     })
//     saveAndRender()
// }
// function saveAndRender(){
//     save()
//     render()
// }
//
//

