import { styled } from '../../styles/stitches.config'

export const Container = styled('footer', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gridGap: '$1',

    color: '$dark',

    background: '$light',
    padding: '$3',

    '.social': {
        display: 'flex',
        gridGap: '$2',
    },
})