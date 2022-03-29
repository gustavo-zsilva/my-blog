import { styled } from '../../styles/stitches.config'

export const Container = styled('aside', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'fit-content',
    
    position: 'sticky',
    top: '60px',
    
    my: '$5',
    gridGap: '1.5rem',

    opacity: .7,
})

export const ExperienceCircle = styled('div', {
    width: '52px',
    height: '52px',
    fontStyle: 'italic',
})

export const Link = styled('a', {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '52px',
    height: '52px',

    borderRadius: '$full',

    '&:hover': {
        transition: '.2s',
        background: '$light',
    },
})