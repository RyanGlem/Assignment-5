// const addColumn = () => {
//     // count columns
//     const cols = document.getElementById("columns")
//     console.log('cols', cols)

//     const columnCollection = cols.getElementsByTagName("td")
//     console.log('columnCollection', columnCollection)

//     let colCount = 0
//     for (const col of columnCollection) {
//         colCount++
//         console.log('Column:', colCount)
//     }

//     // add col and increment count
//     const newCol = document.createElement("td")
//     cols.appendChild(newCol)
//     colCount++
//     console.log('Added 1 more col')

//     // // get rows and count amount of td's per row
//     // const rows = document.getElementById("rows")
//     // console.log('rows', rows)

//     //
//     const rows = document.getElementById("rows")
//     console.log('rows', rows)

//     const rowItems = rows.getElementsByClassName("row")
//     console.log('rowsItems', rowItems)
//     console.log('rowsItems[0]', rowItems[0])
//     console.log('rowsItems[0].length', rowItems[0].length) // undefined

//     const rowTdItems = rowItems[0].getElementsByTagName("td").length
//     console.log('rowTdItems', rowTdItems)
//     //

//     // const dataPerRow = rows[0].getElementsByTagName("td").length
//     // console.log('dataPerRow -1', dataPerRow)

//     // add enough td's to row to match column count
//     for (let i=0; i<rowItems.length; i++) {
//         for (let j=rowTdItems; j<colCount; j++) {
//             const node = document.createElement("td")
//             rowItems[i].appendChild(node)
//         }
//     }
// }

const addColumn = () => {
    // gets col
    const cols = document.getElementById("columns")
    console.log('cols', cols)
    
    // gets col td count
    const colsTdItems = cols.getElementsByTagName("td")
    console.log('colsTdItems', colsTdItems)
    console.log('colsTdItems', colsTdItems.length)

    // adds col
    const newCol = document.createElement("td")
    cols.appendChild(newCol)

    // re log count
    console.log('colsTdItems after addition', colsTdItems.length)

    // get rows td count
    const rows = document.getElementById("rows")
    console.log('rows', rows)
    console.log('rows at start of addCol', rows)

    const rowItems = rows.getElementsByClassName("row")
    console.log('rowsItems', rowItems)
    console.log('rowsItems.LENGTH', rowItems.length)
    console.log('rowsItems[0]', rowItems[0])
    console.log('rowsItems[0].length', rowItems[0].length) // undefined

    const rowTdItems = rowItems[0].getElementsByTagName("td").length
    console.log('rowTdItems===', rowTdItems)

    for (let i=0; i<rowItems.length; i++) {
        const currentRow = rowItems[i]
        const newRow = document.createElement("tr")

        for (let j=rowTdItems; j<colsTdItems.length; j++) {
            const td = document.createElement("td")
            currentRow.appendChild(td)
        }

        console.log('currentRow', currentRow)

    }

    console.log('rowsItems', rowItems)

    console.log('============================================================')
}

const addRow = () => {
    const rows = document.getElementById("rows")
    console.log('rows', rows)

    const rowItems = rows.getElementsByClassName("row")
    console.log('rowsItems', rowItems)
    console.log('rowsItems[0]', rowItems[0])
    console.log('rowsItems[0].length', rowItems[0].length) // undefined

    const rowTdItems = rowItems[0].getElementsByTagName("td").length
    console.log('rowTdItems', rowTdItems)

    const newRow = document.createElement("tr")

    for (let i=0; i<rowTdItems; i++) {
        const td = document.createElement("td")
        newRow.appendChild(td)
        newRow.className = "row"
    }

    rows.appendChild(newRow)

    console.log('rows at end of addRow', rows)

    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
}