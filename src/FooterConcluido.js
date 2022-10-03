import styled from "styled-components";

export default function FooterConcluido({perguntasRespondidas}) {
    return (
        <FooterConcluidos>
            <h3>
                {perguntasRespondidas}/8 conluídos
            </h3>
        </FooterConcluidos>
    )
}

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