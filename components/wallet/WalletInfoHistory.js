import {View, Text, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../constants/utils/styles';
import {COLORS, SIZES} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WalletInfoHistory = () => {
  const [isChange, setIsChange] = useState(false);

  const handleChangeTab = () => {
    setIsChange(!isChange);
  };

  return (
    <View style={[styles.exchange, {marginVertical: 20}]}>
      <View style={styles.tabButton}>
        <TouchableHighlight
          onPress={handleChangeTab}
          style={[
            isChange ? styles.button2 : styles.button,
            {borderRadius: 30},
          ]}>
          <Text style={isChange ? styles.buttonTxt2 : styles.buttonTxt}>
            Citi bank
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={handleChangeTab}
          style={[
            isChange ? styles.button : styles.button2,
            {borderRadius: 30},
          ]}>
          <Text style={isChange ? styles.buttonTxt : styles.buttonTxt2}>
            Delta bank
          </Text>
        </TouchableHighlight>
      </View>

      <View style={[styles.exchangeHistory, {}]}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
          <View
            style={{
              backgroundColor: COLORS.light.red,
              borderRadius: 18,
              padding: 8,
            }}>
            <Icon
              name="arrow-back"
              size={30}
              color={COLORS.light.white}
              style={{
                transform: [{rotate: '135deg'}],
              }}
            />
          </View>
          <View style={{alignItems: 'flex-start', gap: 2}}>
            <Text
              style={[
                styles.mediumTxt,
                {fontSize: SIZES.font, textAlign: 'left'},
              ]}>
              Withdrawal
            </Text>

            <Text
              style={[
                styles.smallTxt,
                {fontSize: SIZES.small, marginBottom: 0},
              ]}>
              Jul 13
            </Text>
          </View>
        </View>

        <Text style={[styles.mediumTxt, {fontSize: SIZES.large}]}>$100</Text>
      </View>

      <View style={[styles.exchangeHistory, {marginTop: 25}]}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
          <View
            style={{
              backgroundColor: COLORS.light.success,
              borderRadius: 18,
              padding: 8,
            }}>
            <Icon
              name="arrow-back"
              size={30}
              color={COLORS.light.white}
              style={{
                transform: [{rotate: '-45deg'}],
              }}
            />
          </View>
          <View style={{alignItems: 'flex-start', gap: 2}}>
            <Text
              style={[
                styles.mediumTxt,
                {fontSize: SIZES.font, textAlign: 'left'},
              ]}>
              Funding
            </Text>

            <Text
              style={[
                styles.smallTxt,
                {fontSize: SIZES.small, marginBottom: 0},
              ]}>
              Jul 13
            </Text>
          </View>
        </View>

        <Text style={[styles.mediumTxt, {fontSize: SIZES.large}]}>$100</Text>
      </View>
    </View>
  );
};

export default WalletInfoHistory;
