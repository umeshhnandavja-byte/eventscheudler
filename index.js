let board = document.getElementById("board");
let context = board.getContext("2d");

let mouse_down = function(event){
    event.preventDefault();
    console.log(event);
}

board.onmousedown = mouse_down;

document.getElementById('date').innerHTML = Date();
