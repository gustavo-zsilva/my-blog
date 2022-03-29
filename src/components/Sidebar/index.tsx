import { FiGithub } from 'react-icons/fi'
import { BiCoffeeTogo } from 'react-icons/bi'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { useTheme } from '../../hooks/useTheme'
import { Container, ExperienceCircle, Link } from './styles'

type SidebarProps = {
    scrollPercentage: number,
}

export function Sidebar({ scrollPercentage }: SidebarProps) {
    const { theme } = useTheme()
    const isDarkTheme = theme.className === 'dark-theme'

    return (
        <Container>
            <ExperienceCircle>
                <CircularProgressbar
                    value={scrollPercentage}
                    strokeWidth={10}
                    text="75 xp"
                    styles={
                        buildStyles({
                            pathColor: '#F72585',
                            trailColor: `${isDarkTheme ? '#363636' : '#ebebeb'}`,
                            textColor: `${isDarkTheme ? '#FFF' : '#111'}`,
                            textSize: '1.6rem',
                        })
                    }
                />
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