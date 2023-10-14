const board = document.querySelector(".draw-board");
const boardSizeSlider = document.querySelector('#board-size');
const resizeBtn = document.querySelector("#resize-board-btn");

function resizeBoard(){
    const size = boardSizeSlider.value;
    console.log(size);
}

resizeBtn.addEventListener("click", resizeBoard);