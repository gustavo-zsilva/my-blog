import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gridGap: '.5rem',

    backgroundImage: 'url(https://images.unsplash.com/photo-1630713815150-2c847025c1d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '$dark',

    padding: '.6rem 1.4rem',
    borderRadius: '$full',

    

    'p': {
        fontWeight: '$semiBold',
    },
})