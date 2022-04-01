import { styled } from '../../styles/stitches.config'

export const Container = styled('button', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    padding: '2.2rem 1.8rem',
    borderRadius: '.8rem',
    boxShadow: '$post',

    color: '#FFF',
    textAlign: 'start',

    gridColumn: '1 / 3',

    backgroundImage: 'url(https://images.unsplash.com/photo-1647311955462-d4e8a725e5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    
    '&:after': {
        content: '',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.18)',
    },

    '.post-header': {
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,

        '> div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            marginBottom: '$1',

            'div': {
                alignItems: 'center',

                'span': {
                    fontSize: '1rem',
                },
    
                'picture': {
                    display: 'flex',
                    alignItems: 'center',
    
                    overflow: 'hidden',
                    borderRadius: '$round',
    
                    border: '3px solid $primary',
                    padding: '.1rem',
                    
                    'img': {
                        borderRadius: '$round',
                    },
                },
            },
        },

        'strong': {
            fontSize: '2.2rem',
        },
    },


    'div': {
        display: 'flex',
        gridGap: '.6rem',
        zIndex: 1,

        '> span': {
            fontSize: '.875rem',
        },
    },
})

export const LatestBadge = styled('span', {
    display: 'flex',
    alignItems: 'center',
    gridGap: '.4rem',

    background: '$primary',
    padding: '.4rem .8rem',
    borderRadius: '$full',
})