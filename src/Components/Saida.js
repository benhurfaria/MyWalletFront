/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import styled from 'styled-components';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ContextLogin } from './Context';

export default function Saida() {
  const { loggedUser } = useContext(ContextLogin);
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const history = useHistory();

  function salvarSaida() {
    const config = { headers: { Authorization: `Bearer ${loggedUser.token}` } };
    const body1 = {
      operacao: 'saida',
      valor,
      descricao,
    };
    const body = {
      ...body1,
      valor: body1.valor.replace(',', '.'),
    };
    if (!isNaN(body.valor)) {
      const promise = axios.post('http://localhost:4000/infos', body, config);
      promise.then((resp) => {
        history.push('/timeline');
      });
    } else {
      alert('Valor inválido');
    }
  }
  return (
    <Principal>
      <Header>
        <Nome>Nova Saida</Nome>
      </Header>
      <Input
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <Input
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <Botao onClick={salvarSaida}>Salvar entrada</Botao>
    </Principal>
  );
}

const Botao = styled.button`
  background-color: #a328d6;
  width: 100%;
  height: 48px;
  margin-bottom: 35px;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  margin-top: 10px;
  color: #ffffff;
  font-weight: bold;
  :focus {
    outline: transparent;
  }
`;
const Nome = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
`;
const Input = styled.input`
  background: #ffffff;
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
  :focus {
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
  color: #ffffff;
  justify-content: space-between;
  width: 100%;
  height: 75px;
  align-items: center;
`;
