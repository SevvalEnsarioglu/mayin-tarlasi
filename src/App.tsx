import { useState } from "react";
import SetupScreen from "./components/SetupScreen";
import GameScreen from "./components/GameScreen";
import type { GameSettings } from "./types";

export default function App() {
    const [settings, setSettings] = useState<GameSettings | null>(null);
    if (settings === null) {
        return <SetupScreen onStart={setSettings} />;
    }

    return (
        <GameScreen
            settings={settings}
            onBack={() => setSettings(null)} // 👈 GERİ DÖNÜŞ BURADA
        />
    );
}
