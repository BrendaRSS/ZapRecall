import GlobalStyle from "./GlobalStyle"
import logo from "./img/logo.png"
import styled from "styled-components"

let perguntas = [
    { numero: "1", pergunta: "", resposta: "", status: "" },
    { numero: "2", pergunta: "", resposta: "", status: "" },
    { numero: "3", pergunta: "", resposta: "", status: "" },
    { numero: "4", pergunta: "", resposta: "", status: "" },
    { numero: "5", pergunta: "", resposta: "", status: "" },
    { numero: "6", pergunta: "", resposta: "", status: "" },
    { numero: "7", pergunta: "", resposta: "", status: "" },
    { numero: "8", pergunta: "", resposta: "", status: "" }
]

export default function App() {

    function mostrarPergunta() {
        prompt("Clicou")
    }

    return (
        <ScreenContainer>
            <GlobalStyle/>
            <LogoContainer>
                <img src={logo}></img>
                <h1>ZapRecall</h1>
            </LogoContainer>
            {perguntas.map((p, index) =>
                <div key={index} className="pergunta-fechada">
                    <p>Pergunta {p.numero} </p><ion-icon onClick={mostrarPergunta} name="play-outline"></ion-icon>
                </div>)}
            <FooterConcluidos>
                <ContainerBotoes>
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </ContainerBotoes>
                <h3>
                    0/4 conluídos
                </h3>
            </FooterConcluidos>
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
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  img {
  width: 52px;
  }

  h1 {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
  }
`
const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`
const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;

  button{
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: blue;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;
  }
`