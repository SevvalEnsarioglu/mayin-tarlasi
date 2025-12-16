import {GameSettings} from "../gameSettings.ts";

type SetupScreenProps = {
    onStart: (settings: GameSettings) => void;
};