import Link from 'next/link'
import Image from 'next/image'

import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { FaFire } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Container, LatestBadge } from "./styles";

type PostProps = {
    id: string,
    title: string,
    slug: string,
    readingTime: number,
    publishedAt: string,
    createdBy: {
        name: string,
        picture: string,
    },
    thumbnail: {
        url: string,
    }
}

export function HighlightPost(props: PostProps) {
    const formattedDate = formatDistance(
        new Date(props.publishedAt),
        new Date(),
        { locale: ptBR, addSuffix: true }
    )

    const itemAnimation = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <Link href={`/${props.slug}`} passHref>
            <Container
                css={{
                    backgroundImage: `url(${props.thumbnail.url})`
                }}
                as={motion.button}
                // variants={itemAnimation}
                // whileHover={{ y: -20 }}
                
                transition={{ bounce: 0 }}
            >
                <div className="post-header">
                    <div>
                        <div>
                            <picture>
                                <Image
                                    src={props.createdBy.picture}
                                    alt="Author Picture"
                                    width={30}
                                    height={30}
                                    objectFit="cover"
                                />
                            </picture>
                            <span>{props.createdBy.name}</span>
                        </div>
                        <LatestBadge>
                            <FaFire />
                            <span>Latest</span>
                        </LatestBadge>
                    </div>
                    <strong>{props.title}</strong>
                </div>
                <div>
                    <span>{formattedDate}</span>
                    <span>???</span>
                    <span>{props.readingTime} min</span>
                </div>
            </Container>
        </Link>
    )
}