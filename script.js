function clearGrid() {
  grid.innerHTML = "";
  createGrid(currentSize);
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
  sizeValue.innerHTML = `${value} x ${value}`; //when you use slider, update value of numbers above slider, so user knows what size of grid he chooses
}
function changeSize(value) { //when you change value of the slider, create grid of that size
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
  if (currentMode === 'rainbow'){ //rainbow mode means random colors, so I used Math.random() to generate random numbers which represent colors
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }
  else if(currentMode === 'color'){
    e.target.style.backgroundColor = currentColor;   //use color selected in colorPicker
  }
  else if(currentMode === 'eraser'){
    e.target.style.backgroundColor = '#ffffff'; //eraser = white color
  }
  
}
function setCurrentMode(newMode) { 
  activateButton(newMode);
  currentMode = newMode;
}
function activateButton(newMode) { //when you press button, it will activate specific mode and deactivate others (add active element to current button)
  if (currentMode === 'rainbow') {
    modeRainbow.classList.remove('active')
  } else if (currentMode === 'color') {
    modeColor.classList.remove('active')
  } else if (currentMode === 'eraser') {
    modeEraser.classList.remove('active')
  }

  if (newMode === 'rainbow') {
    modeRainbow.classList.add('active')
  } else if (newMode === 'color') {
    modeColor.classList.add('active')
  } else if (newMode === 'eraser') {
    modeEraser.classList.add('active')
  }
}
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#000000";
const DEFAULT_MODE = 'color';

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;

let mouseDown = false; //variable to keep track of mouse status
document.body.onmousedown = () => (mouseDown = true); 
document.body.onmouseup = () => (mouseDown = false);

const colorPicker = document.getElementById("colorPicker");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
const grid = document.getElementById("grid");
const modeColor = document.getElementById("modeColor");
const modeRainbow = document.getElementById("modeRainbow");
const modeEraser= document.getElementById("modeEraser");
const clearBtn = document.getElementById("clearBtn");

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value); 
sizeSlider.onchange = (e) => changeSize(e.target.value); 
colorPicker.oninput = (e) => setCurrentColor(e.target.value); 
modeColor.onclick = () => setCurrentMode('color');
modeRainbow.onclick = () => setCurrentMode('rainbow');
modeEraser.onclick = () => setCurrentMode('eraser');
clearBtn.onclick = () => clearGrid();

createGrid(currentSize);