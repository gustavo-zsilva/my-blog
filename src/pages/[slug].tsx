import { useState, useEffect, useMemo } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from "next/router"

import { useQuery } from "urql"
import { client, ssrCache } from '../lib/urql'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Sidebar } from '../components/Sidebar'
import { Layout } from '../components/Layout'
import { useLevel } from '../hooks/useLevel'

import ReactMarkdown from 'react-markdown'

import { Container, Banner, Article } from '../styles/pages/Post'

type PostProps = {
    id: string,
    title: string,
    publishedAt: string,
    readingTime: number,
    createdBy: {
        name: string,
    },
    content: {
        markdown: any,
    },
    thumbnail: {
        url: string,
    }
}

type Slug = {
    slug: string,
}

type Data = {
    post: PostProps,
}

const postQuery = `
    query ($slug: String!) {
        post(where: {slug: $slug}) {
            id
            title
            publishedAt
            readingTime
            createdBy {
                name
            }
            content {
                markdown
            }
            thumbnail {
                url
            }
        }
    }
`

export default function Post() {
    const router = useRouter()
    const { slug } = router.query
    const { finishedPosts, handleAddFinishedPost } = useLevel()
    const [scrollPercentage, setScrollPercentage] = useState(0)
    
    const [{ data }] = useQuery<Data>({
        query: postQuery,
        variables: { slug },
    })
    
    const postDate = data?.post.publishedAt || new Date()
    const formattedDate = format(new Date(postDate), 'PPPP', { locale: ptBR })

    const experienceToGain = (data?.post.readingTime || 3) * 12
    const isPostFinished = useMemo(() => (
        finishedPosts.some((post) => post.id === data?.post.id)
    ), [finishedPosts, data?.post.id])
    
    function scrollCallback() {
        window.requestAnimationFrame(() => {
            const scrollTop = window.scrollY
            const docHeight = document.body.offsetHeight
            const winHeight = window.innerHeight

            const scrollPercent = scrollTop / (docHeight - winHeight)
            const scrollPercentRounded = Math.round(scrollPercent * 100)

            if (scrollPercentRounded === 100) {
                handleAddFinishedPost(data?.post.id ?? '', experienceToGain)
                window.removeEventListener('scroll', scrollCallback, true)
            }

            setScrollPercentage(scrollPercentRounded)
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollCallback, true)
        return () => window.removeEventListener('scroll', scrollCallback, true)
    }, [])

    return (
        <Layout title={data?.post.title}>
            <Container>
                <Banner css={{
                    backgroundImage: `url(${data?.post.thumbnail.url})`,
                }} />
                <div className="content">
                    <Article>
                        <div className="post-header">
                            <address>{data?.post.createdBy.name}</address>
                            <span>•</span>
                            <span>{formattedDate}</span>
                        </div>
                        <h1>{data?.post.title}</h1>
                        <ReactMarkdown>
                            {data?.post.content.markdown}
                        </ReactMarkdown>
                        
                    </Article>
                    <Sidebar
                        scrollPercentage={scrollPercentage}
                        isPostFinished={isPostFinished}
                        experienceToGain={experienceToGain}
                    />
                </div>
            </Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const { data } = await client.query(`
        {
            posts(orderBy: publishedAt_DESC, first: 10) {
                slug
            }
        }
    `).toPromise()

    const posts = data.posts.map(({ slug }: Slug) => ({ params: { slug } }))

    return {
        paths: posts,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const { data } = await client.query(postQuery, { slug: ctx.params?.slug }).toPromise()

    if (!data.post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            urqlState: ssrCache.extractData(),
        },
    }
}