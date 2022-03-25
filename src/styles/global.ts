import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    'body, html': {
        fontFamily: 'Source Sans Pro, Helvetica, Arial, sans-serif',
    },
    'html::-webkit-scrollbar': {
        width: '.5vw',
        padding: '.2rem'
    },
    'html::-webkit-scrollbar-thumb': {
        backgroundColor: '#3335',
        borderRadius: '$full',

        '&:hover': {
            backgroundColor: '#333',
        }
    },
    'html::-webkit-scrollbar-track': {
        backgroundColor: '#111',
    },
    'button': {
        border: 0,
        fontFamily: 'inherit',
        cursor: 'pointer',
        transition: '.2s',
        
        '&:focus': {
            outline: '2px solid $primary',
        }
    },
    'a': {
        color: '$dark',
    }
})