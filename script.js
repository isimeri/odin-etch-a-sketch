const board = document.querySelector(".draw-board");
const boardSizeSlider = document.querySelector('#board-size');
const resizeBtn = document.querySelector("#resize-board-btn");
const clearBtn = document.querySelector("#clear-board-btn");
const toggleGridBtn = document.querySelector("#toggle-grid-btn");

let boardCellsArr = [];
let bgColor = 'black';

let isMouseDown = false;

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

        boardCellsArr.push(cell);
        board.appendChild(cell);
    }
}

function clearBoard(){
    boardCellsArr.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}
function toggleGrid(){
    boardCellsArr.forEach(cell => {
        cell.classList.toggle("grid");
    });
}

function init (){
    resizeBoard();
    bgColor = "black";
}

resizeBtn.addEventListener("click", resizeBoard);
clearBtn.addEventListener("click", clearBoard);
toggleGridBtn.addEventListener("click", toggleGrid);

// testDiv.addEventListener("mousedown", () => {
//     testDiv.style.backgroundColor = "darkgreen";
// });
document.addEventListener('mousedown', () => {
    isMouseDown = true;
});
document.addEventListener('mouseup', () => {
    isMouseDown = false;
});
board.addEventListener("mousemove", (e) => {

    if(isMouseDown){
        e.target.style.backgroundColor = bgColor;
    }
});
board.addEventListener("dragstart", (e) => { e.preventDefault();});

init();