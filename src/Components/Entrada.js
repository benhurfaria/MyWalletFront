import styled from "styled-components";

export default function Entrada(){
    return (
        <Principal>
            <Header>
                <Nome>Nova Entrada</Nome>
            </Header>
            <Input placeholder="Valor" />
            <Input placeholder="Descrição"/>
            <Botao>Salvar entrada</Botao>
        </Principal>
    );
}

const Botao = styled.button`
    background-color: #A328D6;
    width: 100%;
    height: 48px;
    margin-bottom:35px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    margin-top: 10px;
    color: #FFFFFF;
    font-weight: bold;
    :focus{
        outline: transparent;
    }
`
const Nome = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
`
const Input = styled.input`
    background: #FFFFFF;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
    border: none;
    padding-left: 15px;
    :focus{
        outline: transparent;
    }
`;
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
`;