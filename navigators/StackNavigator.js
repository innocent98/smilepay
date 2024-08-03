import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/Signup';
import ConfirmNo from '../components/signUp/ConfirmNo';
import LittleIntro from '../components/signUp/LittleIntro';
import OtherDetails from '../components/signUp/OtherDetails';
import VerifyAccount from '../components/signUp/VerifyAccount';
import Welcome from '../components/signUp/Welcome';
import Login from '../screens/Login';
import LoginSecretPin from '../components/login/LoginSecretPin';
import ForgotPassword from '../screens/ForgotPassword';
import VerifyPassword from '../components/forgotPassword/VerifyPassword';
import NewPassword from '../components/forgotPassword/NewPassword';
import ResetSuccessful from '../components/forgotPassword/ResetSuccessful';

const Stack = createStackNavigator();

const StackNavigator = ({submitForm, userState}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ConfirmNo" component={ConfirmNo} />
      <Stack.Screen name="LittleIntro" component={LittleIntro} />
      <Stack.Screen name="OtherDetails" component={OtherDetails} />
      <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="LoginSecretPin"
        component={LoginSecretPin}
        initialParams={{submitForm: submitForm, userState: userState}}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerifyPassword" component={VerifyPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="ResetSuccessful" component={ResetSuccessful} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
