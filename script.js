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

const tb = document.getElementsByTagName ("td")
const colors = document.getElementById ("colorSelect")
console.log (colors.options.item(0))

Array.from(tb).forEach(v => v.addEventListener('mouseover', function() {


    if (colors.options.item(1).text == 'Yellow') {

        v.style.background = 'yellow'

    } else if (colors.options.item(2).text == "Blue") {

        v.style.background = 'blue';

    } else if (colors.options.item(2).text == "Red") {

        v.style.background = 'red'

    } else if (colors.options.item(3).text == 'Green') {

        v.style.background = 'green'
    }
  }));
