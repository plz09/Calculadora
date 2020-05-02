import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function Numero(props) {
  return (
    <TextInput style={styles.numero}
     value={props.num}
     onChangeText={valorDocampo => props.atualizaValor(props.nome, valorDocampo)} 
     />
  );
}

const styles = StyleSheet.create({
  numero: {
    width: 140,
    height: 80,
    fontSize: 20
  }
});
