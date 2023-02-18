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

