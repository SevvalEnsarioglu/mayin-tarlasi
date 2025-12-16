import type {Cell} from "../types";

export function createGrid(rows: number, cols: number): Cell[][] {
    const grid: Cell[][] = [];
    for (let row = 0; row < rows; row++) {
        const currentRow: Cell[] = [];
        for (let col = 0; col < cols; col++) {
            currentRow.push({
                row,
                col,
                isMine: false,
                isRevealed: false,
                isFlagged: false,
                adjacentMines: 0,
            });
        }
        grid.push(currentRow);
    }
    return grid;
}