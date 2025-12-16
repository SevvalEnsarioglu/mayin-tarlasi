import { useEffect, useState } from "react";
import type { Cell } from "../types";
import { createGrid } from "../utils/createGrid";
import type { GameScreenProps } from "../types/props/";


export default function GameScreen({ settings, onBack }: GameScreenProps) {
    const [grid, setGrid] = useState<Cell[][]>([]);

    useEffect(() => {
        const newGrid = createGrid(settings.rows, settings.cols);
        setGrid(newGrid);
    }, [settings]);

    return (
        <div>
            <h2>🎮 Oyun Başladı</h2>
            <p>
                {settings.rows} x {settings.cols} – {settings.difficulty}
            </p>

            <pre>{JSON.stringify(grid, null, 2)}</pre>

            <button onClick={onBack}>⬅️ Geri Dön</button>
        </div>
    );
}
