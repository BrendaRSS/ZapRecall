import GlobalStyle from "./GlobalStyle"
import styled from "styled-components"
import LogoContainerZap from "./LogoContainer"
import PerguntasRenderizadas from "./PerguntasRenderizadas"
import FooterConcluido from "./FooterConcluido";
import perguntasInfos from "./perguntas";
import { useState } from "react"

export default function App() {
    const [perguntas, setPerguntas]=useState(perguntasInfos)
    const [desabilitado, setDesabilitado]=useState(false)

    return (
        <ScreenContainer>
            <GlobalStyle/>
            <LogoContainerZap/>
            <PerguntasRenderizadas 
                perguntas={perguntas} 
                setPerguntas={setPerguntas}
                desabilitado={desabilitado}
                setDesabilitado={setDesabilitado}/>
                <FooterConcluido/>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`