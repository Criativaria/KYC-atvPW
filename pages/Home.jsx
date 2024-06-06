import { NavLink } from "react-router-dom"
import styled from "styled-components"


export const Home = () => {

    return (
        <Wrapper>
            <Titulo>KYC</Titulo>

            <Textos>
                <p>💼💡 Quer manter sua empresa segura e dentro da lei? Conheça nosso site de KYC!</p>
                <p>🔍👤 A gente verifica a identidade dos seus clientes, agentes e consultores para garantir que são quem dizem ser e estão em conformidade com as leis de AML e CTF.</p>
                <p>💼🌐 Ideal para bancos, fintechs, seguradoras e até ONGs! 🚀</p>
                <p>🔐🔒 Não perca tempo, proteja seu negócio com nosso KYC rápido e eficiente. 💼✨</p>
                <p>Vem com a gente! 🌟</p>
            </Textos>

            <NavLink to={`/form`}>
                <button>
                    Continuar
                </button>
            </NavLink>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
`
const Titulo = styled.h1`
    color: #cfc015;
`
const Textos = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: aliceblue;
    width: 80%;
    text-align: center;
`
