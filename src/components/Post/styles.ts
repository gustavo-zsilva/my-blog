import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    background: '$bg',

    boxShadow: '0 10px 6px 3px rgba(0, 0, 0, 0.1)',
    borderRadius: '.8rem',
    border: '1px solid #F2F2F2',

    overflow: 'hidden',

    '> div': {
        display: 'flex',
        flexDirection: 'column',

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
            },
        },
    }
})