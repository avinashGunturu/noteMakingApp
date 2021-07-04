const addBtn = document.getElementById('add')
const notes = JSON.parse(localStorage.getItem('notes'))

addBtn.addEventListener('click', () => addNewNote())

if(notes){
    notes.forEach(note => addNewNote(note))
}


function addNewNote(text = '') {

    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `
    
    <div class="tools">
            <button class="edit" ><i class="far fa-edit"></i></button>
            <button class="delet" ><i class="fas fa-trash"></i></button>
    </div>
        
    <div class=" main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"> </textarea>
    `
const editbtn = note.querySelector('.edit')
const deletbtn = note.querySelector('.delet')
const main = note.querySelector('.main')
const textArea = note.querySelector('textarea')

textArea.value = text
main.innerHTML = marked(text)

deletbtn.addEventListener('click', () => {
    note.remove()

    updateLs()
})
editbtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
})

textArea.addEventListener('input', (e) => {
    const { value } = e.target

    main.innerHTML = marked(value)

    updateLs()
})


    document.body.appendChild(note)
}




function updateLs (){

    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))

}

















