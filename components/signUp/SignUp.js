import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useReducer} from 'react';
import {styles} from '../../constants/utils/styles';
import FocusedStatusBar from '../FocusStatusBar';
import {RectButton, TextInput} from 'react-native-gesture-handler';
import {COLORS} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import Footer from '../Footer';
import {FORM_INITIAL_STATE, formReducer} from '../../redux/formReducer';
import {
  PROCESS_INITIAL_STATE,
  processReducer,
} from '../../redux/processReducer';
import {FORM_ACTION_TYPES, PROCESS_ACTION_TYPES} from '../../redux/actionTypes';
import EmptyInputText from '../EmptyInputText';

const SignUp = () => {
  const navigation = useNavigation();
  const [formState, formDispatch] = useReducer(formReducer, FORM_INITIAL_STATE);
  const [processState, processDispatch] = useReducer(
    processReducer,
    PROCESS_INITIAL_STATE,
  );

  const handleChange = (name, value) => {
    formDispatch({
      type: FORM_ACTION_TYPES.CHANGE_INPUT,
      payload: {
        name: name,
        value: value,
      },
    });
  };

  const handleSignUp = async () => {
    if (formState.phone_no === '') {
      processDispatch({
        type: PROCESS_ACTION_TYPES.FETCH_ERROR,
        payload: 'Please fill in all input fields to continue',
      });
    } else {
      navigation.navigate('ConfirmNo', {inputs: formState});
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar />

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerWrapper}>
            <KeyboardAvoidingView
              style={{flex: 1}}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
              contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.inputCont}>
                <Text style={styles.mediumTxt}>Sm:)e signup</Text>

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
                  Please provide your phone no. below :)
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="Enter you phone no."
                  placeholderTextColor={COLORS.light.gray}
                  inputMode="tel"
                  onChangeText={value => handleChange('phone_no', value)}
                />

                <RectButton style={styles.button} onPress={handleSignUp}>
                  <Text style={styles.buttonTxt}>Sign up</Text>
                </RectButton>
                <EmptyInputText text={processState?.errorText} />

                <Text style={[styles.smallTxt, {marginTop: 200}]}>
                  Already have an account?{' '}
                  <Text
                    onPress={() => navigation.navigate('Login')}
                    style={styles.link}>
                    Login here
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

export default SignUp;
