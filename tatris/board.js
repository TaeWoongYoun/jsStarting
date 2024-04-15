class Board {
    grid;

    // 게임이 시작되면 보드 초기화
    reset(){
        this.grid = this.getEmptyBoard();
    }

    // 0으로 채워진 행렬을 얻는다
    getEmptyBoard(){
        return Array.from(
            {length: ROWS}, () => Array(COLS).fill(0)
        );
    }
}