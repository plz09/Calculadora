import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function Cabecalho() {
  return (
    <View style={styles.topo}>
      <Text style={styles.txtTitulo}>Calculadora 1.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#2196F3',
    padding: 10,
    paddingTop: 35,
    alignItems: 'center',
  },
  txtTitulo: {
    fontSize: 25,
    color: '#fff'
  }
});
