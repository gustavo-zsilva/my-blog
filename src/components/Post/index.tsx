import Image from 'next/image'

import { Container } from './styles'

export function Post() {
    return (
        <Container>
            <Image
                src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Post Thumbnail"
                width={360}
                height={250}
                objectFit="cover"
            />
            <div>
                <strong>Performance no React com useMemo e useCallback</strong>
                <div>

                    <span>há 3 dias</span>
                    <span>•</span>
                    <span>5 min de leitura</span>
                </div>
            </div>
        </Container>
    )
}