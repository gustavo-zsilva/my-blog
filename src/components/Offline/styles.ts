import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridGap: '$1',

    color: '$dark',
    py: '$3',
})