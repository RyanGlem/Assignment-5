let columns = 0
let rows = 0
const mainTable = document.getElementById("main-table")

const addColumn = () => {
    columns += 1

    const rows = document.getElementsByClassName("row")

    for (let i=0; i<rows.length; i++) {
        const data = document.createElement("td")
        rows[i].appendChild(data);
    }
}

const addRow = () => {
    rows += 1
    
    const row = document.createElement("tr")

    row.classList.add("row")

    mainTable.appendChild(row)

    for (let i=0; i<columns; i++) {
        const data = document.createElement("td")
        row.appendChild(data)
    }
}