import type { Cell } from "../types";

export function revealCell(
    grid: Cell[][],
    row: number,
    col: number
): Cell[][] {
    const rows = grid.length;
    const cols = grid[0].length;
    const cell = grid[row][col];

    // grid sınırı kontrolü
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
        return grid;
    }

    // zaten açıksa veya flagliyse açma
    if (cell.isRevealed || cell.isFlagged) {
        return grid;
    }

    // hücreyi aç
    cell.isRevealed = true;

    // mayına basıldıysa burada dur
    if (cell.isMine) {
        return grid;
    }

    // sayı varsa, sadece bu hücre açılır
    if (cell.adjacentMines > 0) {
        return grid;
    }

    // etrafındaki hücreleri aç
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1],
    ];

    for (const [dx, dy] of directions) {
        revealCell(grid, row + dx, col + dy);
    }

    return grid;
}
