import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '../constants/utils/styles';
import {COLORS} from '../constants';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.horizontalLine}>
        <Image
          source={require('../assets/dash.png')}
          style={{
            flex: 1,
            resizeMode: 'repeat',
            height: '100%',
            width: '100%',
          }}
        />
      </View>

      <Text style={[styles.smallTxt, {color: COLORS.light.primary}]}>
        Terms of use . Privacy policy
      </Text>
    </View>
  );
};

export default Footer;
