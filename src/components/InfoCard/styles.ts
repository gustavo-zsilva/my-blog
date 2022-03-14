import { styled } from "../../styles/stitches.config";

export const Container = styled('section', {
    display: 'flex',
    alignItems: 'center',
    gridGap: '1rem',

    background: '#111',
    // color: '#F1F1F1',

    maxWidth: '20rem',
    borderRadius: '.2rem',
    padding: '1.2rem 1rem',
    
    'strong': {
        flex: 1,
    },
    'p': {
        flex: 2,
    },
    '> div': {
        height: '100%',
        width: '3px',
        background: '#FFF',
        borderRadius: '$full',
    },
})