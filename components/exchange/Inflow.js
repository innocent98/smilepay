import {View, SafeAreaView, ScrollView} from 'react-native';
import React, {useRef} from 'react';
import {styles} from '../../constants/utils/styles';
import HorizontalLine from '../../constants/utils/HorizontalLine';
import Authenticate from '../../constants/utils/bottomSheets/Authenticate';
import Success from '../../constants/utils/bottomSheets/Success';
import ExchangeInput from './ExchangeInput';
import ExchangeHistory from './ExchangeHistory';

const Inflow = () => {
  const refRBSheet = useRef();
  const refRBSheetSuccess = useRef();

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
        refRBSheetSuccess={refRBSheetSuccess}
      />
      <Success
        refRBSheetSuccess={refRBSheetSuccess}
        text={'Exchange successful'}
      />
    </SafeAreaView>
  );
};

export default Inflow;
