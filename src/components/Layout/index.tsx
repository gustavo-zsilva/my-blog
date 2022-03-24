import { ReactNode } from 'react'
import Head from 'next/head'

import { Header } from '../Header'
import { Footer } from '../Footer'
import { useTheme } from '../../hooks/useTheme'
import { Container } from './styles'

type LayoutProps = {
    children: ReactNode,
    title: string | undefined,
}

// Layout for the basic & required building blocks of each page
export function Layout({ children, title }: LayoutProps) {
    const { theme } = useTheme()

    return (
        <Container className={theme}>
            <Head>
                <title>{title ?? 'Loading...'} | My Dev Blog</title>
            </Head>

            <Header />
            {children}
            <Footer />
        </Container>
    )
}