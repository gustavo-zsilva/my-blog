import { styled } from "../../styles/stitches.config";

export const Container = styled('div', {
    display: 'grid',
    gridTemplateRows: '72px 1fr auto',
    minHeight: '100vh',

    background: '$bg',
    color: '$dark',
})