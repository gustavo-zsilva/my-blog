import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import { client, ssrCache } from '../lib/urql'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { PostList } from '../components/PostList'

import { Container } from '../styles/pages/Home'

const postsQuery = `
    {
        posts(orderBy: createdAt_ASC) {
            id
            title
            slug
            readingTime
            publishedAt
            thumbnail {
                url
            }
        }
    }
`

const Home: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>My Dev Blog</title>
            </Head>

            <Header />
            <Hero />
            
            <PostList />
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
        revalidate: 60 * 60 * 24 // 1 Day
    }
}