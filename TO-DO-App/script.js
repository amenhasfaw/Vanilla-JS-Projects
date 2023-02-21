const input = document.getElementById('input')
const listEL = document.getElementById('list')
const form = document.getElementById('form')

form.addEventListener('submit',(e) => {
    e.preventDefault()

    todo = input.value

    console.log(todo)
})