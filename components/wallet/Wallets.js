import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from '../../constants/utils/styles';
import FocusedStatusBar from '../FocusStatusBar';
import {COLORS, SIZES} from '../../constants';
import Cards from './Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FundWallet from '../../constants/utils/bottomSheets/FundWallet';
import Success from '../../constants/utils/bottomSheets/Success';
import Authenticate from '../../constants/utils/bottomSheets/Authenticate';
import NewWallet from '../../constants/utils/bottomSheets/NewWallet';

const Wallets = () => {
  const refRBSheet = useRef();
  const refRBSheetForm = useRef();
  const refRBSheetCreateForm = useRef();
  const refRBSheetSuccess = useRef();

  const [isNewWallet, setIsNewWallet] = useState(false);
  const [isFund, setIsFund] = useState(false);

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
          <Text style={[styles.mediumTxt, {textAlign: 'left'}]}>Wallets</Text>
          <Text style={[styles.smallTxt, {textAlign: 'left'}]}>
            Where you keep them money for spending :)
          </Text>
        </View>

        <Cards
          refRBSheetForm={refRBSheetForm}
          setIsFund={setIsFund}
          setIsNewWallet={setIsNewWallet}
        />

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
              setIsNewWallet(true);
              setIsFund(false);
              TouchableOpacity;
            }}
          />

          <Text
            style={[styles.link, {textAlign: 'left'}]}
            onPress={() => {
              refRBSheetCreateForm.current.open();
              setIsNewWallet(true);
              setIsFund(false);
            }}>
            create new wallet
          </Text>
        </View>
      </View>

      <FundWallet refRBSheetForm={refRBSheetForm} refRBSheet={refRBSheet} />

      <NewWallet
        refRBSheetCreateForm={refRBSheetCreateForm}
        refRBSheetSuccess={refRBSheetSuccess}
      />

      <Authenticate
        refRBSheet={refRBSheet}
        refRBSheetSuccess={refRBSheetSuccess}
      />

      <Success
        refRBSheetSuccess={refRBSheetSuccess}
        text={
          isNewWallet
            ? 'Wallet added successfully'
            : 'Wallet funded successfully'
        }
      />
    </SafeAreaView>
  );
};

export default Wallets;
