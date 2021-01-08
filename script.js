let columns = 0
let rows = 0
const mainTable = document.getElementById("main-table")

const addColumn = () => {
    columns += 1

    const rows = document.getElementsByClassName("row")

    for (let i=0; i<rows.length+1; i++) {
        const data = document.createElement("td")
        rows[i].appendChild(data);
    }
}

const addRow = () => {
    rows += 1

    const row = document.createElement("tr")

    row.classList.add("row")

    mainTable.appendChild(row)

    for (let i=0; i<columns+1; i++) {
        const data = document.createElement("td")
        row.appendChild(data)
    }
}


const removeColumn = () => {
    if(columns === 0){
      while(rows > -1){
        removeRow();
      }
    }
    columns--
    var columns = mainTable.rows[0].cells.length-1
    for (let i = 0; i < mainTable.rows.length; i++){
    mainTable.rows[i].deleteCell(columns);
  }
}


const removeRow = () => {
    if (rows === 0){
        while (columns > -1){
            removeColumn();
        }
    }
    rows --;
    let lastR = mainTable.rows.length - 1;
    mainTable.deleteRow(lastR);
}
