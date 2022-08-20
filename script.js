function clearGrid() {
  grid.innerHTML = "";
}
function createGrid(gridSize) {
  grid.style.gridTemplateColumns = `repeat(${gridSize},1fr)`; //scalable grid
  for (let i = 0; i < gridSize; i++) {
    //create gridSize * gridSize amount of divs with gridItem class, and add them to the grid
    for (let j = 0; j < gridSize; j++) {
      gridItem = document.createElement("div");
      gridItem.classList.add("gridItem");
      grid.appendChild(gridItem);
    }
  }
}
function setCurrentSize(newSize) {
  currentSize = newSize;
}
function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}
function changeSize(value) {
  setCurrentSize(value);
  updateSizeValue(value);
  clearGrid();
  createGrid(value);
}

const DEFAULT_SIZE = 16;
let currentSize = DEFAULT_SIZE;

const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
const grid = document.getElementById("grid");

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value); //when you use slider, update value of numbers above slider, so user knows what size of grid he chooses
sizeSlider.onchange = (e) => changeSize(e.target.value); //when you change value of the slider, create grid of that size
