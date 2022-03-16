import Head from 'next/head'
import { useRouter } from "next/router"

import { useQuery } from "urql"
import { client, ssrCache } from '../lib/urql'

import ReactMarkdown from 'react-markdown'
import { Header } from '../components/Header'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Container, Banner, Article } from '../styles/pages/Post'
import { useTheme } from '../hooks/useTheme'
import { GetStaticPaths, GetStaticProps } from 'next'

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
    const { theme } = useTheme()
    
    const [{ data }] = useQuery<Data>({
        query: postQuery,
        variables: { slug },
    })
    
    const postDate = data?.post.publishedAt || new Date()
    const formattedDate = format(new Date(postDate), 'PPPP', { locale: ptBR })

    return (
        <Container className={theme}>
            <Head>
                <title>{data?.post.title} | My Dev Blog</title>
            </Head>
            
            <Header />
            <Banner css={{
                backgroundImage: `url(${data?.post.thumbnail.url})`,
            }} />
            <Article>
                <p className="post-header">
                    <address>{data?.post.createdBy.name}</address>
                    <span>•</span>
                    <span>{formattedDate}</span>
                </p>
                <h1>{data?.post.title}</h1>
                <ReactMarkdown>{data?.post.content.markdown}</ReactMarkdown>
                
            </Article>
        </Container>
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

    await client.query(postQuery, { slug: ctx.params?.slug }).toPromise()

    return {
        props: {
            urqlState: ssrCache.extractData(),
        },
    }
}