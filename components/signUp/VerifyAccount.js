import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../constants/utils/styles';
import FocusedStatusBar from '../FocusStatusBar';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const VerifyAccount = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar />

      <ScrollView>
        <View style={[styles.container]}>
          <View style={[styles.containerWrapper, {marginTop: 20}]}>
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

            <Text style={styles.bigTxt}>
              A verification link has been sent to your provided email, please
              use this link to verify your account
            </Text>

            <RectButton
              style={styles.button}
              onPress={() => navigation.navigate('Welcome')}>
              <Text style={styles.buttonTxt}>Skip to homepage</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyAccount;
