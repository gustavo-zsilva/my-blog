import Image from 'next/image'
import Link from 'next/link'

import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { AiFillStar } from 'react-icons/ai'

import { motion } from 'framer-motion'
import { useLevel } from '../../hooks/useLevel'
import { Container } from './styles'

type PostProps = {
    id: string,
    title: string,
    slug: string,
    readingTime: number,
    publishedAt: string,
    thumbnail: {
        url: string,
    }
}

export function Post({ id, title, publishedAt, slug, readingTime, thumbnail }: PostProps) {
    const { finishedPosts } = useLevel()
    const isFinished = finishedPosts.some(post => post.id === id)

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
                as={motion.button}
                // variants={itemAnimation}
                // whileHover={{ y: -20 }}
                // transition={{ bounce: 0 }}
            >
                <picture>
                    <Image
                        src={thumbnail.url}
                        alt="Post Thumbnail"
                        width={400}
                        height={250}
                        layout="responsive"
                        objectFit="cover"
                    />
                </picture>
                <div>
                    <strong>{title}</strong>
                    <div>
                        <div>
                            <span>{formattedDate}</span>
                            <span>•</span>
                            <span>{readingTime} min</span>
                        </div>
                        <span>{isFinished && <AiFillStar size={24} color="#1371F5" />}</span>
                    </div>
                </div>
            </Container>
        </Link>
    )
}