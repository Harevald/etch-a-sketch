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
      gridItem.addEventListener('mousedown', changeColor)
      gridItem.addEventListener('mouseover', changeColor)
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
function setCurrentColor(newColor){
    currentColor = newColor;
}
function changeColor(e){
  if (e.type === 'mouseover' && !mouseDown) return //when you hold LMB and move over grid, it will color them
   e.target.style.backgroundColor = currentColor;   //use color selected in colorPicker
}
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#000000";

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

let mouseDown = false; //variable to keep track of mouse status
document.body.onmousedown = () => (mouseDown = true); 
document.body.onmouseup = () => (mouseDown = false);

const colorPicker = document.getElementById("colorPicker");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
const grid = document.getElementById("grid");
const modeColor = document.getElementById("modeColor");


sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value); //when you use slider, update value of numbers above slider, so user knows what size of grid he chooses
sizeSlider.onchange = (e) => changeSize(e.target.value); //when you change value of the slider, create grid of that size
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
createGrid(currentSize);