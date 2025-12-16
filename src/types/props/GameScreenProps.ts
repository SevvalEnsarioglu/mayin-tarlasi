import {GameSettings} from "../gameSettings.ts";

type GameScreenProps = {
    settings: GameSettings;
    onBack: () => void;
};