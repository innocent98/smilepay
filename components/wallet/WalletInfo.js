import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React, {useRef} from 'react';
import {styles} from '../../constants/utils/styles';
import FocusedStatusBar from '../FocusStatusBar';
import {COLORS, SIZES} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Authenticate from '../../constants/utils/bottomSheets/Authenticate';
import {useNavigation} from '@react-navigation/native';
import WalletInfoDetails from './WalletInfoDetails';
import Withdraw from '../../constants/utils/bottomSheets/Withdraw';
import Success from '../../constants/utils/bottomSheets/Success';
import RequestAccount from '../../constants/utils/bottomSheets/RequestAccount';

const WalletInfo = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const refRBSheetForm = useRef();
  const refRBSheetCreateForm = useRef();
  const refRBSheetSuccess = useRef();

  return (
    <SafeAreaView style={[styles.safeArea, {paddingHorizontal: SIZES.large}]}>
      <FocusedStatusBar />

      <ScrollView>
        <View
          style={[styles.container, {paddingTop: 40, paddingHorizontal: 0}]}>
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

          <View style={[styles.exchangeHistory, {marginTop: 0}]}>
            <View
              style={[
                styles.exchangeHistory,
                {marginTop: 20, justifyContent: 'flex-start', gap: 10},
              ]}>
              <View
                style={{
                  borderRadius: 50,
                  borderWidth: 2,
                  padding: 2,
                }}>
                <Icon
                  name="arrow-back"
                  size={22}
                  color={COLORS.light.primary}
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </View>

              <Text
                style={[styles.mediumTxt, {textAlign: 'left'}]}
                onPress={() => {
                  refRBSheetCreateForm.current.open();
                  setIsNewWallet(true);
                  setIsFund(false);
                }}>
                Wallet Info
              </Text>
            </View>

            <View
              style={[
                styles.exchangeHistory,
                {marginTop: 20, justifyContent: 'flex-start', gap: 10},
              ]}>
              <Icon
                name="add-circle"
                size={22}
                color={COLORS.light.link}
                onPress={() => {
                  refRBSheetCreateForm.current.open();
                }}
              />

              <Text
                style={[styles.link, {textAlign: 'left'}]}
                onPress={() => {
                  refRBSheetCreateForm.current.open();
                }}>
                Add new account
              </Text>
            </View>
          </View>

          <WalletInfoDetails refRBSheetForm={refRBSheetForm} />
        </View>
      </ScrollView>

      <Withdraw refRBSheetForm={refRBSheetForm} refRBSheet={refRBSheet} />

      <RequestAccount
        refRBSheetCreateForm={refRBSheetCreateForm}
        refRBSheetSuccess={refRBSheetSuccess}
      />

      <Authenticate
        refRBSheet={refRBSheet}
        refRBSheetSuccess={refRBSheetSuccess}
      />

      <Success
        refRBSheetSuccess={refRBSheetSuccess}
        text={'Withdrawal successfully'}
      />
    </SafeAreaView>
  );
};

export default WalletInfo;
