import { createContext, ReactNode, useState } from "react";
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

    const [theme, setTheme] = useState<any>(baseTheme)

    function handleSwitchTheme() {
        if (theme.className === 'dark-theme') {
            setTheme(baseTheme)
            return
        }

        setTheme(darkTheme)
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