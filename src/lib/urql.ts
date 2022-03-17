import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql'

const endpoint = process.env.GRAPHCMS_ENDPOINT

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide, initialState: !isServerSide ? window.__URQL_DATA__ : undefined })

const client = createClient({
    url: String(endpoint),
    exchanges: [
        dedupExchange,
        cacheExchange,
        ssrCache,
        fetchExchange
    ],
})

export { client, ssrCache }
