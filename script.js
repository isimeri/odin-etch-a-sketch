const board = document.querySelector(".draw-board");
const boardSizeSlider = document.querySelector('#board-size');
const resizeBtn = document.querySelector("#resize-board-btn");
const clearBtn = document.querySelector("#clear-board-btn");
const toggleGridBtn = document.querySelector("#toggle-grid-btn");
const colorPicker = document.querySelector("#color-picker");
const toggleRainbowBtn = document.querySelector("#toggle-rainbow-btn");
const toggleEyedropperBtn = document.querySelector("#eyedropper-btn");

let boardCellsArr = [];
let bgColor = 'black';
let rainbowMode = false;
let eyedropper = false;

let isMouseDown = false;

function generateRandomColor(){
    const r = (Math.floor(Math.random() * 256)).toString(16);
    const g = (Math.floor(Math.random() * 256)).toString(16);
    const b = (Math.floor(Math.random() * 256)).toString(16);

    return "#"+r+g+b;
}
function RGBtoHEX(rgbString){
    const regex = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\)/;
    const rgbVals = rgbString.match(regex);
    const r = parseInt(rgbVals[1]).toString(16);
    const g = parseInt(rgbVals[2]).toString(16);
    const b = parseInt(rgbVals[3]).toString(16);
    
    const hex = "#"+r+g+b;

    return hex;
}

function resizeBoard(){
    const size = boardSizeSlider.value;
    const cellSize = 800 / size;
    boardCellsArr = [];
    board.innerHTML = '';
    for(let i = 0; i < size*size; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;
        cell.style.backgroundColor = "#ffffff";

        boardCellsArr.push(cell);
        board.appendChild(cell);
    }
}

function clearBoard(){
    boardCellsArr.forEach(cell => {
        cell.style.backgroundColor = "#ffffff";
    });
}
function toggleGrid(){
    boardCellsArr.forEach(cell => {
        cell.classList.toggle("grid");
    });
    toggleGridBtn.classList.toggle("active");
}
function setColor(){
    bgColor = colorPicker.value;
}
function toggleRainbowMode(){
    rainbowMode = !rainbowMode;
    toggleRainbowBtn.classList.toggle("active");
    setColor();
}
function toggleEyedropper(){
    eyedropper = !eyedropper;
    toggleEyedropperBtn.classList.toggle("active");
}
function draw(e){
    e.target.style.backgroundColor = bgColor;
    if(rainbowMode === true){
        bgColor = generateRandomColor();
    }
}

function init (){
    resizeBoard();
    setColor();
}

resizeBtn.addEventListener("click", resizeBoard);
clearBtn.addEventListener("click", clearBoard);
toggleGridBtn.addEventListener("click", toggleGrid);
toggleRainbowBtn.addEventListener("click", toggleRainbowMode);
colorPicker.addEventListener("change", setColor);
toggleEyedropperBtn.addEventListener("click", toggleEyedropper);


document.addEventListener('mousedown', () => {
    isMouseDown = true;
});
document.addEventListener('mouseup', () => {
    isMouseDown = false;
});
board.addEventListener("mousemove", e => {

    if(isMouseDown){
        draw(e);
    }
});
board.addEventListener("mousedown", e => {
    if(eyedropper === false){
        draw(e);
    }
});
board.addEventListener("click", (e) => {
    if(eyedropper === true){
        bgColor = e.target.style.backgroundColor;
        colorPicker.value = RGBtoHEX(bgColor);
    }
});
board.addEventListener("dragstart", (e) => { e.preventDefault();});

init();