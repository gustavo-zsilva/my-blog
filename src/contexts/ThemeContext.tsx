import { createContext, ReactNode, useState, useEffect } from "react";
import { theme as baseTheme, darkTheme } from '../styles/stitches.config'

export const ThemeContext = createContext({} as ThemeContextProps)

type ThemeContextProps = {
    theme: any,
    handleSwitchTheme: () => void,
}

type ThemeProviderProps = {
    children: ReactNode,
}

export function ThemeProvider({ children }: ThemeProviderProps) {

    const initialTheme = typeof window !== 'undefined'
        && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? darkTheme
        : baseTheme

    const [theme, setTheme] = useState<typeof darkTheme>(initialTheme)

    useEffect(() => {
        const savedTheme = localStorage.getItem('mdb_theme')
        if (!savedTheme) return

        setTheme(savedTheme === 'dark' ? darkTheme : baseTheme)
    }, [])

    function handleSwitchTheme() {
        if (theme.className === 'dark-theme') {
            setTheme(baseTheme)
            localStorage.setItem('mdb_theme', 'base')
            return
        }

        setTheme(darkTheme)
        localStorage.setItem('mdb_theme', 'dark')
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                handleSwitchTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}