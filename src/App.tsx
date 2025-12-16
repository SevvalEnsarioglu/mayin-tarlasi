import { useState } from "react";
import SetupScreen from "./components/SetupScreen";
import GameScreen from "./components/GameScreen";
import type { GameSettings } from "./types";

function App() {
    const [settings, setSettings] = useState<GameSettings | null>(null);

    return (
        <div className="app">
            {!settings ? (
                <SetupScreen onStart={setSettings} />
            ) : (
                <GameScreen settings={settings} />
            )}
        </div>
    );
}

export default App;
