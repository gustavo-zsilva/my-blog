import { styled } from '../../styles/stitches.config'

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

    'h1': {
        fontFamily: 'Inconsolata, monospace',
        fontSize: '2rem',
    },

    '> div': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '2rem',
        margin: '2rem auto 0',

        '> strong': {
            display: 'flex',
            alignItems: 'center',
            gridColumn: 'span 2',
            gridGap: '.6rem',
            fontWeight: '$regular',
        }
    }
})