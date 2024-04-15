const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

// 상수를 이용해 캔버스의 크기 계산
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// 블록의 크기 변경
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

function play(){
    board.reset();
    let piece = new Piece(ctx);
    piece.draw();

    board.piece = piece;
    console.table(board.grid);
}
