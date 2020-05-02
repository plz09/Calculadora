import React from 'react';
import { Picker, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default class Operacao extends React.Component {
  render() {
    return (
      <Picker style={styles.operacao}
        selectedValue={this.props.operacao}
        onValueChange={option => { this.props.atualizaOperacao(option) }}
      >
        <Picker.Item label='Soma' value='soma' />
        <Picker.Item label='Subtração' value='subtracao' />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  operacao: {
    marginTop: 15,
    marginBottom: 15
  }
})