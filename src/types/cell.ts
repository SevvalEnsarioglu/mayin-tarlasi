export type Cell = {
    row: number;
    col: number;
    isMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    adjacentMines: number;  // çevresindeki mayın sayısı
};
