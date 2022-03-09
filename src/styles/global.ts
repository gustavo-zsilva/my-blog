import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    'body': {
        height: '100vh',
        fontFamily: 'Source Sans Pro, sans-serif',
        background: '$bg',
    },
    'button': {
        border: 0,
        fontFamily: 'inherit',
        cursor: 'pointer',
        transition: '.2s',
    }
})