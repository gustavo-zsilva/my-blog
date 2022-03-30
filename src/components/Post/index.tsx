import Image from 'next/image'
import Link from 'next/link'

import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Container } from './styles'

type PostProps = {
    title: string,
    slug: string,
    readingTime: number,
    publishedAt: string,
    thumbnail: {
        url: string,
    }
}

export function Post({ title, publishedAt, slug, readingTime, thumbnail }: PostProps) {
    const formattedDate = formatDistance(
        new Date(publishedAt),
        new Date(),
        { locale: ptBR, addSuffix: true }
    )
    
    return (
        <Link href={`/${slug}`} passHref>
            <Container>
                <picture>
                    <Image
                        src={thumbnail.url}
                        alt="Post Thumbnail"
                        width={400}
                        height={250}
                        objectFit="cover"
                    />
                </picture>
                <div>
                    <strong>{title}</strong>
                    <div>
                        <span>{formattedDate}</span>
                        <span>•</span>
                        <span>{readingTime} min</span>
                    </div>
                </div>
            </Container>
        </Link>
    )
}