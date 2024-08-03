import {View, SafeAreaView, ScrollView} from 'react-native';
import React, {useRef} from 'react';
import {styles} from '../../constants/utils/styles';
import HorizontalLine from '../../constants/utils/HorizontalLine';
import Authenticate from '../../constants/utils/bottomSheets/Authenticate';
import AccountDetails from '../../constants/utils/bottomSheets/AccountDetails';
import ExchangeInput from './ExchangeInput';
import ExchangeHistory from './ExchangeHistory';

const Cash = () => {
  const refRBSheet = useRef();
  const refRBSheetAccount = useRef();

  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View
          style={[styles.container, {paddingTop: 20, paddingHorizontal: 0}]}>
          <ExchangeInput refRBSheet={refRBSheet} />

          <HorizontalLine />

          <ExchangeHistory />

          <HorizontalLine />

        </View>
      </ScrollView>

      <Authenticate
        refRBSheet={refRBSheet}
        refRBSheetAccount={refRBSheetAccount}
      />

      <AccountDetails refRBSheetAccount={refRBSheetAccount} />
    </SafeAreaView>
  );
};

export default Cash;
