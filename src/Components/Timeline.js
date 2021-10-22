import { MdExitToApp } from 'react-icons/md';
import { CgAdd, CgRemove } from 'react-icons/cg';
import styled from 'styled-components';
export default function Timeline(){
    return (
        <Principal>
            <Header>
                <Nome>Olá, fulano</Nome>
                <MdExitToApp/>
            </Header>
            <Wallet> 
                <Texto>Não há registros de entrada ou saída</Texto>
            </Wallet>
            <Footer>
                <Botao>
                    <InsideButton>
                        <CgAdd/>
                        Nova entrada
                    </InsideButton>
                </Botao>
                <Botao>
                <InsideButton>
                        <CgRemove/>
                        Nova saída
                    </InsideButton>
                </Botao>
            </Footer>
        </Principal>
    );
}
const Texto = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: normal;
    font-size: 20px;
    text-align: center;
    color: #868686;
    width: 190px;
    margin: auto 0;
`;
const Footer = styled.div`
    width: calc(100% - 50px);
    display: flex;
    justify-content: space-between;
    height: 130px;
    position: fixed;
    bottom: 0;
    padding: 15px 0;
    padding-right: 10px;
`
const InsideButton = styled.div`
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    text-align: left;
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    padding-left: 10px;
    svg{
        font-size: 20px;
    }
`
const Botao = styled.button`
    background-color: #A328D6;
    width: 45%;
    height: 90px;
    margin-bottom:35px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    margin-top: 10px;
    color: #FFFFFF;
    :focus{
        outline: transparent;
    }
`
const Wallet = styled.div`
    width: 100%;
    height: 70vh;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Principal = styled.div`
    width: 100%;
    height: 100%;
    padding: 3px 30px;
`;
const Header = styled.div`
    display: flex;
    color: #FFFFFF;
    justify-content: space-between;
    width: 100%;
    height: 75px;
    align-items: center;
    svg{
        
        font-size: 25px;
    }
`;

const Nome = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
`