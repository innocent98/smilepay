import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../constants/utils/styles';
import FocusedStatusBar from '../FocusStatusBar';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants';

const ResetSuccessful = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar />

      <ScrollView>
        <View style={[styles.container]}>
          <View style={[styles.containerWrapper, {marginTop: 0}]}>
            <View style={[styles.horizontalLine, {marginBottom: 0}]}>
              <Image
                source={require('../../assets/dash.png')}
                style={{
                  flex: 1,
                  resizeMode: 'repeat',
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>

            <Text style={[styles.bigTxt, {color: COLORS.light.success}]}>
              Password reset successful
            </Text>

            <RectButton
              style={styles.button}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonTxt}>Back to login page</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetSuccessful;
