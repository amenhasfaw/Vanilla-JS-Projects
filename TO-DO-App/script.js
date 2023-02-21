const input = document.getElementById('input')
const listEL = document.getElementById('list')
const form = document.getElementById('form')

const savedList = JSON.parse(localStorage.getItem('todos'))

if(savedList){
    savedList.forEach(todo => {
        const task = document.createElement('li')
        task.innerHTML = todo.text
        listEL.appendChild(task)

        if(todo.complete){
            task.classList.add('complete')
        }
        task.addEventListener('click',(e) => {
            e.preventDefault()

            task.classList.toggle('complete')
            updateTD()
        })

        task.addEventListener('contextmenu',(e) => {
            e.preventDefault()

            listEL.removeChild(task)
            updateTD()
        })
    })
}

form.addEventListener('submit',(e) => {
    e.preventDefault()

    let todo = input.value

    if(todo){
        const task = document.createElement('li')
        task.innerHTML = todo
        listEL.appendChild(task)
        updateTD()
        input.value = ""

        task.addEventListener('click',(e) => {
            e.preventDefault()

            task.classList.toggle('complete')
            updateTD()
        })

        task.addEventListener('contextmenu',(e) => {
            e.preventDefault()

            listEL.removeChild(task)
            updateTD()
        })
    }
})

function updateTD(){
    let list = document.querySelectorAll('li')
    listitems = []

    list.forEach((li) => {
       listitems.push({
        text:li.innerText,
        completed:li.classList.contains('complete')
       })

    });

    localStorage.setItem('todos', JSON.stringify(listitems));
    console.log(JSON.stringify(listitems))

}