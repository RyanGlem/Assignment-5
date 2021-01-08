let columns = 0
let rows = 0
const mainTable = document.getElementById("main-table")
let masterColor = "purple"
let color = false

const addColumn = () => {
    columns += 1

    const rows = document.getElementsByClassName("row")

    for (let i = 0; i < rows.length; i++) {
        rows[i].appendChild(initializer());
    }
}

const addRow = () => {
    rows += 1

    const row = document.createElement("tr")

    row.classList.add("row")

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
    const gridCell = document.createElement("td");
    gridCell.classList.add("gridCell");
    gridCell.classList.add("unfilled");
    gridCell.addEventListener("mousedown", e => color = true);
    gridCell.addEventListener("mousemove", e => {
        if (color) {
            gridCell.style.backgroundColor = masterColor;
            gridCell.classList.remove("unfilled");
        }
    });
    gridCell.addEventListener("mouseup", function(event) {
        if (color) {
            color = false;
        }
    })
    return gridCell;
}

function changeBlue () {
    masterColor = "blue"
}

function changeGreen () {
    masterColor = "green"
}