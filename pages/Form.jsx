/* eslint-disable no-unused-vars */
import { useEffect, useState, } from "react";
import Webcam from "react-webcam";
import styled from "styled-components"

export const Form = () => {
    const [localLatitude, setLocalLatitude] = useState(0);
    const [localLongitude, setLocalLongitude] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((result) => {
            setLocalLatitude(result.coords.latitude)
            setLocalLongitude(result.coords.longitude);
        });
    }, [])

    return (
        <Wrapper>
            <Textos>
                🔐✨ Por favor, envie seus dados abaixo para confirmar sua autenticidade e garantir a segurança do nosso serviço. 🚀🔍
            </Textos>
            <FormWrapper>
                <Localizacao>
                    <Textos>sua latitude: {localLatitude}</Textos>
                    <Textos>sua longitude: {localLongitude}</Textos>
                </Localizacao>
                <Webcam />
                <button>enviar</button>
            </FormWrapper>

        </Wrapper>

    )

}
const Localizacao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 50px;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`
const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.5rem;
    width: 80%;
    margin-top: 3rem;
`
const Textos = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: aliceblue;
    text-align: center;
`