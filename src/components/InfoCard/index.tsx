import { ReactNode } from 'react'
import { Container } from './styles'

type InfoCardProps = {
    title: string,
    children: ReactNode,
}

export function InfoCard({ title, children }: InfoCardProps) {
    return (
        <Container>
            <strong>{title}</strong>
            <div />
            <p>{children}</p>
        </Container>
    )
}