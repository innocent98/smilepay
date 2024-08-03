import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, {useReducer, useRef, useState} from 'react';
import {styles} from '../../constants/utils/styles';
import {RectButton, TextInput} from 'react-native-gesture-handler';
import FocusedStatusBar from '../FocusStatusBar';
import {useNavigation} from '@react-navigation/native';
import Footer from '../Footer';
import {USER_INITIAL_STATE, userReducer} from '../../redux/userReducer';
import {USER_ACTION_TYPES} from '../../redux/actionTypes';
import {COLORS} from '../../constants';
import { useRoute } from '@react-navigation/native';

const LoginSecretPin = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { submitForm, userState } = route.params;

  // const [userState, userDispatch] = useReducer(userReducer, USER_INITIAL_STATE);
  console.log(userState);

  const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);
  const textInputRefs = useRef([]);

  const handleInputChange = (index, text) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = text;
    setInputValues(newInputValues);

    // Move focus to the next input
    if (text.length === 1 && index < inputValues.length - 1) {
      textInputRefs.current[index + 1].focus();
    }

    // Submit if the last input is filled
    if (text.length === 1 && index === inputValues.length - 1) {
      submitForm();
    }
  };

  // const submitForm = () => {
  //   userDispatch({type: USER_ACTION_TYPES.FETCH_START});
  //   setTimeout(() => {
  //     userDispatch({type: USER_ACTION_TYPES.FETCH_SUCCESS});
  //   }, 2000);
  //   // Perform your submission logic here
  // };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar />

      <ScrollView>
        <View style={[styles.container, {}]}>
          <View style={[styles.containerWrapper]}>
            <Text style={styles.mediumTxt}>Sm:)e login</Text>

            <KeyboardAvoidingView
              style={{flex: 1}}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
              contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.inputCont}>
                <View style={[styles.horizontalLine, {marginVertical: 20}]}>
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

                <View style={styles.logo}>
                  <Image
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
                  />
                </View>

                <Text style={styles.mediumTxt}>Welcome back James</Text>

                <Text style={styles.smallTxt}>
                  Please enter your secret pin to have access to your account :)
                </Text>

                <View style={styles.inputWrapper}>
                  {inputValues.map((value, index) => (
                    <TextInput
                      key={index}
                      ref={ref => (textInputRefs.current[index] = ref)}
                      style={[
                        styles.input,
                        {width: '15%', textAlign: 'center'},
                      ]}
                      inputMode="numeric"
                      maxLength={1}
                      value={value}
                      onChangeText={text => handleInputChange(index, text)}
                    />
                  ))}
                </View>

                <RectButton style={styles.button} onPress={submitForm}>
                  {userState?.loading ? (
                    <ActivityIndicator
                      size="small"
                      color={COLORS.light.background}
                    />
                  ) : (
                    <Text style={styles.buttonTxt}>Login</Text>
                  )}
                </RectButton>
                <Text style={[styles.smallTxt, {marginTop: 100}]}>
                  Don’t have an account?{' '}
                  <Text style={styles.link}>Signup here</Text>
                </Text>
              </View>
            </KeyboardAvoidingView>

            <Footer />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginSecretPin;
