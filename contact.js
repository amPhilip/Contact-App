//get input element
let filterInput = document.getElementById('filterInput');

//add event listener
//
filterInput.addEventListener('keyup', filter);

function filter() {
    //get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    //get names ul
    let ul = document.getElementById('names');
    //get li from ul
    let li = ul.querySelectorAll('li.collection-item');
    //loop through collection item li
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        //if matches
        if(a.innerHTML.toUpperCase().indexOf(filterValue) >
        -1) {
            li[i].style.display = '';

        } else {
            li[i].style.display = 'none';
        }
    }

}
