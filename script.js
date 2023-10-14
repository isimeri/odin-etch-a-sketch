const board = document.querySelector(".draw-board");
const boardSizeSlider = document.querySelector('#board-size');
const resizeBtn = document.querySelector("#resize-board-btn");
let boardCellsArr = [];

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

resizeBtn.addEventListener("click", resizeBoard);