import styled from "styled-components";
import Titulo from "./Titulo";
import {Link} from "react-router-dom";
export default function Signup(){
    return (
        <Principal>
            <Titulo/>
            <Input placeholder="Nome"/>
            <Input placeholder="E-mail"/>
            <Input placeholder="Senha"/>
            <Input placeholder="Confirme a senha"/>
            <Botao>Cadastrar</Botao>
            <Link to="/">
                <Texto>Já tem uma conta? Entre agora!</Texto>
            </Link>
            
        </Principal>
    );
}
const Principal = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
` 
const Texto = styled.p`
    text-align: center;
    margin-top:20px;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;
`
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
    :focus{
        outline: transparent;
    }
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