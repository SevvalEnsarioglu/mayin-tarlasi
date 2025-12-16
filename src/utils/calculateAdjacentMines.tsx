import type { Cell } from "../types";

export function calculateAdjacentMines(grid: Cell[][]): Cell[][] {
    const rows = grid.length;
    const cols = grid[0].length;

    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1],
    ];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = grid[row][col];
            if (cell.isMine) {
                cell.adjacentMines = 0;
                continue;
            }
            let mineCount = 0;
            for (const [dx, dy] of directions) {
                const newRow = row + dx;
                const newCol = col + dy;
                if (
                    newRow >= 0 &&
                    newRow < rows &&
                    newCol >= 0 &&
                    newCol < cols
                ) {
                    if (grid[newRow][newCol].isMine) {
                        mineCount++;
                    }
                }
            }
            cell.adjacentMines = mineCount;
        }
    }
    return grid;
}
