import { FiGithub } from 'react-icons/fi'
import { BiCoffeeTogo } from 'react-icons/bi'

import { Container, ExperienceCircle, Link } from './styles'

export function Sidebar() {
    return (
        <Container>
            <ExperienceCircle>
                <strong>75</strong>
                <span>xp</span>
            </ExperienceCircle>
            <Link
                href="https://github.com/gustavo-zsilva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My Github"
            >
                <FiGithub size={26} />
            </Link>
            <Link
                href="https://www.buymeacoffee.com/gustavozx"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Buy me a coffee"
            >
                <BiCoffeeTogo size={26} />
            </Link>
        </Container>
    )
}