import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from '../../constants/utils/styles';
import {RectButton, TextInput} from 'react-native-gesture-handler';
import {SIZES} from '../../constants';
import FocusedStatusBar from '../FocusStatusBar';
import {useNavigation} from '@react-navigation/native';
import Footer from '../Footer';

const ConfirmNo = ({route}) => {
  const navigation = useNavigation();
  const {inputs} = route?.params;

  const [inputValues, setInputValues] = useState(['', '', '', '']);
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

  const submitForm = () => {
    navigation.navigate('LittleIntro', {inputs});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar />

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerWrapper}>
            <KeyboardAvoidingView
              style={{flex: 1}}
              behavior={Platform.OS === 'ios' ? 'padding' : null}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
              contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.inputCont}>
                <Text style={styles.mediumTxt}>Sm:)e verification</Text>

                <View style={styles.horizontalLine}>
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

                <Text style={styles.smallTxt}>
                  Enter the OTP sent to your phone no. :)
                </Text>

                <View style={styles.inputWrapper}>
                  {inputValues.map((value, index) => (
                    <TextInput
                      key={index}
                      ref={ref => (textInputRefs.current[index] = ref)}
                      style={[
                        styles.input,
                        {width: '22%', textAlign: 'center'},
                      ]}
                      inputMode="numeric"
                      maxLength={1}
                      value={value}
                      onChangeText={text => handleInputChange(index, text)}
                    />
                  ))}
                </View>

                <RectButton
                  style={styles.button}
                  onPress={() => navigation.navigate('LittleIntro', {inputs})}>
                  <Text style={styles.buttonTxt}>Sign up</Text>
                </RectButton>

                <Text style={[styles.link, {marginTop: SIZES.xxxl}]}>
                  00:59
                </Text>

                <Text style={[styles.smallTxt, {marginTop: 200}]}>
                  Didn’t get an OTP?{' '}
                  <Text
                    // onPress={() => navigation.navigate('Login')}
                    style={styles.link}>
                    Resend
                  </Text>
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

export default ConfirmNo;
