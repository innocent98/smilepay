import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/core';
import { COLORS } from '../constants';

const FocusedStatusBar = props => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar
      barStyle="light-content"
      translucent={false}
      backgroundColor={COLORS.light.primary}
      animated={true}
      {...props}
    />
  ) : null;
};

export default FocusedStatusBar;
