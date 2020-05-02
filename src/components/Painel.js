import React from 'react';
import { View } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

export default function Painel(props) {
    return (
      <View>
        <Entrada 
        num1={props.num1} 
        num2={props.num2} 
        atualizaValor={props.atualizaValor}
        />
        <Operacao 
        operacao={props.operacao} 
        atualizaOperacao={props.atualizaOperacao}
        />
        <Comando acao={props.calcular} />
      </View>
    );
  }

