const addColumn = () => {
    const cols = document.getElementById("columns")
    const columnCollection = cols.getElementsByTagName("td")
    let colCount = 0
    for (const col of columnCollection) {
        colCount++
        console.log('Column:', colCount)
    }
    const newCol = document.createElement("td")
    cols.appendChild(newCol)
    colCount++
    console.log('Added 1 more col')

    const rows = document.getElementsByClassName("row")
    console.log('rows', rows)

    const dataPerRow = rows[0].getElementsByTagName("td").length
    console.log(dataPerRow)

    for (let i=0; i<rows.length; i++) {
        for (let j=dataPerRow; j<colCount; j++) {
            const node = document.createElement("td")
            rows[i].appendChild(node)
        }
    }
}