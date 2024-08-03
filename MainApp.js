import React, {useReducer} from 'react';
import StackNavigator from './navigators/StackNavigator';
import {USER_INITIAL_STATE, userReducer} from './redux/userReducer';
import TabNavigator from './navigators/TabNavigator';
import { PROCESS_ACTION_TYPES } from './redux/actionTypes';

const MainApp = () => {
  const [userState, userDispatch] = useReducer(userReducer, USER_INITIAL_STATE);

  const submitForm = () => {
    console.log('tap')
    userDispatch({type: PROCESS_ACTION_TYPES.FETCH_START});
    setTimeout(() => {
      userDispatch({type: PROCESS_ACTION_TYPES.FETCH_SUCCESS});
    }, 2000);
    // Perform your submission logic here
  };
  // console.log(userState);

  return userState?.user ? <TabNavigator /> : <StackNavigator submitForm={submitForm} userState={userState} />;
};

export default MainApp;
