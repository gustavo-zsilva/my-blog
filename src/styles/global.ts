import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    'body, html': {
        minHeight: '100vh',
        fontFamily: 'Source Sans Pro, Helvetica, Arial, sans-serif',
        // background: '$dark',
        // color: '$dark',
    },
    'button': {
        border: 0,
        fontFamily: 'inherit',
        cursor: 'pointer',
        transition: '.2s',
    },
    'a': {
        color: '$dark',
    }
})