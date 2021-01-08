let columns = 0
let rows = 0
const mainTable = document.getElementById("main-table")
let masterColor = "white"
let color = false

const addColumn = () => {
    columns += 1

    const rows = document.getElementsByClassName("cell")

    for (let i = 0; i < rows.length; i++) {
        rows[i].appendChild(initializer())
    }
}

const addRow = () => {
    rows += 1

    const row = document.createElement("tr")

    row.classList.add("cell")

    mainTable.appendChild(row)

    for (let i = 0; i < columns; i++) {
        row.appendChild(initializer())
    }
}

let removeRow = () => {
    if (rows === 1){
        while (columns > -1){
            removeColumn()
        }
    }
    rows -= 1
    finalRow = mainTable.rows.length - 1
    mainTable.deleteRow(finalRow)
}

let removeColumn = () => {
    if (columns === 1){
        while (row > -1){
            removeRow()
        }
    }
    columns -= 1
    let everyCols = mainTable.rows[0].cells.length - 1
    for (let i = 0; i < mainTable.rows.length; i++){
        mainTable.rows[i].deleteCell(everyCols)
    }
}

const initializer = () => {
    const block = document.createElement("td");

    block.classList.add("block");

    block.classList.add("unfilled");

    block.addEventListener("mousedown", e => color = true);

    block.addEventListener("mousemove", e => {

        if (color) {

            block.style.backgroundColor = masterColor;
            block.classList.remove("unfilled");

        }
    });

    block.addEventListener("mouseup", function(event) {

        if (color) {
            color = false;
        }

    })
    
    return block;
}

function changeBlue () {
    masterColor = "blue"
}

function changeGreen () {
    masterColor = "green"
}

function changePurple () {
    masterColor = "purple"
}
function emptyColor(){
    let list = document.getElementsByClassName("block");
    for(let i = 0; i < list.length; i++) {
        list[i].style.backgroundColor = "white";
        console.log(list[i].style.backgroundColor)
    }
}