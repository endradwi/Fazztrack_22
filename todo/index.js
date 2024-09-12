
const btnBGM = document.querySelector(".BGM")
btnBGM.addEventListener("click", () => {
    document.querySelector("body").style.background = 'red'
}, false)

const btnBGB = document.querySelector (".BGB")
btnBGB.addEventListener("click", () => {
    document.querySelector("body").style.background = 'blue'
}, false)

const btnBGP = document.querySelector (".BGP")
btnBGP.addEventListener("click", () => {
    document.querySelector("body").style.background = 'white'
}, false)

const btnGoggle = document.querySelector(".Goggle")
btnGoggle.addEventListener("click", () => {
    window.location.href = "https://www.google.com"
}, false)

const btnYt = document.querySelector(".Youtube")
btnYt.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/"
}, false)

let text = document.querySelector("#text")
let date = document.querySelector("#date")
const btnSubmit = document.querySelector("#submit")
let counter = 1
let editMode = false
let currentRow = null

btnSubmit.addEventListener("click", () => {
    if (!text.value || !date.value){
        alert("Semua input wajib diisi")
    }
    else{
        const formName = document.forms['data']['text'].value
        const formDate = document.forms['data']['date'].value
    
    if (editMode) {
            
            currentRow.cells[1].innerHTML = formName
            currentRow.cells[2].innerHTML = formDate
            currentRow = null 
            editMode = false 
            text.value = ''
            date.value = ''
        }
    else {
        const table = document.querySelector(".table")
        const baris = table.insertRow(-1)
        const kol1 = baris.insertCell(0)
        const kol2 = baris.insertCell(1)
        const kol3 = baris.insertCell(2)
        const kol4 = baris.insertCell(3)
        kol1.innerHTML = table.rows.length - 1
        kol2.innerHTML = formName
        kol3.innerHTML = formDate
        kol4.innerHTML = 
        `
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
        `
        kol1.style.border = "1px solid black"
        kol2.style.border = "1px solid black"
        kol3.style.border = "1px solid black"
        kol4.style.border = "1px solid black"

        text.value = ''
        date.value = ''

        const editBtn = kol4.querySelector(".editBtn")
        editBtn.addEventListener("click", () => {
            text.value = kol2.innerHTML
            date.value = kol3.innerHTML
            editMode = true
            currentRow = baris 
        })

        const deleteBtn = kol4.querySelector(".deleteBtn")
        deleteBtn.addEventListener("click", () => {
            table.deleteRow(baris.rowIndex)
            updateCounter()
        })
        function updateCounter() {
            document.querySelectorAll(".table tr").forEach((row, index) => {
                if (index > 0) { 
                    row.cells[0].innerHTML = index
                }
            })
        }
    }
        
    }
}, false)

