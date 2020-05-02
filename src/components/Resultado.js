import React from 'react';
import { View, Text } from 'react-native';

import Visor from './Visor'

export default function Resultado(props) {
  return (
    <Visor resultado ={props.resultado}/>
  );
}