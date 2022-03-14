import Link from 'next/link'

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

import { useTheme } from '../../hooks/useTheme';
import { Container, ThemeSwitch } from "./styles";

export function Header() {
    const { handleSwitchTheme, theme } = useTheme()

    return (
        <Container>
            <Link href="/" passHref>
                <h2>My <span>Dev</span> Blog</h2>
            </Link>
            <div>
                <ThemeSwitch onClick={handleSwitchTheme}>
                    {theme.className === 'dark-theme'
                        ? <BsFillSunFill color="#B4B4B4" size={14} />
                        : <BsFillMoonFill color="#111" size={14} />
                    }
                </ThemeSwitch>
            </div>
        </Container>
    )
}