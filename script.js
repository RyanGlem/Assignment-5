// const addColumn = () => {
//     document.getElementById("temp").innerHTML = "Add Column Clicked"
// }

// const addColumn = () => {
//     const masterDiv = document.getElementsByClassName("grid-container")
//     masterDiv[0].style.display = "block"
//     const div = document.createElement("div")
//     div.className = "grid-item"
//     masterDiv[0].appendChild(div)
// }

// const addRow = () => {
//     const masterDiv = document.getElementsByClassName("grid-container")
//     masterDiv[0].style.display = "flex"
//     const div = document.createElement("div")
//     div.className = "grid-item"
//     masterDiv[0].appendChild(div)
// }

const addColumn = () => {
    const masterDiv = document.getElementsByClassName("grid-container")
    const div = document.createElement("div")
    div.className = "grid-item"
    masterDiv[0].appendChild(div)
}

const addRow = () => {
    const masterDiv = document.getElementsByClassName("grid-container")
    const div = document.createElement("div")
    div.className = "grid-item"
    masterDiv[0].appendChild(div)
}