import Image from 'next/image'
import Link from 'next/link'

import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { motion } from 'framer-motion'
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

    const itemAnimation = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0 },
    }
    
    return (
        <Link href={`/${slug}`} passHref>
            <Container
                as={motion.div}
                variants={itemAnimation}
                whileHover={{ y: -20 }}
                transition={{ bounce: 0 }}
            >
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