import { MdExitToApp } from 'react-icons/md';
import { CgAdd, CgRemove } from 'react-icons/cg';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ContextLogin } from './Context';
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import dayjs from 'dayjs';
export default function Timeline(){
    const {loggedUser} = useContext(ContextLogin);
    const [lancamento, setLancamento] = useState([]);
    const [total, setTotal] = useState(0);
    const history = useHistory();
    const config = {
        headers:{
            Authorization: `Bearer ${loggedUser.token}`
        }
    }
    useEffect(()=>{
        
        const promise = axios.get("http://localhost:4000/infos", config);
        promise.then(resp=>{
            setLancamento(resp.data.dados);
            setTotal(resp.data.soma);
        })
    },[]);
    function entrada(){
        history.push("/entrada");
    }
    function saida(){
        history.push("/saida");
    }
    function logout(){
        const promessa = axios.delete("http://localhost:4000/signout", config);
        promessa.then(resp=>{
            history.push("/");
        }).catch(err=>{
            alert("servidor fora de área");
        })
        
    }
    return (
        <Principal>
            <Header>
                <Nome>Olá, {loggedUser.nome}</Nome>
                <MdExitToApp onClick={logout}/>
            </Header>
            <Wallet>
                {lancamento.length === 0 ? 
                <Texto>Não há registros de entrada ou saída</Texto>: 
                lancamento.map(item=> 
                    <Registros key={item.id}>
                        <Data>{dayjs(item.dataoperacao).format('DD/MM')}</Data>
                        <Descricao>{item.descricao}</Descricao>
                        <Valor color={item.operacao === "entrada" ? '#03AC00':'#C70000'}>{item.valor}</Valor>
                    </Registros>
                    
                )
                }
                <Total color={total >= 0 ? '#03AC00' : '#C70000'}>
                    SALDO
                    <span>{total}</span>
                </Total>
            </Wallet>
            <Footer>
                <Botao onClick = {entrada}>
                    <InsideButton>
                        <CgAdd/>
                        Nova entrada
                    </InsideButton>
                </Botao>
                <Botao onClick={saida}> 
                    <InsideButton>
                        <CgRemove/>
                        Nova saída
                    </InsideButton>
                </Botao>
            </Footer>
        </Principal>
    );
}
const Total = styled.div`
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 17px;
    height: 30px;
    color: #000000;
    border-radius: 0 5px;
    padding: 5px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    span{
        text-align: right;
        color: ${props => props.color};
    }
`;
const Descricao = styled.p`
  color: #000000;
  flex-grow: 1;
  text-overflow: ellipsis;
  word-wrap: none;
  margin-left: 8px;
  word-break: break-word;
  margin-right: 5px;
`;
const Valor = styled.p`
    color: ${props => props.color};
    flex-shrink: 0;
`
const Data = styled.p`
    color: #C6C6C6;
    flex-shrink: 0;
`;
const Registros = styled.div`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    justify-content: space-between;
    display: flex;
    flex-shrink: 0;
    margin: 10px;
`
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
    position: relative;
`
const Principal = styled.div`
    width: 100%;
    height: 100%;
    padding: 3px 30px;
    position: relative;
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