import React from 'react';
import { Button } from 'react-native';

// import { Container } from './styles';

export default function Comando(props) {
  return (
    <Button title='Calcular' onPress={props.acao} />
  );
}