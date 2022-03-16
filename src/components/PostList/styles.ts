import { styled } from "../../styles/stitches.config";

export const Container = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '2.6rem',

    maxWidth: '80rem',
    margin: '3rem auto',
})