import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import { client, ssrCache } from '../lib/urql'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { PostList } from '../components/PostList'
import { Footer } from '../components/Footer'
import { useTheme } from '../hooks/useTheme'

import { Container } from '../styles/pages/Home'
import { Offline } from '../components/Offline'

const postsQuery = `
    {
        posts(orderBy: publishedAt_DESC) {
            id
            title
            slug
            readingTime
            publishedAt
            createdBy {
                name
                picture
            }
            thumbnail {
                url
            }
        }
    }
`

const Home: NextPage = () => {
    const { theme } = useTheme()
    const isOnline = typeof window !== 'undefined' && window.navigator.onLine

    return (
        <Container className={theme}>
            <Head>
                <title>My Dev Blog</title>
            </Head>

            <Header />
            <Hero />
            {isOnline
                ? <PostList />
                : <Offline />}
            
            <Footer />
        </Container>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    
    await client.query(postsQuery).toPromise()
    
    return {
        props: {
            urqlState: ssrCache.extractData(),
        },
        revalidate: 60 * 60 * 12 // 12 hours
    }
}