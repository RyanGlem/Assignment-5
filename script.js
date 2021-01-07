
var grids = document.getElementsByClassName("grid-item")
var gridParent = document.getElementsByClassName ("grid-container")


Array.from(grids).forEach(v => v.addEventListener('mouseover', function() {

    if (v.style.background === 'red') {

        v.style.background = 'white'

    } else {

        v.style.background = 'red';
    }
  }));


  Array.from (grids).forEach (x => x.addEventListener ('click', function () {

    var newGrid = document.creatElement ('div')

    newGrid.className = "grid-item"

    gridParent[0].appendChild (newGrid)

  }));
