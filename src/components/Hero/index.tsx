import { InfoCard } from '../InfoCard'

import { AiOutlineCheckCircle } from 'react-icons/ai'
import { Container } from './styles'

export function Hero() {
    return (
        <Container>
            <h1>Bem-vindo(a) ao meu blog de programação! <span className="wave">👋</span></h1>

            <div>
                <InfoCard title="Mecânica de XP">
                    Ganhe XP e suba de nível para cada post que você lê
                </InfoCard>
                <InfoCard title="Player de música">
                    Escute músicas que aprimoram o seu foco durante a leitura direto
                    daqui
                </InfoCard>
                <strong>
                    Seu progresso é salvo automaticamente
                    <AiOutlineCheckCircle color="#41ff6a" size={28} />
                </strong>
            </div>
        </Container>
    )
}