import { useQuery } from "urql";
import { Post } from "../Post";
import { Container } from "./styles";

type Data = {
    posts: PostProps[],
}

type PostProps = {
    id: string,
    title: string,
    slug: string,
    readingTime: string,
    createdAt: string,
    publishedAt: string,
    thumbnail: {
        url: string,
    }
}

export function PostList() {
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

    const [{ data }] = useQuery<Data>({ query: postsQuery })
    
    return (
        <Container>
            {data?.posts.map(post => (
                <Post key={post.id} {...post} />
            ))}
        </Container>
    )
}