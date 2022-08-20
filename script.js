let grid = document.getElementById('grid');
let gridItem;
let gridSize = 16;

grid.style.gridTemplateColumns = `repeat(${gridSize},1fr)`; //scalable grid

for(let i=0; i<gridSize; i++){ //create gridSize * gridSize amount of divs with gridItem class, and add them to the grid 
    for(let j=0; j<gridSize; j++){
        gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        grid.appendChild(gridItem);
    }
}
