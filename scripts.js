let pad = document.querySelector('.sketch-pad')

function createPixels(num) {
    for (let rows = 0; rows < num; rows++) {
        let rows = document.createElement('div');
        rows.classList.add('rows');
        pad.appendChild(rows);
        rows.style.height = `${600/num}px`
        rows.style.width = `${600/num}px`
        
        for (let columns = 0; columns < num; columns++) {
            let columns = document.createElement('div');
            columns.classList.add('columns');
            rows.appendChild(columns);
            columns.style.height = `${600/num}px`
            columns.style.width = `${600/num}px`
            columns.addEventListener('mouseenter', () => {
            columns.style.backgroundColor = `rgb(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256})`
        });
        pad.appendChild(rows)
     }
  }
}

let rows = document.querySelector('.rows')
let button = document.querySelector('.canvas')
let container = document.querySelector('.container')
button.addEventListener('click', () => { 
    let num = prompt('Enter a size for the grid 10-100')
    createPixels(num);
})

createPixels(16)