import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../constants/utils/styles';
import FocusedStatusBar from '../FocusStatusBar';
import {RectButton} from 'react-native-gesture-handler';
import {COLORS} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Footer from '../Footer';

const LoginPassword = () => {
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar />

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerWrapper}>
            <Text style={styles.mediumTxt}>Sm:)e login</Text>

            <KeyboardAvoidingView
              style={{flex: 1}}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
              contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.inputCont}>
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

                <Text style={[styles.smallTxt, {color: COLORS.light.primary}]}>
                  Please enter you login details to have access to your account
                  :)
                </Text>

                <View style={[styles.inputWrapper, {flexDirection: 'column'}]}>
                  <TextInput
                    style={[styles.input, {marginBottom: 10}]}
                    placeholder="Phone no./email/smiletag"
                    placeholderTextColor={COLORS.light.primary}
                    inputMode="text"
                  />

                  <View style={styles.passwordCon}>
                    <TextInput
                      style={[styles.input, {marginBottom: 20}]}
                      label="Password"
                      placeholder="Password"
                      placeholderTextColor={COLORS.light.primary}
                      inputMode="text"
                      secureTextEntry={isVisible ? false : true}
                    />
                    <Icon
                      name={isVisible ? 'visibility-off' : 'visibility'}
                      size={22}
                      color={COLORS.light.gray}
                      style={styles.passwordIcon}
                      onPress={handleVisibility}
                    />
                  </View>
                </View>

                <Text
                  onPress={() => navigation.navigate('ForgotPassword')}
                  style={[styles.link, {textAlign: 'left', marginBottom: 30}]}>
                  Forgot password?
                </Text>

                <RectButton
                  style={styles.button}
                  onPress={() => navigation.navigate('LoginSecretPin')}>
                  <Text style={styles.buttonTxt}>Login</Text>
                </RectButton>

                <Text style={[styles.smallTxt, {marginTop: 100}]}>
                  Don’t have an account?{' '}
                  <Text
                    onPress={() => navigation.navigate('Signup')}
                    style={styles.link}>
                    Signup here
                  </Text>
                </Text>
              </View>
            </KeyboardAvoidingView>

            <Footer />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LoginPassword;
