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
const colors = document.getElementById ("colorSelector")


Array.from(tb).forEach(v => v.addEventListener('mouseover', function() {

   // console.log (colors.options.item(0).text)
    //console.log (colors.options.item(1).text)
   // console.log (colors.options.item(2).text)
    //console.log (colors.options.item(3).text)
    var colSel = colors.options[colors.selectedIndex].value
    console.log (colSel)


    if (colSel == 'Yellow') {

        v.style.background = 'yellow'

    } else if (colSel == "Blue") {

        v.style.background = 'blue';

    } else if (colSel == "Red") {

        v.style.background = 'red'

    } else if (colSel == 'Green') {

        v.style.background = 'green'
    }
  }));
