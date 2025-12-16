import type { CellProps } from "../types/props/";

export default function Cell({ cell, onClick }: CellProps) {
    const handleClick = () => {
        onClick(cell.row, cell.col);
    };

    let content = "";

    if (cell.isRevealed) {
        if (cell.isMine) content = "💣";
        else if (cell.adjacentMines > 0) content = String(cell.adjacentMines);
    }

    return (
        <button
            className="cell"
            onClick={handleClick}
            disabled={cell.isRevealed}
        >
            {content}
        </button>
    );
}
