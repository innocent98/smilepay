import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../constants/utils/styles';

const EmptyInputText = ({text}) => {
  return <Text style={styles.inputError}>{text}</Text>;
};

export default EmptyInputText;
