import type { AppProps } from 'next/app'

import { Provider } from 'urql'
import { ThemeProvider } from '../contexts/ThemeContext'
import { LevelProvider } from '../contexts/LevelContext'

import { client, ssrCache } from '../lib/urql'
import { globalStyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
    globalStyles()

    if (pageProps.urqlState) {
        ssrCache.restoreData(pageProps.urqlState)
    }

    return (
        <Provider value={client}>
            <ThemeProvider>
                <LevelProvider>
                    <Component {...pageProps} />
                </LevelProvider>
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
