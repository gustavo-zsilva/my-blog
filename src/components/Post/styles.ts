import { styled, darkTheme } from '../../styles/stitches.config'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    background: '$bg',

    boxShadow: '0 10px 6px 3px rgba(0, 0, 0, 0.1)',
    borderRadius: '.8rem',

    overflow: 'hidden',
    cursor: 'pointer',

    [`.${darkTheme} &`]: {
        color: '#B4B4B4',
    },

    '> div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,

        padding: '1.6rem 1.8rem',
        gridGap: '2.6rem',

        'strong': {
            fontSize: '1.3rem',
            fontWeight: '$semiBold',
        },
        'div': {
            display: 'flex',
            gridGap: '.6rem',

            'span': {
                fontSize: '.875rem',
                color: '#333',
                [`.${darkTheme} &`]: {
                    color: '#B4B4B4',
                }
            },
        },
    }
})