import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import {styles} from '../../constants/utils/styles';
import {COLORS, SIZES} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ExchangeDetails from '../../constants/utils/bottomSheets/ExchangeDetails';

const ExchangeHistory = () => {
  const refRBSheet = useRef();

  return (
    <View style={[styles.exchange, {marginTop: -30}]}>
      <Text style={[styles.mediumTxt, {textAlign: 'left'}]}>History</Text>

      <View style={styles.exchangeHistory}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
            <Text
              style={[
                styles.smallTxt,
                {fontSize: SIZES.small, marginBottom: 0},
              ]}>
              Inflow . 6hrs ago
            </Text>

            <Icon name="lens" size={8} color={COLORS.light.success} />
          </View>

          <Text
            style={[
              styles.mediumTxt,
              {fontSize: SIZES.font, textAlign: 'left'},
            ]}>
            $1 -{'>'} ₦ 0.84
          </Text>
        </View>

        <Text
          style={[
            styles.link,
            {borderBottomWidth: 1, borderBottomColor: COLORS.light.link},
          ]}
          onPress={() => refRBSheet.current.open()}>
          View details
        </Text>
      </View>

      <View style={styles.exchangeHistory}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
            <Text
              style={[
                styles.smallTxt,
                {fontSize: SIZES.small, marginBottom: 0},
              ]}>
              Cash . 6hrs ago
            </Text>

            <Icon name="lens" size={8} color={COLORS.light.red} />
          </View>

          <Text
            style={[
              styles.mediumTxt,
              {fontSize: SIZES.font, textAlign: 'left'},
            ]}>
            $1 -{'>'} ₦ 0.84
          </Text>
        </View>

        <Text
          style={[
            styles.link,
            {borderBottomWidth: 1, borderBottomColor: COLORS.light.link},
          ]}
          onPress={() => refRBSheet.current.open()}>
          View details
        </Text>
      </View>

      <ExchangeDetails refRBSheet={refRBSheet} />
    </View>
  );
};

export default ExchangeHistory;
