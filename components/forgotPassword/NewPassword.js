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
const NewPassword = () => {
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar />

      <View style={[styles.container, {}]}>
        <ScrollView>
          <View style={styles.containerWrapper}>
            <KeyboardAvoidingView
              style={{flex: 1}}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
              contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.inputCont}>
                <Text style={styles.mediumTxt}>Sm:)e reset</Text>
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

                <Text style={[styles.smallTxt, {}]}>
                  Enter a new password and confirm it to complete reset :)
                </Text>

                <View style={[styles.inputWrapper, {flexDirection: 'column'}]}>
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

                  <View style={styles.passwordCon}>
                    <TextInput
                      style={[styles.input, {marginBottom: 20}]}
                      label="Password"
                      placeholder="Confirm password"
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

                <RectButton
                  style={styles.button}
                  onPress={() => navigation.navigate('ResetSuccessful')}>
                  <Text style={styles.buttonTxt}>Reset password</Text>
                </RectButton>
              </View>
            </KeyboardAvoidingView>

            <Footer />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NewPassword;
