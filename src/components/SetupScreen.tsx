import { useState } from "react";
import type { GameSettings } from "../types";
import type { SetupScreenProps } from "../types/props/";

export default function SetupScreen({ onStart }: SetupScreenProps) {
    const [rows, setRows] = useState(10);
    const [cols, setCols] = useState(10);
    const [difficulty, setDifficulty] = useState<GameSettings["difficulty"]>("easy");

    const handleStart = () => {onStart({ rows, cols, difficulty });};

    return (
        <div className="setup-screen">
            <h1>👋 Merhaba, Mayın Tarlası Oyununa Hoş Geldiniz</h1>

            <div>
                <label>En (Satır)</label>
                <select value={rows} onChange={(e) => setRows(Number(e.target.value))}>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>

            </div>
            <div>
                <label>Boy (Sütun)</label>
                <select value={cols} onChange={(e) => setCols(Number(e.target.value))}>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Zorluk</label>
                <select
                    value={difficulty}
                    onChange={(e) =>
                        setDifficulty(e.target.value as GameSettings["difficulty"])
                    }
                >
                    <option value="easy">Kolay</option>
                    <option value="medium">Orta</option>
                    <option value="hard">Zor</option>
                </select>
            </div>
            <button onClick={handleStart}>OYNA</button>
        </div>
    );
}
