import type { CellProps } from "../types/props/";

export default function Cell({ cell, onClick, onRightClick }: CellProps) {
    const handleClick = () => {
        onClick(cell.row, cell.col);
    };

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onRightClick(cell.row, cell.col);
    };

    let content = "";

    if (cell.isRevealed) {
        if (cell.isMine) {
            content = "💣";
        } else if (cell.adjacentMines > 0) {
            content = String(cell.adjacentMines);
        }
    } else if (cell.isFlagged) {
        content = "🚩";
    }

    return (
        <button
            onClick={handleClick}
            onContextMenu={handleRightClick}
            disabled={cell.isRevealed}
            style={{
                width: 32,
                height: 32,
                fontSize: 16,
                cursor: "pointer",
                backgroundColor: cell.isRevealed ? "#ddd" : "#aaa",
                border: "1px solid #555",
            }}
        >
            {content}
        </button>
    );
}
