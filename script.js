let grid = document.getElementById('grid');
let gridItem;
let gridSize = 16;
for(let i=0; i<gridSize; i++){
    for(let j=0; j<gridSize; j++){
        gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        grid.appendChild(gridItem);
    }
}
