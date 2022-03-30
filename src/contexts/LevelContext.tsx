import { createContext, ReactNode, useState, useEffect } from "react";

export const LevelContext = createContext({} as LevelContextProps)

type LevelContextProps = {
    level: number,
    currentExperience: number,
    experiencePercent: number,
    finishedPosts: Post[],
    handleLevelUp: () => void,
    handleAddExperience: (amount: number) => void,
    handleAddFinishedPost: (id: string, expAmount: number) => void,
}

type LevelProviderProps = {
    children: ReactNode,
}

type StorageLevel = {
    level: number,
    exp: number,
}

type Post = {
    id: string,
    expAmount: number,
}

export function LevelProvider({ children }: LevelProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [finishedPosts, setFinishedPosts] = useState<Post[]>([])

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    const experiencePercent = (currentExperience / experienceToNextLevel) * 100

    useEffect(() => {
        const savedLevel = localStorage.getItem('mdb_userLevel')
        const parsedLevel: StorageLevel | null = savedLevel && JSON.parse(savedLevel)

        const savedFinishedPosts = localStorage.getItem('mdb_finishedPosts')
        const parsedFinishedPosts: Post[] | null = savedFinishedPosts && JSON.parse(savedFinishedPosts)
        
        setLevel(parsedLevel?.level ?? 1)
        setCurrentExperience(parsedLevel?.exp ?? 0)
        setFinishedPosts(parsedFinishedPosts ?? [])
    }, [])

    useEffect(() => {
        localStorage.setItem('mdb_userLevel', JSON.stringify({ level, exp: currentExperience }))
        localStorage.setItem('mdb_finishedPosts', JSON.stringify(finishedPosts))
    }, [currentExperience, level, finishedPosts])

    function handleLevelUp() {
        setLevel((prevState) => prevState + 1)
    }

    function handleAddExperience(amount: number) {
        // Somar exp
        const experienceTotal = amount + currentExperience

        // Maior ou igual ao necessário para upar: Subir de nível e adicionar exp
        if (experienceTotal >= experienceToNextLevel) {
            handleLevelUp()
            setCurrentExperience(experienceTotal - experienceToNextLevel)
            return
        }

        // Menor que necessário para upar: Setar para o total
        setCurrentExperience(experienceTotal)
    }

    function handleAddFinishedPost(id: string, expAmount: number) {
        const newFinishedPost = { id, expAmount }

        if (finishedPosts.some((post) => post.id === id)) return

        setFinishedPosts([...finishedPosts, newFinishedPost])
        handleAddExperience(expAmount)
    }

    return (
        <LevelContext.Provider
            value={{
                level,
                currentExperience,
                experiencePercent,
                finishedPosts,
                handleLevelUp,
                handleAddExperience,
                handleAddFinishedPost,
            }}
        >
            {children}
        </LevelContext.Provider>
    )
}