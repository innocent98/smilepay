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
import React, {useState, useEffect, useReducer} from 'react';
import {styles} from '../../constants/utils/styles';
import FocusedStatusBar from '../FocusStatusBar';
import {RectButton} from 'react-native-gesture-handler';
import {COLORS, SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Picker} from '@react-native-picker/picker';
import {TextInput} from 'react-native-paper';
import Footer from '../Footer';
import axios from 'axios';
import {formReducer} from '../../redux/formReducer';
import {FORM_ACTION_TYPES, PROCESS_ACTION_TYPES} from '../../redux/actionTypes';
import EmptyInputText from '../EmptyInputText';
import {
  PROCESS_INITIAL_STATE,
  processReducer,
} from '../../redux/processReducer';
import {userRequest} from '../../redux/requestMethod';

const OtherDetails = ({route}) => {
  const navigation = useNavigation();
  const {inputs} = route?.params;

  const [formState, formDispatch] = useReducer(formReducer, {...inputs});
  const [processState, processDispatch] = useReducer(
    processReducer,
    PROCESS_INITIAL_STATE,
  );

  const [isVisible, setIsVisible] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const [countries, setCountries] = useState([]);
  const [mode, setMode] = useState('');

  const handleChange = (name, value) => {
    formDispatch({
      type: FORM_ACTION_TYPES.CHANGE_INPUT,
      payload: {
        name: name,
        value: value,
      },
    });
  };

  const handleChangeFullName = value => {
    const [first_name, last_name] = value.split(' ');
    handleChange('first_name', first_name);
    handleChange('last_name', last_name);
  };

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // get access token for countries api
  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const res = await axios.get(
          'https://www.universal-tutorial.com/api/getaccesstoken',
          {
            headers: {
              Accept: 'application/json',
              'api-token':
                'Ku2uq0eMGByhMQmQdP5tKH3bbR4dD3ZNXjRqllWOT-srDfzC-wXRnd7Kcym_A_9MpP4',
              'user-email': 'tosinadebayo55@gmail.com',
            },
          },
        );
        setAuthToken(res.data);
      } catch (error) {
        // console.log(error);
      }
    };
    getAccessToken();
  }, []);

  // get list of countries
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await axios.get(
          'https://www.universal-tutorial.com/api/countries/',
          {
            headers: {
              Authorization: `Bearer ${authToken.auth_token}`,
              Accept: 'application/json',
            },
          },
        );
        setCountries(res.data);
      } catch (error) {
        // console.log(error?.response?.data);
      }
    };
    getCountries();
  }, [authToken]);

  const handleSignUp = async () => {
    if (
      formState.first_name === '' ||
      formState.last_name === '' ||
      // formState.country === '' ||
      formState.email === '' ||
      formState.password === ''
    ) {
      processDispatch({
        type: PROCESS_ACTION_TYPES.FETCH_ERROR,
        payload: 'Please fill in all input fields to continue',
      });
    } else {
      processDispatch({type: PROCESS_ACTION_TYPES.FETCH_START});

      try {
        const res = await userRequest.post('/api/v1/auth/register/user', {
          ...formState,
        });

        console.log(res.data);

        processDispatch({
          type: PROCESS_ACTION_TYPES.FETCH_SUCCESS,
          payload: res.data,
        });

        navigation.navigate('VerifyAccount', {inputs: formState});
      } catch (err) {
        // console.log(err?.response?.data);

        processDispatch({
          type: PROCESS_ACTION_TYPES.FETCH_ERROR,
          payload: 'all input fields required',
        });
      }
    }
  };

  console.log(processState);

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
                <Text style={styles.mediumTxt}>Sm:)epay</Text>
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
                  Just a few more details
                </Text>

                <View style={[styles.inputWrapper, {flexDirection: 'column'}]}>
                  <TextInput
                    style={[
                      styles.input,
                      {
                        marginBottom: 10,
                        padding: 0,
                        borderTopLeftRadius: SIZES.small,
                        borderTopRightRadius: SIZES.small,
                      },
                    ]}
                    label="Fullname"
                    placeholder="James Patrick"
                    placeholderTextColor={COLORS.light.primary}
                    inputMode="text"
                    mode="flat"
                    activeUnderlineColor={COLORS.light.gray}
                    underlineColor="transaparent"
                    outlineColor="transaparent"
                    onChangeText={handleChangeFullName}
                  />

                  <View
                    style={[
                      styles.input,
                      {
                        position: 'relative',
                        marginBottom: 10,
                        paddingVertical: 0,
                      },
                    ]}>
                    <Picker
                      selectedValue={mode}
                      onValueChange={(itemValue, itemIndex) => {
                        setMode(itemValue);
                        handleChange('country', itemValue);
                      }}
                      style={{color: COLORS.light.gray}}>
                      <Picker.Item label="Country" value="" />
                      {countries?.map((item, index) => (
                        <Picker.Item
                          label={item?.country_name?.toUpperCase()}
                          value={item?.country_name?.toLowerCase()}
                          key={index}
                        />
                      ))}
                    </Picker>
                  </View>

                  <TextInput
                    style={[
                      styles.input,
                      {
                        marginBottom: 10,
                        padding: 0,
                        borderTopLeftRadius: SIZES.small,
                        borderTopRightRadius: SIZES.small,
                      },
                    ]}
                    label="Email address"
                    placeholder="Email address"
                    placeholderTextColor={COLORS.light.primary}
                    inputMode="email"
                    mode="flat"
                    activeUnderlineColor={COLORS.light.gray}
                    underlineColor="transaparent"
                    outlineColor="transaparent"
                    onChangeText={value => handleChange('email', value)}
                  />

                  <View style={styles.passwordCon}>
                    <TextInput
                      style={[
                        styles.input,
                        {
                          padding: 0,
                          borderTopLeftRadius: SIZES.small,
                          borderTopRightRadius: SIZES.small,
                        },
                      ]}
                      label="Password"
                      placeholder="Password"
                      placeholderTextColor={COLORS.light.primary}
                      inputMode="text"
                      secureTextEntry={isVisible ? false : true}
                      mode="flat"
                      activeUnderlineColor={COLORS.light.gray}
                      underlineColor="transaparent"
                      outlineColor="transaparent"
                      onChangeText={value => handleChange('password', value)}
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

                <RectButton style={styles.button} onPress={handleSignUp}>
                  {processState.loading ? (
                    <ActivityIndicator
                      color={COLORS.light.white}
                      size="small"
                    />
                  ) : (
                    <Text style={styles.buttonTxt}>Sign up</Text>
                  )}
                </RectButton>

                <EmptyInputText text={processState?.errorText} />
              </View>
            </KeyboardAvoidingView>

            <Footer />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtherDetails;
