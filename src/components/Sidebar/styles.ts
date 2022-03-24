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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    color: '$dark',

    border: '3px solid #919191',
    width: '52px',
    height: '52px',

    borderRadius: '$round',

    'strong': {
        fontSize: '1.2rem',
        lineHeight: '.5',
    },

    'span': {
        color: '#919191',
    }
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