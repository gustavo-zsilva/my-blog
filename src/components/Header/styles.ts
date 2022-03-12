import { styled } from "../../styles/stitches.config";

export const Container = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    width: '100%',
    maxWidth: '80rem',
    margin: 'auto',
    py: '$1',

    'h2': {
        cursor: 'pointer',

        'span': {
            fontFamily: 'Inconsolata, monospace',
        },
    },
})

export const ThemeSwitch = styled('button', {
    width: '30px',
    height: '30px',
    background: '#F2F2F2',

    borderRadius: '$round',
})