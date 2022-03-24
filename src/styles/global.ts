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