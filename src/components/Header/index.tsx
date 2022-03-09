import { Container, ThemeSwitch } from "./styles";

export function Header() {
    return (
        <Container>
            <h2>My <span>Dev</span> Blog</h2>
            <div>
                <ThemeSwitch />
            </div>
        </Container>
    )
}