import Image from 'next/image'
import Link from 'next/link'

import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Container } from './styles'

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

export function Post(props: PostProps) {
    const formattedDate = formatDistance(
        new Date(props?.publishedAt),
        new Date(),
        { locale: ptBR, addSuffix: true }
    )
    
    return (
        <Link href={props?.slug} passHref>
            <Container>
                <Image
                    src={props?.thumbnail.url}
                    alt="Post Thumbnail"
                    width={360}
                    height={250}
                    objectFit="cover"
                />
                <div>
                    <strong>{props?.title}</strong>
                    <div>
                        <span>{formattedDate}</span>
                        <span>•</span>
                        <span>{props?.readingTime}</span>
                    </div>
                </div>
            </Container>
        </Link>
    )
}