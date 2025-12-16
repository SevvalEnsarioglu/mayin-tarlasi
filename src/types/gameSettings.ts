export type Difficulty = "easy" | "medium" | "hard";

export type GameSettings = {
    rows: number;
    cols: number;
    difficulty: Difficulty;
};