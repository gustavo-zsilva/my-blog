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
            blue: '#1E90FF',
            code: '#0001',
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
            4: '4rem',
            5: '5rem',
            max: '80rem',
        },
        shadows: {
            post: '0 10px 6px 3px rgba(0, 0, 0, 0.1)',
        },
    },
    media: {
        mobile: '(max-width: 680px)',
        tablet: '(max-width: 1330px)',
        desktop: '(max-width: 1600px)',
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
        code: '#FFFFFF12',
    }
})