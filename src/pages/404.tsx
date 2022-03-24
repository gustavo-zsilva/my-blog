import Image from 'next/image'
import Link from 'next/link'

import { Layout } from '../components/Layout'

import { FiArrowLeft } from 'react-icons/fi'
import { Container, ReturnButton } from '../styles/pages/404'

export default function Custom404() {
    return (
        <Layout title="Post not found">
            <Container>
                <h1>Oops! Parece que não encontramos o post que você está caçando...</h1>
                <Image
                    src="/404.svg"
                    alt="Not Found"
                    width={380}
                    height={250}
                    objectFit="cover"
                />
                <Link href="/" passHref>
                    <ReturnButton>
                        <FiArrowLeft size={26} />
                        <span>Retornar</span>
                    </ReturnButton>
                </Link>
            </Container>
        </Layout>
    )
}