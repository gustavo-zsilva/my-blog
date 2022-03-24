import { createContext, ReactNode, useState } from "react";

export const LevelContext = createContext({} as LevelContextProps)

type LevelContextProps = {
    level: number,
    experience: number,
    handleLevelUp: () => void,
    handleAddExperience: (amount: number) => void,
}

type LevelProviderProps = {
    children: ReactNode,
}

export function LevelProvider({ children }: LevelProviderProps) {
    const [level, setLevel] = useState(1)
    const [experience, setExperience] = useState(0)

    function handleLevelUp() {
        setLevel((prevState) => prevState + 1)
    }

    function handleAddExperience(amount: number) {
        // Adicionar exp
        // Maior que necessário para upar: Subir de nível e adicionar ao proximo
        // Menor que necessário para upar: Apenas adicionar
    }

    return (
        <LevelContext.Provider
            value={{
                level,
                experience,
                handleLevelUp,
                handleAddExperience,
            }}
        >
            {children}
        </LevelContext.Provider>
    )
}