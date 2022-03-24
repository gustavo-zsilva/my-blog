import { FiWifiOff } from 'react-icons/fi'

import { Container } from "./styles";

export function Offline() {
    return (
        <Container>
            <FiWifiOff size={22} />
            <strong>Oops! You are currently offline.</strong>
        </Container>
    )
}