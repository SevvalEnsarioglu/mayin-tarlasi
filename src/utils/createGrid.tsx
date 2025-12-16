import type { Cell, GameSettings } from "../types";
import { placeMines } from "./placeMines";
import { calculateAdjacentMines } from "./calculateAdjacentMines";

export function createGrid(settings: GameSettings): Cell[][] {
    const { rows, cols } = settings;
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

    placeMines(grid, settings);
    calculateAdjacentMines(grid);

    return grid;
}
