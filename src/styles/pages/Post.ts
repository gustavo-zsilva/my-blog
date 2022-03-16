import { styled } from "../stitches.config";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    
    background: '$bg',

    overflowX: 'hidden',
})

export const Banner = styled('section', {
    width: '100%',
    height: '565px',

    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
})

export const Article = styled('article', {
    maxWidth: '50rem',
    margin: 'auto',
    marginBottom: '$3',
    lineHeight: '1.8',
    fontSize: '1.25rem',
    
    color: '$dark',

    '.post-header': {
        display: 'flex',
        gridGap: '.8rem',
        fontSize: '1.05rem',
        fontStyle: 'italic',
        my: '$1',
    },

    '.Tip': {
        background: 'green'
    },

    'h1': {
        textAlign: 'center',
        fontSize: '2.2rem',
        my: '$2',
    },

    'code': {
        wordBreak: 'break-all'
    }
})