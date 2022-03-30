import { styled } from "../../styles/stitches.config";

export const Container = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    width: '100%',
    maxWidth: '80rem',
    margin: 'auto',
    py: '$1',

    'button': {
        background: 'none',
        
        'h2': {
            color: '$dark',
    
            'span': {
                fontFamily: 'Inconsolata, monospace',
            },
        },
    },

    '.header-controls': {
        display: 'flex',
        alignItems: 'center',
        gridGap: '.6rem',
    },
})

export const ThemeSwitch = styled('button', {
    width: '30px',
    height: '30px',
    background: '$light',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: '$round',
})

export const LevelTracker = styled('div', {
    width: '36px',
    height: '36px',
    marginRight: '.8rem',
})