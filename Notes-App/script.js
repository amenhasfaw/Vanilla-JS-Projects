const addbtn = document.getElementById('AddNote');
const allNotes = document.getElementById('allnotes')

addbtn.addEventListener("click", () =>{
  
  const newEL = document.createElement('div')
  let text = ""

  newEL.innerHTML = `
         <div id="note">
            <div id="note-edit">
              <button id="edit">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828802.png"
                  alt="Edit Button"
                />
              </button>
              <button id="delete">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/484/484560.png"
                  alt="Delete Button"
                />
              </button>
              </div>
              <div id="main"></div>
              <textarea id="input"></textarea>
          </div>
  `
  const deletebtn = newEL.querySelector('#delete')
  const editbtn = newEL.querySelector('#edit')
  const main = newEL.querySelector('#main')
  const input = newEL.querySelector('#input')

  input.addEventListener('input', () => {
    text = input.value
    main.innerHTML = text
  })

  deletebtn.addEventListener('click', () => {
    newEL.remove()
  })

  editbtn.addEventListener('click', () => {
    input.classList.toggle('view')
    main.classList.toggle('hidden')
    
  })

  allNotes.appendChild(newEL)
})