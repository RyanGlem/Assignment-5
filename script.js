
function addColumn ()   {

    var wrapper = document.getElementsByClassName("wrapper") 

    document.addEventListener ("click", function (e) {

        var columns = wrapper.gridcolumns

        if (e.onclick) {

            columns.start++;
        }

    

    }


}
