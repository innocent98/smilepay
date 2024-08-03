import React from 'react';
import {Dimensions, Image} from 'react-native';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Exchange from '../screens/Exchange';
import Home from '../screens/Home';
import Wallet from '../screens/Wallet';
import Transact from '../screens/Transact';
import History from '../screens/History';
import {styles} from '../constants/utils/styles';
import {COLORS} from '../constants';
import WalletTab from './WalletTabNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const itemHeight = Dimensions.get('window').height;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          const state = useNavigationState(state => state);
          const routeName = state.routeNames[state.index];

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={require('../assets/home.png')}
                  style={styles.tabImg}
                  tintColor={
                    routeName === route.name
                      ? COLORS.light.link
                      : COLORS.light.gray
                  }
                />
              );

            case 'Wallet':
              return (
                <Image
                  source={require('../assets/wallet.png')}
                  style={styles.tabImg}
                  tintColor={
                    routeName === route.name
                      ? COLORS.light.link
                      : COLORS.light.gray
                  }
                />
              );

            case 'Transact':
              return (
                <Image
                  source={require('../assets/transact.png')}
                  style={styles.tabImg}
                  tintColor={
                    routeName === route.name
                      ? COLORS.light.link
                      : COLORS.light.gray
                  }
                />
              );

            case 'Exchange':
              return (
                <Image
                  source={require('../assets/repeat.png')}
                  style={styles.tabImg}
                  tintColor={
                    routeName === route.name
                      ? COLORS.light.link
                      : COLORS.light.gray
                  }
                />
              );

            case 'History':
              return (
                <Image
                  source={require('../assets/file.png')}
                  style={styles.tabImg}
                  tintColor={
                    routeName === route.name
                      ? COLORS.light.link
                      : COLORS.light.gray
                  }
                />
              );

            default:
              'Home';
              break;
          }
        },
        tabBarStyle: {height: itemHeight * 0.08, paddingBottom: 10},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={WalletTab} />
      <Tab.Screen name="Transact" component={Transact} />
      <Tab.Screen name="Exchange" component={Exchange} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
