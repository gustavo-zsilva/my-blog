import { HighlightPost } from "../HighlightPost"
import { Post } from "../Post";

import { useQuery } from "urql";
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
    createdBy: {
        name: string,
        picture: string,
    },
    thumbnail: {
        url: string,
    }
}

export function PostList() {
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

    const [{ data }] = useQuery<Data>({ query: postsQuery })
    
    return (
        <Container>
            {data && <HighlightPost {...data.posts[0]} />}
            {data?.posts.map(post => (
                <Post key={post.id} {...post} />
            ))}
        </Container>
    )
}