import { styled } from '../stitches.config'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    'main': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '2.6rem',

        maxWidth: '80rem',
        margin: '2rem auto',
    },
})
