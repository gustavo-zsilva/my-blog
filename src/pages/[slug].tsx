import { useState, useEffect, useRef } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from "next/router"

import { useQuery } from "urql"
import { client, ssrCache } from '../lib/urql'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Sidebar } from '../components/Sidebar'
import ReactMarkdown from 'react-markdown'

import { Container, Banner, Article } from '../styles/pages/Post'
import { Layout } from '../components/Layout'

type PostProps = {
    title: string,
    publishedAt: string,
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
            title
            publishedAt
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
    const [scrollPercentage, setScrollPercentage] = useState(0)
    
    const [{ data }] = useQuery<Data>({
        query: postQuery,
        variables: { slug },
    })
    
    const postDate = data?.post.publishedAt || new Date()
    const formattedDate = format(new Date(postDate), 'PPPP', { locale: ptBR })

    function scrollCallback() {
        window.requestAnimationFrame(() => {
            const scrollTop = window.scrollY
            const docHeight = document.body.offsetHeight
            const winHeight = window.innerHeight

            const scrollPercent = scrollTop / (docHeight - winHeight)
            const scrollPercentRounded = Math.round(scrollPercent * 100)

            setScrollPercentage(scrollPercentRounded)
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollCallback)
        return () => window.removeEventListener('scroll', scrollCallback)
    }, [])

    return (
        <Layout title={data?.post.title}>
            <Container>
                <Banner css={{
                    backgroundImage: `url(${data?.post.thumbnail.url})`,
                }} />
                <div className="content">
                    <Article>
                        <p className="post-header">
                            <address>{data?.post.createdBy.name}</address>
                            <span>•</span>
                            <span>{formattedDate}</span>
                        </p>
                        <h1>{data?.post.title}</h1>
                        <ReactMarkdown>
                            {data?.post.content.markdown}
                        </ReactMarkdown>
                        
                    </Article>
                    <Sidebar scrollPercentage={scrollPercentage} />
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