import { useEffect, useState } from "react";
import type { Cell as CellType } from "../types";
import { createGrid } from "../utils/createGrid";
import { revealCell } from "../utils/revealCell";
import Cell from "./Cell";
import type { GameScreenProps } from "../types/props/";

export default function GameScreen({ settings, onBack }: GameScreenProps) {
    const [grid, setGrid] = useState<CellType[][]>([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isWin, setIsWin] = useState(false);
    const [isFirstClick, setIsFirstClick] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (isGameOver || isWin) return;

        const interval = setInterval(() => {
            setTime((t) => t + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isGameOver, isWin]);

    const startGame = () => {
        setGrid(createGrid(settings));
        setIsGameOver(false);
        setIsWin(false);
        setIsFirstClick(true);
        setTime(0);
    };

    useEffect(() => {
        startGame();
    }, [settings]);

    const checkWin = (grid: CellType[][]): boolean => {
        for (const row of grid) {
            for (const cell of row) {
                if (!cell.isMine && !cell.isRevealed) return false;
            }
        }
        return true;
    };

    /* 🚩 FLAG */
    const handleRightClick = (row: number, col: number) => {
        if (isGameOver || isWin) return;

        const newGrid = [...grid];
        const cell = newGrid[row][col];

        if (!cell.isRevealed) {
            cell.isFlagged = !cell.isFlagged;
            setGrid(newGrid);
        }
    };

    /* 🖱 CLICK */
    const handleCellClick = (row: number, col: number) => {
        if (isGameOver || isWin) return;

        let newGrid = [...grid];
        const clickedCell = newGrid[row][col];

        if (clickedCell.isFlagged) return;

        /* 🧠 FIRST CLICK SAFE */
        if (isFirstClick) {
            while (clickedCell.isMine) {
                newGrid = createGrid(settings);
            }
            setIsFirstClick(false);
        }

        /* 💣 MAYIN */
        if (clickedCell.isMine) {
            for (const r of newGrid) {
                for (const c of r) {
                    if (c.isMine) c.isRevealed = true;
                }
            }
            setGrid(newGrid);
            setIsGameOver(true);
            return;
        }

        revealCell(newGrid, row, col);

        if (checkWin(newGrid)) {
            for (const r of newGrid) {
                for (const c of r) {
                    if (c.isMine) c.isRevealed = true;
                }
            }
            setIsWin(true);
        }

        setGrid(newGrid);
    };

    return (
        <div className="game-screen">
            <h2>💣 MAYIN TARLASI</h2>

            <p>
                {settings.rows} x {settings.cols} – {settings.difficulty}
            </p>

            <p>⏱ Süre: {time} sn</p>

            {isGameOver && <h3 style={{ color: "red" }}>💥 Kaybettin</h3>}
            {isWin && <h3 style={{ color: "green" }}>🎉 Kazandın</h3>}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${settings.cols}, 32px)`,
                    gap: "4px",
                    pointerEvents: isGameOver || isWin ? "none" : "auto",
                }}
            >
                {grid.map((row) =>
                    row.map((cell) => (
                        <Cell
                            key={`${cell.row}-${cell.col}`}
                            cell={cell}
                            onClick={handleCellClick}
                            onRightClick={handleRightClick}
                        />
                    ))
                )}
            </div>

            <div style={{ marginTop: 12 }}>
                <button onClick={startGame}>🔄 Tekrar Oyna</button>
                <button onClick={onBack}>⬅️ Geri Dön</button>
            </div>
        </div>
    );
}
