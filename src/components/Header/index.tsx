import Link from 'next/link'

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

import { useTheme } from '../../hooks/useTheme'
import { useLevel } from '../../hooks/useLevel'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import { Player } from '../Player'
import { Container, ThemeSwitch, LevelTracker } from "./styles"

export function Header() {
    const { handleSwitchTheme, theme } = useTheme()
    const { level, experiencePercent } = useLevel()
    const isDarkTheme = theme.className === 'dark-theme'

    return (
        <Container>
            <Link href="/" passHref>
                <button>
                    <h2>My <span>Dev</span> Blog</h2>
                </button>
            </Link>
            <div className="header-controls">
                <LevelTracker>
                    <CircularProgressbar
                        value={experiencePercent}
                        text={level.toString()}
                        styles={buildStyles({
                            pathColor: '#F72585',
                            trailColor: `${isDarkTheme ? '#363636' : '#ebebeb'}`,
                            textColor: `${isDarkTheme ? '#FFF' : '#111'}`,
                            textSize: '2.5rem',
                        })}
                    />
                </LevelTracker>
                <Player />
                <ThemeSwitch
                    onClick={handleSwitchTheme}
                    aria-label="Switch Theme"
                >
                    {theme.className === 'dark-theme'
                        ? <BsFillSunFill color="#B4B4B4" size={14} />
                        : <BsFillMoonFill color="#111" size={14} />
                    }
                </ThemeSwitch>
            </div>
        </Container>
    )
}