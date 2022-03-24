import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { BiCoffeeTogo } from 'react-icons/bi'
import { FaDiscord } from 'react-icons/fa'

import { Container } from './styles'

export function Footer() {
    return (
        <Container>
            <div className="social">
                <a
                    href="https://github.com/gustavo-zsilva"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="My Github"
                >
                    <FiGithub size={22} />
                </a>
                <a
                    href="https://www.linkedin.com/in/gustavo-zsilva"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="My Linkedin"
                >
                    <FiLinkedin size={22} />
                </a>
                <a
                    href="https://www.buymeacoffee.com/gustavozx"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Buy me a coffee"
                >
                    <BiCoffeeTogo size={22} />
                </a>
                <a
                    href="https://discord.gg/zGrUPDhkG2"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="My Discord Server"
                >
                    <FaDiscord size={22} />
                </a>
            </div>
            <div>
                <p>Created by <i>Gustavo Zonta da Silva © 2022</i></p>
            </div>
        </Container>
    )
}