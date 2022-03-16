import { createStitches } from "@stitches/react";
import type * as Stitches from '@stitches/react';

export const {
    styled,
    globalCss,
    keyframes,
    createTheme,
    theme,
    getCssText,
} = createStitches({
    theme: {
        colors: {
            bg: '#FFF',
            dark: '#111',
            light: '#F2F2F2',
            primary: '#F72585',
            primaryDark: '#B5179E',
            secondary: '#3F37C9',
            secondaryDark: '#480CA8',
        },
        fontWeights: {
            thin: '300',
            regular: '400',
            semiBold: '600',
            bold: '700',
        },
        radii: {
            full: '999px',
            round: '50%',
        },
        space: {
            1: '1rem',
            2: '2rem',
            3: '3rem',
            max: '80rem',
        },
        shadows: {
            post: '0 10px 6px 3px rgba(0, 0, 0, 0.1)',
        },
    },
    utils: {
        mx: (value: Stitches.ScaleValue<'space'>) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: Stitches.ScaleValue<'space'>) => ({
            marginTop: value,
            marginBottom: value,
        }),
        px: (value: Stitches.ScaleValue<'space'>) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: Stitches.ScaleValue<'space'>) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
    },
})

export const darkTheme = createTheme('dark-theme', {
    colors: {
        bg: '#111',
        dark: '#FFF',
        light: '#080808',
    }
})