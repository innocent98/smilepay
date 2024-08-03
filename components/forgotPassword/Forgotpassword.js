import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {styles} from '../../constants/utils/styles';
import FocusedStatusBar from '../FocusStatusBar';
import {RectButton, TextInput} from 'react-native-gesture-handler';
import {COLORS} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import Footer from '../Footer';

const Forgotpassword = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar />

      <ScrollView>
        <View style={[styles.container, {}]}>
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

                <Text style={styles.smallTxt}>
                  Sorry this happened to you but we’re here to help :)
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="Enter email address"
                  placeholderTextColor={COLORS.light.gray}
                  inputMode="email"
                />

                <RectButton
                  style={styles.button}
                  onPress={() => navigation.navigate('VerifyPassword')}>
                  <Text style={styles.buttonTxt}>Reset password</Text>
                </RectButton>
              </View>
            </KeyboardAvoidingView>

            <Footer />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Forgotpassword;
