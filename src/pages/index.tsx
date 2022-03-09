import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import { useQuery } from 'urql'
import { client } from '../lib/urql'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Post } from '../components/Post'

import { Container } from '../styles/pages/Home'

const Home: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>My Dev Blog</title>
            </Head>

            <Header />
            <Hero />
            <main>
                <Post />
                <Post />
                <Post />
            </main>
        </Container>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    
    return {
        props: {

        },
        revalidate: 60 * 60 * 24 // 1 Day
    }
}