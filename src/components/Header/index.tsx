import Link from 'next/link'
import { Container, ThemeSwitch } from "./styles";

export function Header() {
    return (
        <Container>
            <Link href="/" passHref>
                <h2>My <span>Dev</span> Blog</h2>
            </Link>
            <div>
                <ThemeSwitch />
            </div>
        </Container>
    )
}