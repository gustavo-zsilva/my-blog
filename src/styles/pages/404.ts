import { styled } from "../stitches.config"

export const Container = styled('div', {
    margin: 'auto',
    maxWidth: '40rem',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    my: '$3',

    'h1': {
        marginBottom: '$4',
        textAlign: 'center',
    }
})

export const ReturnButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gridGap: '.6rem',
    
    background: '$light',
    color: '$dark',
    fontSize: '1.125rem',

    padding: '.6rem 1rem',
    borderRadius: '.6rem',
    marginTop: '2rem',

    '&:hover': {
        filter: 'brightness(.9)',
    }
})