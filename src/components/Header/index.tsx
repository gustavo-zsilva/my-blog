import Link from 'next/link'

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

import { useTheme } from '../../hooks/useTheme';
import { useButton } from '@react-aria/button'

import { Player } from '../Player'
import { Container, ThemeSwitch } from "./styles";

export function Header() {
    const { handleSwitchTheme, theme } = useTheme()
    // const {  } = useButton()

    return (
        <Container>
            <Link href="/" passHref>
                <button>
                    <h2>My <span>Dev</span> Blog</h2>
                </button>
            </Link>
            <div className="header-controls">
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