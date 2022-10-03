import { useState } from "react";
import styled from "styled-components";

export default function PerguntasRenderizadas({ perguntas, setPerguntas, perguntasRespondidas, setPerguntasRespondidas}) {
  
  function mostrarPergunta(p) {
    const novoArrayPerguntas = [...perguntas]
    novoArrayPerguntas[p.numero - 1].status = "aberta"
    setPerguntas(novoArrayPerguntas)
  }

  return (
    <>
      {perguntas.map((p, index) => (
        p.status === "fechada" ?
          <PerguntaFechada key={index} corTexto={p.fonte} tracejado={p.tracejado} corIcone={p.corIcone} onClick={(() => mostrarPergunta(p))}>
            <p>Pergunta {p.numero} </p><ion-icon name={p.icone}></ion-icon>
          </PerguntaFechada>
          :
          <ImprimePerguntaAbertaOuResposta 
            index={index}
            pergunta={p} 
            perguntas={perguntas} 
            setPerguntas={setPerguntas} 
            perguntasRespondidas={perguntasRespondidas} 
            setPerguntasRespondidas={setPerguntasRespondidas}/>)
      )}
    </>
  )
}

function ImprimePerguntaAbertaOuResposta({index, pergunta, setPerguntas, perguntas, key, perguntasRespondidas, setPerguntasRespondidas}) {
  return (
    <>
      {pergunta.status === "aberta" ? <PerguntaAberta key={index} onClick={(() => mostrarResposta(pergunta, setPerguntas, perguntas))}>
        <p>{pergunta.pergunta}</p><ion-icon name="refresh-outline"></ion-icon>
      </PerguntaAberta>
        :
        <Resposta key={index}>{
          pergunta.resposta}
          <ContainerBotoes>
            <ButtonNaoLembrei onClick={()=>naoLembrei(pergunta, perguntas, setPerguntas, perguntasRespondidas, setPerguntasRespondidas)}>Não lembrei</ButtonNaoLembrei>
            <QuaseLembrei onClick={()=>quaseLembrei(pergunta, perguntas, setPerguntas, perguntasRespondidas, setPerguntasRespondidas)}>Quase não lembrei</QuaseLembrei>
            <Zap onClick={()=>lembrei(pergunta, perguntas, setPerguntas, perguntasRespondidas, setPerguntasRespondidas)}>Zap!</Zap>
          </ContainerBotoes>
        </Resposta>}
    </>
  )
}

function mostrarResposta(pergunta, setPerguntas, perguntas) {
  const novoArrayPerguntas = [...perguntas]
  novoArrayPerguntas[pergunta.numero - 1].status = "respondida"
  setPerguntas(novoArrayPerguntas)
}

function naoLembrei(pergunta, perguntas, setPerguntas, perguntasRespondidas, setPerguntasRespondidas){
  const novoArrayPerguntas = [...perguntas]
  novoArrayPerguntas[pergunta.numero - 1].status = "fechada"
  novoArrayPerguntas[pergunta.numero - 1].fonte = "#FF3030"
  novoArrayPerguntas[pergunta.numero - 1].icone = "close-circle"
  novoArrayPerguntas[pergunta.numero - 1].corIcone = "#FF3030"
  novoArrayPerguntas[pergunta.numero - 1].tracejado = true
  setPerguntas(novoArrayPerguntas)
  if(perguntasRespondidas!==perguntas.length){
    let contador= perguntasRespondidas+1
    setPerguntasRespondidas(contador)
  }
}

function quaseLembrei(pergunta, perguntas, setPerguntas,perguntasRespondidas, setPerguntasRespondidas){
  const novoArrayPerguntas = [...perguntas]
  novoArrayPerguntas[pergunta.numero - 1].status = "fechada"
  novoArrayPerguntas[pergunta.numero - 1].fonte = "#FF922E"
  novoArrayPerguntas[pergunta.numero - 1].icone = "help-circle"
  novoArrayPerguntas[pergunta.numero - 1].corIcone = "#FF922E"
  novoArrayPerguntas[pergunta.numero - 1].tracejado = true
  setPerguntas(novoArrayPerguntas)
  if(perguntasRespondidas!==perguntas.length){
    let contador= perguntasRespondidas+1
    setPerguntasRespondidas(contador)
  }
}

function lembrei(pergunta, perguntas, setPerguntas, perguntasRespondidas, setPerguntasRespondidas){
  const novoArrayPerguntas = [...perguntas]
  novoArrayPerguntas[pergunta.numero - 1].status = "fechada"
  novoArrayPerguntas[pergunta.numero - 1].fonte = "#2FBE34"
  novoArrayPerguntas[pergunta.numero - 1].icone = "checkmark-circle"
  novoArrayPerguntas[pergunta.numero - 1].corIcone = "#2FBE34"
  novoArrayPerguntas[pergunta.numero - 1].tracejado = true
  setPerguntas(novoArrayPerguntas)
  if(perguntasRespondidas!==perguntas.length){
    let contador= perguntasRespondidas+1
    setPerguntasRespondidas(contador)
  }
}


const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props)=> props.corTexto};
    text-decoration: ${(props)=>(props.tracejado===true? "line-through":"none")}
  }

  ion-icon{
    font-size: 30px;
    cursor: pointer;
    color: ${(props)=>props.corIcone};
  }
`
const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img{
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  ion-icon{
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    left:85%;
    top: 70%
  }
`
const Resposta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`
const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
`
const ButtonNaoLembrei=styled.button`
  width: 90px;
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #FF3030;
  border-radius: 5px;
  border: 1px solid red;
  padding:5px;
`
const QuaseLembrei=styled.button`
  width: 90px;
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #FF922E;
  border-radius: 5px;
  border: 1px solid yellow;
  padding:5px;
`
const Zap=styled.button`
  width: 90px;
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #2FBE34;
  border-radius: 5px;
  border: 1px solid green;
  padding:5px;
`