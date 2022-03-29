import { useContext } from "react";
import { LevelContext } from "../contexts/LevelContext";

export function useLevel() {
    return useContext(LevelContext)
}