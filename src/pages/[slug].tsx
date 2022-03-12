import Head from 'next/head'
import { useRouter } from "next/router"
import { useQuery } from "urql"
import ReactMarkdown from 'react-markdown'
import { Header } from '../components/Header'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Container, Banner, Article } from '../styles/pages/Post'

type PostProps = {
    title: string,
    publishedAt: string,
    content: {
        markdown: any,
    },
    thumbnail: {
        url: string,
    }
}

type Data = {
    post: PostProps,
}

const postQuery = `
    query ($slug: String!) {
        post(where: {slug: $slug}) {
            title
            publishedAt
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
    
    const [{ data }] = useQuery<Data>({
        query: postQuery,
        variables: { slug },
    })
    
    const postDate = data ? data.post.publishedAt : new Date()
    const formattedDate = format(new Date(postDate), 'PPPP', { locale: ptBR })

    console.log(formattedDate)

    return (
        <Container>
            <Head>
                <title>{data?.post.title} | My Dev Blog</title>
            </Head>
            
            <Header />
            <Banner css={{
                backgroundImage: `url(${data?.post.thumbnail.url})`,
            }} />
            <Article>
                <p className="post-header">
                    <address>Gustavo Zonta da Silva</address>
                    <span>•</span>
                    <span>{formattedDate}</span>
                </p>
                <h1>{data?.post.title}</h1>
                <ReactMarkdown>{data?.post.content.markdown}</ReactMarkdown>
                
            </Article>
        </Container>
    )
}