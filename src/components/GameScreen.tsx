import { useEffect, useState } from "react";
import type { GameSettings, Cell } from "../types";
import { createGrid } from "../utils/createGrid";

type Props = {
    settings: GameSettings;
    onBack: () => void;
};

export default function GameScreen({ settings, onBack }: Props) {
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
