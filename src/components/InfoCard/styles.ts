import { styled } from "../../styles/stitches.config";

export const Container = styled('section', {
    display: 'flex',
    alignItems: 'center',
    gridGap: '1rem',

    background: '$dark',
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