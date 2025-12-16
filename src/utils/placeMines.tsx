import type { Cell, GameSettings } from "../types";

export function placeMines(
    grid: Cell[][],
    settings: GameSettings
): Cell[][] {

    const { rows, cols, difficulty } = settings;
    const totalCells = rows * cols;
    let mineRatio: number;
    switch (difficulty) {
        case "easy":
            mineRatio = 0.1;
            break;
        case "medium":
            mineRatio = 0.15;
            break;
        case "hard":
            mineRatio = 0.2;
            break;
        default:
            mineRatio = 0.1;
    }

    const mineCount = Math.floor(totalCells * mineRatio);
    let placedMines = 0;

    while (placedMines < mineCount) {
        const randomRow = Math.floor(Math.random() * rows);
        const randomCol = Math.floor(Math.random() * cols);
        const cell = grid[randomRow][randomCol];
        if (!cell.isMine) {
            cell.isMine = true;
            placedMines++;
        }
    }
    return grid;
}
