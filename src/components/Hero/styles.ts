import { keyframes, styled, darkTheme } from '../../styles/stitches.config'

const wave = keyframes({
    '0%': { transform: 'rotate(0.0deg)' },
    '10%': { transform: 'rotate(14.0deg)' },
    '20%': { transform: 'rotate(-8.0deg)' },
    '30%': { transform: 'rotate(14.0deg)' },
    '40%': { transform: 'rotate(-4.0deg)' },
    '50%': { transform: 'rotate(10.0deg)' },
    '60%': { transform: 'rotate( 0.0deg)' },
    '100%:': { transform: 'rotate( 0.0deg)' },
})

export const Container = styled('section', {
    display: 'flex',
    flexDirection: 'column',

    textAlign: 'center',
    color: '#FFF',

    width: '100%',
    py: '$3',

    backgroundImage: 'url(https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=639&q=80)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    [`.${darkTheme} &`]: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
    },

    'h1': {
        fontFamily: 'Inconsolata, monospace',
        fontSize: '2rem',

        '.wave': {
            display: 'inline-block',
            animation: `${wave} 2.5s infinite`,
            transformOrigin: '70% 70%',
        },
    },

    '> div': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '2rem',
        margin: '2rem auto 0',

        '@mobile': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },

        '> strong': {
            display: 'flex',
            alignItems: 'center',
            gridColumn: 'span 2',
            gridGap: '.6rem',
            fontWeight: '$regular',
        }
    }
})
