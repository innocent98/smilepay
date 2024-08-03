import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import {styles} from '../../constants/utils/styles';
import FocusedStatusBar from '../FocusStatusBar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Cash from './Cash';
import Inflow from './Inflow';
import {COLORS, SIZES} from '../../constants';

const Tab = createMaterialTopTabNavigator();

const Exchangee = () => {
  return (
    <SafeAreaView style={[styles.safeArea, {paddingHorizontal: SIZES.large}]}>
      <FocusedStatusBar />

      {/* <ScrollView> */}
      <View style={[styles.container, {paddingTop: 40, paddingHorizontal: 0}]}>
        <View style={styles.ExchangeTop}>
          <Text style={styles.mediumTxt}>Sm:)epay</Text>
          <Image source={require('../../assets/not_logo.png')} />
        </View>

        <View style={[styles.horizontalLine, {marginVertical: 30}]}>
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

        <View style={styles.exchange}>
          <Text style={[styles.mediumTxt, {textAlign: 'left'}]}>Exchange</Text>
          <Text style={[styles.smallTxt, {textAlign: 'left'}]}>
            Convert money from one currency to another
          </Text>
        </View>
      </View>

      <Tab.Navigator
        initialRouteName="Inflow"
        screenOptions={{
          tabBarActiveTintColor: COLORS.light.white,
          tabBarInactiveTintColor: COLORS.light.primary,
          tabBarScrollEnabled: false,
          swipeEnabled: false,
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.light.primary,
            height: '100%',
            borderRadius: 8,
          },
          tabBarLabelStyle: {
            fontFamily: 'Inter-Bold',
            fontSize: SIZES.small,
          },
          tabBarStyle: {
            backgroundColor: COLORS.light.background,
          },
        }}>
        <Tab.Screen name="Inflow" component={Inflow} />
        <Tab.Screen name="Cash" component={Cash} />
      </Tab.Navigator>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Exchangee;
