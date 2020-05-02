import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function Visor(props) {
  return (
    <View>
      <TextInput style={styles.visor} 
      placeholder='Resultado'
      editable={false}
      value={props.resultado}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  visor: {
    height: 100,
    fontSize: 30
  }
});
